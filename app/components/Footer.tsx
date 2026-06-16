import ShogiPieceIcon from "./ShogiPieceIcon";

const navLinks = [
  { label: "教室の特徴", href: "#features" },
  { label: "クラス・料金", href: "#classes" },
  { label: "講師紹介", href: "#instructor" },
  { label: "アクセス", href: "#access" },
];

export default function Footer() {
  return (
    <footer className="ai-pattern">
      {/* Top divider */}
      <div className="kin-divider" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <ShogiPieceIcon kanji="王" size={40} color="#1b3a6b" textColor="#c9a84c" />
              <div>
                <p
                  className="font-mincho text-lg font-bold"
                  style={{ color: "#c9a84c" }}
                >
                  王手将棋教室
                </p>
                <p className="text-white/40 text-xs tracking-widest">
                  ŌTE SHOGI KYŌSHITSU
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              大阪市中央区・北浜。
              <br />
              子どもから大人まで通える将棋教室。
              <br />
              創立15年の歴史と実績。
            </p>
            <p className="text-xs" style={{ color: "rgba(201,168,76,0.7)" }}>
              〒541-0041 大阪市中央区北浜1丁目
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs tracking-[0.3em] mb-5 font-medium"
              style={{ color: "#c9a84c" }}
            >
              MENU
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span
                    className="w-4 h-px transition-all duration-300 group-hover:w-6"
                    style={{ backgroundColor: "#c9a84c" }}
                  />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.3em] mb-5 font-medium"
              style={{ color: "#c9a84c" }}
            >
              CONTACT
            </h4>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" style={{ color: "#c9a84c" }}>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:0612345678" className="hover:text-white transition-colors">
                  06-1234-5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" style={{ color: "#c9a84c" }}>
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:info@ote-shogi.jp"
                  className="hover:text-white transition-colors break-all"
                >
                  info@ote-shogi.jp
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" style={{ color: "#c9a84c" }}>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>月・水・金・土・日<br />10:00〜21:00</span>
              </div>
            </div>

            <a
              href="#classes"
              className="inline-block mt-6 px-5 py-2.5 text-xs font-bold font-mincho tracking-wide transition-all duration-200"
              style={{
                border: "1px solid #c9a84c",
                color: "#c9a84c",
              }}
            >
              無料体験を申し込む →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-4 sm:px-6 py-5"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} 王手将棋教室. All rights reserved.</p>
          <p className="tracking-widest">OSAKA · KITAHAMA</p>
        </div>
      </div>
    </footer>
  );
}
