import Image from "next/image";

const plans = [
  {
    name: "こどもクラス",
    nameEn: "CHILDREN",
    target: "小学生〜中学生",
    price: "5,500",
    unit: "月",
    features: [
      "週1回 60分",
      "少人数制（定員6名）",
      "棋力別グループ指導",
      "月1回 対局会",
      "大会参加サポート",
      "保護者向け進捗報告",
    ],
    badge: null,
    highlight: false,
  },
  {
    name: "一般クラス",
    nameEn: "GENERAL",
    target: "高校生〜シニア",
    price: "7,700",
    unit: "月",
    features: [
      "週1回 90分",
      "少人数制（定員8名）",
      "レベル別指導",
      "月1回 対局会",
      "大会参加サポート",
      "棋譜検討・定跡研究",
    ],
    badge: "人気No.1",
    highlight: true,
  },
  {
    name: "個人指導",
    nameEn: "PRIVATE",
    target: "全年齢・全レベル",
    price: "4,400",
    unit: "コマ",
    features: [
      "60分 マンツーマン",
      "完全個別カリキュラム",
      "日程・時間を自由調整",
      "弱点集中トレーニング",
      "段位取得サポート",
      "オンライン対応可",
    ],
    badge: null,
    highlight: false,
  },
];

const lessonPoints = [
  "駒の動かし方・基本ルールから始められる入門カリキュラム",
  "わからないことはその場でいつでも質問OK。一人ひとりに対応",
  "棋力に合わせたレベル別クラスで、無理なくステップアップ",
  "月1回の対局会・大会サポートで実戦経験を積む機会も充実",
];

export default function Classes() {
  return (
    <section
      id="classes"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "#0d1428" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── レッスン紹介（2カラム） ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20 items-center">
          {/* Left: image */}
          <div
            className="relative rounded-sm overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/images/教室風景.png"
              alt="レッスン風景"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: text */}
          <div>
            <p
              className="text-xs tracking-[0.4em] mb-3 font-medium"
              style={{ color: "#C9A84C" }}
            >
              LESSON
            </p>
            <h2 className="font-mincho text-3xl sm:text-4xl font-bold mb-4 text-white leading-snug">
              「将棋、難しそう」が、<br className="hidden sm:block" />変わります。
            </h2>
            <div className="kin-divider w-20 mb-6" />
            <p
              className="text-sm sm:text-base leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.70)" }}
            >
              「将棋ってどこから始めればいいの？」そんな方こそ歓迎します。駒の動かし方から丁寧に、あなたのペースで進めます。
            </p>
            <ul className="space-y-3">
              {lessonPoints.map((pt) => (
                <li
                  key={pt}
                  className="px-4 py-3 text-sm leading-relaxed"
                  style={{
                    borderLeft: "2px solid #C9A84C",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    color: "rgba(255,255,255,0.80)",
                  }}
                >
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── クラス・料金 見出し ── */}
        <div className="text-center mb-8">
          <p
            className="text-xs tracking-[0.4em] mb-3 font-medium"
            style={{ color: "#C9A84C" }}
          >
            CLASSES & FEES
          </p>
          <p
            className="font-mincho text-base mb-4"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            クラス・料金
          </p>
          <div className="kin-divider w-20 mx-auto mb-6" />
          <p
            className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            全クラス、初回は
            <strong style={{ color: "#C9A84C" }}>無料体験レッスン</strong>
            を実施しております。お気軽にご参加ください。
          </p>
        </div>

        {/* ── 体験バナー ── */}
        <div
          className="mb-10 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            backgroundColor: "rgba(201,168,76,0.08)",
            border: "1px solid rgba(201,168,76,0.25)",
          }}
        >
          <div className="text-center sm:text-left">
            <p
              className="text-xs tracking-widest mb-1"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              FIRST LESSON FREE
            </p>
            <p className="font-bold text-lg font-mincho text-white">
              初回体験レッスン — 無料
            </p>
          </div>
          <a
            href="#access"
            className="shrink-0 px-6 py-2.5 text-sm font-bold font-mincho tracking-wide rounded-sm transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#c9a84c", color: "#0d1428" }}
          >
            お問い合わせ・予約
          </a>
        </div>

        {/* ── プランカード ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="relative flex flex-col rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={
                plan.highlight
                  ? {
                      border: "2px solid #c9a84c",
                      boxShadow: "0 8px 40px rgba(201,168,76,0.2)",
                    }
                  : {
                      border: "1px solid rgba(201,168,76,0.15)",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
                    }
              }
            >
              {plan.badge && (
                <div
                  className="absolute top-0 right-0 px-3 py-1 text-xs font-bold tracking-widest font-mincho"
                  style={{ backgroundColor: "#c9a84c", color: "#0d1428" }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div
                className="px-6 pt-8 pb-6 text-center"
                style={{
                  backgroundColor: plan.highlight
                    ? "rgba(201,168,76,0.10)"
                    : "rgba(255,255,255,0.04)",
                }}
              >
                <p
                  className="text-xs tracking-[0.3em] mb-2"
                  style={{
                    color: plan.highlight ? "#c9a84c" : "rgba(255,255,255,0.4)",
                  }}
                >
                  {plan.nameEn}
                </p>
                <h3 className="font-mincho text-2xl font-bold mb-1 text-white">
                  {plan.name}
                </h3>
                <p className="text-xs mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {plan.target}
                </p>
                <div className="kin-divider w-16 mx-auto mb-5" />
                <div className="flex items-end justify-center gap-1">
                  <span
                    className="text-xs mb-1.5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    月謝
                  </span>
                  <span
                    className="text-3xl sm:text-4xl font-bold font-mincho"
                    style={{ color: "#c9a84c" }}
                  >
                    ¥{plan.price}
                  </span>
                  <span
                    className="text-sm mb-1.5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    /{plan.unit}
                  </span>
                </div>
                <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                  税込
                </p>
              </div>

              {/* Features */}
              <div
                className="flex-1 px-6 py-6"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <ul className="space-y-3">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      <svg
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <circle cx="8" cy="8" r="7" stroke="#c9a84c" strokeWidth="1.5" />
                        <polyline
                          points="5,8 7,10.5 11,6"
                          stroke="#c9a84c"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div
                className="px-6 pb-6 pt-2"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <a
                  href="#access"
                  className="block w-full text-center py-3 text-sm font-bold font-mincho tracking-wide rounded-sm transition-all duration-200"
                  style={
                    plan.highlight
                      ? { backgroundColor: "#c9a84c", color: "#0d1428" }
                      : {
                          backgroundColor: "transparent",
                          color: "#c9a84c",
                          border: "1.5px solid rgba(201,168,76,0.5)",
                        }
                  }
                >
                  体験レッスンを申し込む
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: "rgba(255,255,255,0.3)" }}>
          ※ 入会金 ¥5,500（税込）が別途必要です。体験レッスン参加者は免除。テキスト代・大会参加費は別途。
        </p>
      </div>
    </section>
  );
}
