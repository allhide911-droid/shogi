import ShogiPieceIcon from "./ShogiPieceIcon";

const instructors = [
  {
    name: "田中 誠一",
    nameRuby: "たなか せいいち",
    title: "教室長・主任講師",
    rank: "七段",
    rankEn: "7th Dan",
    bio: "全国将棋普及指導員連盟認定。大阪府将棋選手権優勝（2008・2012年）、全国アマチュア選手権出場経験を持つ。将棋教育の普及に情熱を注ぎ、15年以上にわたり子どもから大人まで幅広い世代を指導。「将棋は人を育てる」を信条に、礼節と探究心を大切にした指導を行っている。",
    achievements: [
      "全国将棋普及指導員連盟 認定指導員",
      "大阪府将棋選手権 優勝（2008・2012）",
      "全国アマチュア選手権 出場",
      "指導歴 15年以上",
    ],
    piece: "王",
  },
  {
    name: "高橋 由香",
    nameRuby: "たかはし ゆか",
    title: "副講師",
    rank: "五段",
    rankEn: "5th Dan",
    bio: "全国将棋普及指導員連盟認定。子どものクラスを中心に担当し、将棋を通じた論理的思考力・集中力の育成に力を入れる。「負けから学ぶ」指導スタイルで、生徒の自主的な成長を促す。保護者からの信頼も厚い。",
    achievements: [
      "全国将棋普及指導員連盟 認定指導員",
      "近畿地区女流選手権 準優勝",
      "こども将棋指導員 資格保有",
      "指導歴 8年",
    ],
    piece: "金",
  },
];

export default function Instructor() {
  return (
    <section
      id="instructor"
      className="py-20 sm:py-28 ai-pattern"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] mb-3 font-medium"
            style={{ color: "#c9a84c" }}
          >
            INSTRUCTORS
          </p>
          <h2
            className="font-mincho text-3xl sm:text-4xl font-bold mb-4 text-white"
          >
            講師紹介
          </h2>
          <div className="kin-divider w-20 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto">
            経験豊富な講師陣が、皆様の棋力向上をサポートします。
          </p>
        </div>

        {/* Instructor cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {instructors.map((inst, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm rounded-sm overflow-hidden"
              style={{ border: "1px solid rgba(201,168,76,0.2)" }}
            >
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6">
                {/* Avatar */}
                <div className="flex flex-col items-center sm:items-start shrink-0">
                  <div
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-sm flex items-center justify-center mb-3"
                    style={{ backgroundColor: "rgba(27,58,107,0.6)", border: "1px solid rgba(201,168,76,0.3)" }}
                  >
                    <ShogiPieceIcon
                      kanji={inst.piece}
                      size={60}
                      color="#1b3a6b"
                      textColor="#c9a84c"
                    />
                  </div>
                  {/* Rank badge */}
                  <div
                    className="px-4 py-1.5 text-center"
                    style={{ backgroundColor: "#c9a84c" }}
                  >
                    <span className="text-ai-dark text-sm font-bold font-mincho" style={{ color: "#0d1f42" }}>
                      {inst.rank}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="text-xs tracking-widest mb-1" style={{ color: "#c9a84c" }}>
                    {inst.title}
                  </p>
                  <h3 className="font-mincho text-2xl font-bold text-white mb-0.5">
                    {inst.name}
                  </h3>
                  <p className="text-white/40 text-xs mb-4">{inst.nameRuby}</p>

                  <div className="kin-divider w-full mb-4" />

                  <p className="text-white/65 text-sm leading-relaxed mb-5">
                    {inst.bio}
                  </p>

                  {/* Achievements */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-3">
                    {inst.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex items-center gap-2 text-xs"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#c9a84c" }}
                        />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
