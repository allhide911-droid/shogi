import Image from "next/image";

const instructors = [
  {
    name: "田中 誠一",
    nameRuby: "たなか せいいち",
    title: "教室長・主任講師",
    rank: "七段",
    bio: "全国将棋普及指導員連盟認定。大阪府将棋選手権優勝（2008・2012年）、全国アマチュア選手権出場経験を持つ。将棋教育の普及に情熱を注ぎ、15年以上にわたり子どもから大人まで幅広い世代を指導。「将棋は人を育てる」を信条に、礼節と探究心を大切にした指導を行っている。",
    achievements: [
      "全国将棋普及指導員連盟 認定指導員",
      "大阪府将棋選手権 優勝（2008・2012）",
      "全国アマチュア選手権 出場",
      "指導歴 15年以上",
    ],
    photo: "/images/男性.png",
  },
  {
    name: "高橋 由香",
    nameRuby: "たかはし ゆか",
    title: "副講師",
    rank: "五段",
    bio: "全国将棋普及指導員連盟認定。子どものクラスを中心に担当し、将棋を通じた論理的思考力・集中力の育成に力を入れる。「負けから学ぶ」指導スタイルで、生徒の自主的な成長を促す。保護者からの信頼も厚い。",
    achievements: [
      "全国将棋普及指導員連盟 認定指導員",
      "近畿地区女流選手権 準優勝",
      "こども将棋指導員 資格保有",
      "指導歴 8年",
    ],
    photo: "/images/女性.png",
  },
];

export default function Instructor() {
  return (
    <section
      id="instructor"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "#FAF7F2" }}
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
            className="font-mincho text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#1b3a6b" }}
          >
            講師紹介
          </h2>
          <div className="kin-divider w-20 mx-auto mb-6" />
          <p
            className="text-sm sm:text-base max-w-xl mx-auto"
            style={{ color: "#666" }}
          >
            経験豊富な講師陣が、皆様の棋力向上をサポートします。
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {instructors.map((inst, i) => (
            <div
              key={i}
              className="rounded-sm overflow-hidden"
              style={{
                backgroundColor: "#1b3a6b",
                border: "1px solid rgba(201,168,76,0.2)",
                boxShadow: "0 4px 24px rgba(27,58,107,0.15)",
              }}
            >
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6">
                {/* Avatar */}
                <div className="flex flex-col items-center sm:items-start shrink-0">
                  <div className="mb-3">
                    <Image
                      src={inst.photo}
                      alt={inst.name}
                      width={100}
                      height={100}
                      style={{
                        borderRadius: "50%",
                        border: "2px solid rgba(201,168,76,0.4)",
                        objectFit: "cover",
                        objectPosition: "center top",
                      }}
                    />
                  </div>
                  <div
                    className="px-4 py-1.5 text-center"
                    style={{ backgroundColor: "#c9a84c" }}
                  >
                    <span
                      className="text-sm font-bold font-mincho"
                      style={{ color: "#0d1428" }}
                    >
                      {inst.rank}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p
                    className="text-xs tracking-widest mb-1"
                    style={{ color: "#c9a84c" }}
                  >
                    {inst.title}
                  </p>
                  <h3 className="font-mincho text-2xl font-bold text-white mb-0.5">
                    {inst.name}
                  </h3>
                  <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {inst.nameRuby}
                  </p>

                  <div className="kin-divider w-full mb-4" />

                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {inst.bio}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-3">
                    {inst.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex items-center gap-2 text-xs"
                        style={{ color: "rgba(255,255,255,0.70)" }}
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
