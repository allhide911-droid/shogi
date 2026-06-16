import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" id="hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/トップ画.png"
          alt=""
          fill
          className="object-cover"
          priority
          style={{ filter: "brightness(0.55)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1428]/30 via-transparent to-[#0d1428]/75" />
      </div>

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px z-10 bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-20">
        <div className="text-center px-4 sm:px-8 max-w-4xl mx-auto py-12">
          {/* Badge */}
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

          {/* Title */}
          <h1 className="font-mincho mb-6">
            <span
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug"
              style={{
                background: "linear-gradient(135deg, #e2c97e 0%, #c9a84c 50%, #a07d2e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              将棋は、思考を育てる芸術である。
            </span>
          </h1>

          <div className="kin-divider w-40 mx-auto my-8" />

          <p className="text-white/75 text-base sm:text-lg md:text-xl leading-relaxed mb-4 font-mincho">
            子どもから大人まで。初心者から有段者まで。
          </p>
          <p className="text-white/60 text-sm sm:text-base mb-10 tracking-wide">
            アットホームな雰囲気の中で、あなたのペースで学べます。
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#classes"
              className="inline-block px-8 py-4 text-sm sm:text-base font-bold font-mincho tracking-widest rounded-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#c9a84c",
                color: "#0d1428",
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
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 backdrop-blur-[8px]"
        style={{
          backgroundColor: "rgba(8,14,35,0.75)",
          borderTop: "1px solid rgba(201,168,76,0.3)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3">
            {[
              { num: "15", label: "年の指導実績" },
              { num: "120", label: "名の在籍生徒" },
              { num: "80", label: "名の有段者輩出" },
            ].map((s, i) => (
              <div
                key={s.num}
                className="text-center py-5 sm:py-7"
                style={i < 2 ? { borderRight: "1px solid rgba(201,168,76,0.2)" } : undefined}
              >
                <div
                  className="text-2xl sm:text-3xl font-bold font-mincho"
                  style={{ color: "#C9A84C" }}
                >
                  {s.num}
                </div>
                <div
                  className="text-xs tracking-widest mt-1"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
