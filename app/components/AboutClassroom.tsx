import Image from "next/image";

const points = [
  {
    title: "採光・開放感",
    body: "大きな窓から自然光が差し込む、清潔で明るい空間です。",
  },
  {
    title: "本格的な将棋盤",
    body: "質の高い将棋盤を複数台完備。集中できる環境を整えています。",
  },
  {
    title: "アットホームな雰囲気",
    body: "初めての方も緊張せず溶け込める、温かいコミュニティです。",
  },
];

export default function AboutClassroom() {
  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left: image */}
      <div className="relative h-72 sm:h-96 lg:h-auto" style={{ minHeight: "420px" }}>
        <Image
          src="/images/室内.png"
          alt="教室内観"
          fill
          className="object-cover"
        />
      </div>

      {/* Right: text */}
      <div
        className="px-8 sm:px-14 py-16 sm:py-20 flex flex-col justify-center"
        style={{ backgroundColor: "#0d1428" }}
      >
        <p
          className="text-xs tracking-[0.4em] mb-4 font-medium"
          style={{ color: "#C9A84C" }}
        >
          ABOUT THE CLASSROOM
        </p>
        <h2 className="font-mincho text-3xl sm:text-4xl font-bold mb-6 text-white leading-snug">
          明るく、入りやすい教室です。
        </h2>
        <div className="kin-divider w-20 mb-8" />
        <p
          className="text-sm sm:text-base leading-relaxed mb-10"
          style={{ color: "rgba(255,255,255,0.70)" }}
        >
          大阪・北浜に位置する、開放感あふれる将棋教室。窓から差し込む自然光の中で、将棋の醍醐味を味わっていただけます。
        </p>

        <ul className="space-y-6">
          {points.map((pt) => (
            <li key={pt.title} className="flex gap-4">
              <span
                className="w-0.5 shrink-0 rounded-full"
                style={{ backgroundColor: "#C9A84C" }}
              />
              <div>
                <p
                  className="text-sm font-bold font-mincho mb-1"
                  style={{ color: "#C9A84C" }}
                >
                  {pt.title}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {pt.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
