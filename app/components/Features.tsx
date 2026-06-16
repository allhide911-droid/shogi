import ShogiPieceIcon from "./ShogiPieceIcon";

const features = [
  {
    piece: "王",
    title: "丁寧・親切な指導",
    description:
      "経験豊富な講師が、一人ひとりのペースに合わせて丁寧に指導します。わからないことは何でも気軽に質問できる、アットホームな雰囲気の教室です。",
    points: ["マンツーマン対応", "わかりやすい解説", "個別フィードバック"],
  },
  {
    piece: "金",
    title: "初心者から有段者まで",
    description:
      "将棋のルールを知らない方から、段位取得を目指す上級者まで、レベル別クラスをご用意。お子様（小学生〜）から社会人・シニアまで幅広い年代が活躍中です。",
    points: ["レベル別クラス", "子ども〜シニア対応", "段位昇段サポート"],
  },
  {
    piece: "飛",
    title: "実戦・大会で強くなる",
    description:
      "教室内の対局会や、公認大会への参加を積極的にサポート。棋譜の検討や定跡の研究など、実力アップにつながる環境を整えています。",
    points: ["毎月の対局会", "大会参加サポート", "棋譜研究会"],
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28" style={{ backgroundColor: "#f8f6f0" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] mb-3 font-medium"
            style={{ color: "#c9a84c" }}
          >
            FEATURES
          </p>
          <h2
            className="font-mincho text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#1b3a6b" }}
          >
            教室の特徴
          </h2>
          <div className="kin-divider w-20 mx-auto mb-6" />
          <p className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#555" }}>
            王手将棋教室が選ばれる理由。将棋を楽しみながら、
            確実に実力が伸びる環境をご用意しています。
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-white rounded-sm p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: "0 2px 20px rgba(27,58,107,0.08)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              {/* Piece icon */}
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                <ShogiPieceIcon
                  kanji={f.piece}
                  size={64}
                  color="#1b3a6b"
                  textColor="#c9a84c"
                />
              </div>

              <h3
                className="font-mincho text-xl font-bold mb-4"
                style={{ color: "#1b3a6b" }}
              >
                {f.title}
              </h3>

              <div className="kin-divider w-12 mb-4" />

              <p className="text-sm leading-relaxed mb-6" style={{ color: "#666" }}>
                {f.description}
              </p>

              {/* Points */}
              <ul className="w-full space-y-2 mt-auto">
                {f.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-xs font-medium"
                    style={{ color: "#1b3a6b" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#c9a84c" }}
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* "こんな方を" section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <p
              className="text-xs tracking-[0.4em] mb-3 font-medium"
              style={{ color: "#c9a84c" }}
            >
              FOR YOU
            </p>
            <h2
              className="font-mincho text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#1b3a6b" }}
            >
              こんな方を、お待ちしています。
            </h2>
            <div className="kin-divider w-20 mx-auto mb-6" />
            <p className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#555" }}>
              年齢も経験も関係ない。将棋を楽しみたいという気持ちだけあれば大丈夫です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div
              className="bg-white rounded-sm p-8"
              style={{
                boxShadow: "0 2px 20px rgba(27,58,107,0.08)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <span
                className="inline-block text-xs font-bold tracking-widest px-3 py-1 mb-5"
                style={{ backgroundColor: "rgba(27,58,107,0.07)", color: "#1b3a6b" }}
              >
                こどもクラス / 小学生〜中学生
              </span>
              <h3
                className="font-mincho text-xl font-bold mb-4"
                style={{ color: "#1b3a6b" }}
              >
                将棋を始めたいお子さん・親御さんへ
              </h3>
              <div className="kin-divider w-12 mb-4" />
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                「集中力をつけさせたい」「論理的な思考を育てたい」。将棋は子どもの成長に絶大な効果があります。高橋講師による丁寧な指導で、楽しみながら力が伸びます。保護者の方への進捗報告も毎月実施しています。
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white rounded-sm p-8"
              style={{
                boxShadow: "0 2px 20px rgba(27,58,107,0.08)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <span
                className="inline-block text-xs font-bold tracking-widest px-3 py-1 mb-5"
                style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "#a07d2e" }}
              >
                一般クラス / 高校生〜シニア
              </span>
              <h3
                className="font-mincho text-xl font-bold mb-4"
                style={{ color: "#1b3a6b" }}
              >
                趣味を持ちたい・仲間を作りたい大人の方へ
              </h3>
              <div className="kin-divider w-12 mb-4" />
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                仕事帰りの集中できる時間、週末の充実した趣味として。同じ将棋好きの仲間と過ごす時間は、生涯の財産になります。初心者も有段者も、夕暮れ時の教室で盤を囲みましょう。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
