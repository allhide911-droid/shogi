import ShogiPieceIcon from "./ShogiPieceIcon";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden ai-pattern"
      id="hero"
    >
      {/* Decorative pieces background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large piece top-right */}
        <div className="absolute -top-8 -right-8 opacity-5">
          <ShogiPieceIcon kanji="飛" size={220} color="#c9a84c" textColor="#fff" />
        </div>
        {/* Large piece bottom-left */}
        <div className="absolute -bottom-12 -left-8 opacity-5">
          <ShogiPieceIcon kanji="角" size={200} color="#c9a84c" textColor="#fff" />
        </div>
        {/* Small pieces scattered */}
        <div className="absolute top-1/4 left-8 opacity-10">
          <ShogiPieceIcon kanji="金" size={80} color="#c9a84c" textColor="#fff" />
        </div>
        <div className="absolute bottom-1/3 right-12 opacity-10">
          <ShogiPieceIcon kanji="銀" size={70} color="#c9a84c" textColor="#fff" />
        </div>
        <div className="absolute top-1/2 right-1/4 opacity-8">
          <ShogiPieceIcon kanji="桂" size={60} color="#c9a84c" textColor="#fff" />
        </div>

        {/* Gold horizontal lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
        {/* Subtitle badge */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="h-px w-10 sm:w-16 bg-[#c9a84c]/60" />
          <span
            className="text-xs sm:text-sm tracking-[0.3em] font-medium"
            style={{ color: "#c9a84c" }}
          >
            大阪市・将棋教室
          </span>
          <span className="h-px w-10 sm:w-16 bg-[#c9a84c]/60" />
        </div>

        {/* Main title */}
        <h1 className="font-mincho mb-6">
          <span
            className="block text-5xl sm:text-7xl md:text-8xl font-bold leading-tight text-kin-gradient"
            style={{
              background: "linear-gradient(135deg, #e2c97e 0%, #c9a84c 50%, #a07d2e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            王手
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 tracking-widest">
            将棋教室
          </span>
        </h1>

        {/* Gold divider */}
        <div className="kin-divider w-40 mx-auto my-8" />

        {/* Description */}
        <p className="text-white/75 text-base sm:text-lg md:text-xl leading-relaxed mb-4 font-mincho">
          子どもから大人まで、初心者から有段者まで。
        </p>
        <p className="text-white/60 text-sm sm:text-base mb-10 tracking-wide">
          丁寧な指導で、将棋の醍醐味をお伝えします。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#classes"
            className="inline-block px-8 py-4 text-sm sm:text-base font-bold font-mincho tracking-widest rounded-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: "#c9a84c",
              color: "#0d1f42",
              boxShadow: "0 4px 24px rgba(201,168,76,0.35)",
            }}
          >
            無料体験レッスンを申し込む
          </a>
          <a
            href="#features"
            className="inline-block px-8 py-4 text-sm sm:text-base font-medium tracking-widest border rounded-sm text-white/80 hover:text-white hover:border-white/60 transition-all duration-300"
            style={{ borderColor: "rgba(255,255,255,0.3)" }}
          >
            教室の特徴を見る
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 border-t pt-10 max-w-lg mx-auto"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          {[
            { num: "15", val: "年の指導実績" },
            { num: "120", val: "名の在籍生徒" },
            { num: "80", val: "名の有段者輩出" },
          ].map((s) => (
            <div key={s.num} className="text-center">
              <div className="text-xs text-white/40 tracking-widest mb-1">{s.num}</div>
              <div
                className="text-xl sm:text-2xl font-bold font-mincho"
                style={{ color: "#c9a84c" }}
              >
                {s.val}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
