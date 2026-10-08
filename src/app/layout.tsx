import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Printello | Web-to-Print Platform with Seamless Canva Integration",
  description: "บอกสิ่งที่อยากได้ แล้วเรามีคนดูแลจนได้งานพิมพ์ แพลตฟอร์มจากความต้องการ ออกแบบ ผลิต ส่งถึงมือ โดยมีใบงานกลางใบเดียว",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>
        <div className="bg-pattern"></div>
        <header className="header">
          <div className="container header-content">
            <a href="/">
              {/* ใช้ Logo จริงที่ผู้ใช้มี รบกวนวางไฟล์โลโก้ในโฟลเดอร์ public ด้วยชื่อ logo.png หรือ logo.jpg นะครับ */}
              <img src="/logo.png" alt="Printello Logo" className="logo-img" />
            </a>
            <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
              <a href="#buyer" style={{ fontSize: "16px", fontWeight: 500, fontFamily: 'Prompt, sans-serif' }}>ผู้สั่งพิมพ์</a>
              <a href="#creator" style={{ fontSize: "16px", fontWeight: 500, fontFamily: 'Prompt, sans-serif' }}>นักออกแบบ</a>
              <a href="#printshop" style={{ fontSize: "16px", fontWeight: 500, fontFamily: 'Prompt, sans-serif' }}>ร้านพิมพ์</a>
              <button className="btn btn-outline" style={{ padding: "8px 24px" }}>เข้าสู่ระบบ</button>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container">
            <p>&copy; 2026 Printello.shop โครงการเชียงใหม่เมืองแห่งอุตสาหกรรมและธุรกิจดิจิทัลระดับโลก</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
