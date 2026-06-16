import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "screenshots");
mkdirSync(outDir, { recursive: true });

const sections = [
  { id: "hero", file: "01-hero.png" },
  { id: "features", file: "02-features.png" },
  { id: "classes", file: "03-classes.png" },
];

const newTab = await fetch(
  "http://127.0.0.1:9222/json/new?http://localhost:3000",
  { method: "PUT" }
);
const page = await newTab.json();
const ws = new WebSocket(page.webSocketDebuggerUrl);

let msgId = 1;
const pending = new Map();

function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = msgId++;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

ws.addEventListener("message", (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(new Error(msg.error.message));
    else resolve(msg.result);
  }
});

ws.addEventListener("error", () => {
  console.error("WebSocket error");
  process.exit(1);
});

await new Promise((resolve) => ws.addEventListener("open", resolve));

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width: 1280,
  height: 900,
  deviceScaleFactor: 1,
  mobile: false,
});

await new Promise((r) => setTimeout(r, 2500));

for (const { id, file } of sections) {
  const { result } = await send("Runtime.evaluate", {
    expression: `(function() {
      const el = document.getElementById(${JSON.stringify(id)});
      if (!el) return false;
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: Math.max(0, top - 72), behavior: "instant" });
      return true;
    })()`,
    returnByValue: true,
  });

  if (!result?.value) {
    console.error(`Section #${id} not found`);
    continue;
  }

  await new Promise((r) => setTimeout(r, 600));

  const screenshot = await send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
  });

  const path = join(outDir, file);
  writeFileSync(path, Buffer.from(screenshot.data, "base64"));
  console.log(`saved ${path}`);
}

await send("Page.close");
ws.close();
