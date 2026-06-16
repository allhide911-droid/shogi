const info = [
  {
    label: "住所",
    value: "〒541-0041\n大阪市中央区北浜1丁目",
  },
  {
    label: "最寄り駅",
    value:
      "大阪メトロ御堂筋線・京阪「淀屋橋駅」4番出口 徒歩5分\n大阪メトロ堺筋線「北浜駅」3番出口 徒歩3分",
  },
  {
    label: "開講日時",
    value: "月・水・金・土・日\n10:00 〜 21:00（最終受付 20:00）",
  },
  {
    label: "電話番号",
    value: "06-1234-5678",
  },
  {
    label: "メール",
    value: "info@ote-shogi.jp",
  },
];

export default function Access() {
  return (
    <section id="access" className="py-20 sm:py-28" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] mb-3 font-medium"
            style={{ color: "#c9a84c" }}
          >
            ACCESS
          </p>
          <h2
            className="font-mincho text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#1b3a6b" }}
          >
            アクセス
          </h2>
          <div className="kin-divider w-20 mx-auto mb-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map placeholder */}
          <div
            className="w-full rounded-sm overflow-hidden"
            style={{
              height: "400px",
              border: "1px solid rgba(201,168,76,0.25)",
              boxShadow: "0 4px 24px rgba(27,58,107,0.1)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.2762419062299!2d135.50724790680314!3d34.69124249859915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6de621fb7cf%3A0x1cfe3ca56d153b12!2z44CSNTQxLTAwNDEg5aSn6Ziq5bqc5aSn6Ziq5biC5Lit5aSu5Yy65YyX5rWc77yR5LiB55uu!5e0!3m2!1sja!2sjp!4v1781617264260!5m2!1sja!2sjp"
              width="100%"
              height="320"
              style={{ border: 0, filter: "sepia(20%) contrast(0.9)", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="王手将棋教室 地図"
            />
          </div>

          {/* Info card */}
          <div
            className="bg-white rounded-sm p-6 sm:p-8 h-full"
            style={{
              border: "1px solid rgba(201,168,76,0.2)",
              boxShadow: "0 4px 24px rgba(27,58,107,0.08)",
            }}
          >
            <h3
              className="font-mincho text-xl font-bold mb-6"
              style={{ color: "#1b3a6b" }}
            >
              教室情報
            </h3>

            <dl className="space-y-5">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-4 pb-5"
                  style={{ borderBottom: "1px solid rgba(27,58,107,0.08)" }}
                >
                  <dt
                    className="text-xs font-bold tracking-widest shrink-0 w-24"
                    style={{ color: "#c9a84c" }}
                  >
                    {item.label}
                  </dt>
                  <dd
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: "#333" }}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* CTA */}
            <div className="mt-8 space-y-3">
              <a
                href="tel:0612345678"
                className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold font-mincho tracking-wide rounded-sm transition-all duration-200"
                style={{ backgroundColor: "#1b3a6b", color: "#ffffff" }}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                電話でお問い合わせ
              </a>
              <a
                href={`mailto:info@ote-shogi.jp?subject=体験レッスンのご予約`}
                className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold font-mincho tracking-wide rounded-sm transition-all duration-200 border-2"
                style={{ borderColor: "#c9a84c", color: "#c9a84c" }}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                メールでお問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
