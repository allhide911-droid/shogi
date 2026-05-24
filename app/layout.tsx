import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "王手将棋教室 | 大阪市の将棋教室",
  description:
    "大阪市内にある王手将棋教室。子どもから大人まで通える将棋教室です。初心者歓迎・丁寧な指導・アットホームな雰囲気でお待ちしています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
