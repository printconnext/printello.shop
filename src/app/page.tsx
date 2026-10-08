"use client";

import React from "react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div style={{ marginBottom: "-30px", display: "flex", justifyContent: "center" }}>
              <img src="/logo.png" alt="Printello" style={{ width: "100%", maxWidth: "720px", height: "auto" }} />
            </div>
            <div className="hero-badge">Web-to-Print Platform with Seamless Canva Integration</div>
            <h1 className="hero-title">
              แพลตฟอร์ม <span className="text-gradient">“จากความต้องการ”</span><br />
              สู่ <span className="text-gradient">“งานพิมพ์ถึงมือ”</span>
            </h1>
            <p className="hero-subtitle">
              บอกสิ่งที่คุณอยากได้ เรามีคนดูแลตั้งแต่ ออกแบบ ผลิต จนส่งถึงมือคุณ<br />
              ด้วยใบงานกลางใบเดียวจบ ไม่ต้องปวดหัวประสานงานเอง
            </p>
            
            <div style={{ margin: "40px 0" }}>
              <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>คุณอยากทำอะไร?</h3>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
                {["นามบัตร", "ใบปลิว/โบรชัวร์", "สติกเกอร์สินค้า", "ป้ายไวนิล", "ยังไม่รู้ว่าควรใช้สิ่งพิมพ์แบบไหน"].map((item, i) => (
                  <span key={i} style={{ 
                    padding: "10px 20px", 
                    borderRadius: "100px", 
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: "15px"
                  }}>{item}</span>
                ))}
              </div>
            </div>

            <div className="hero-actions" style={{ flexDirection: "column", alignItems: "center", gap: "20px" }}>
              <h3 style={{ fontSize: "20px" }}>คุณอยู่ในสถานะไหน?</h3>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                <button className="btn btn-primary" style={{ minWidth: "220px", background: "linear-gradient(90deg, #e6007e, #00a8e8)" }}>
                  ยังไม่มีแบบ
                </button>
                <button className="btn btn-outline" style={{ minWidth: "220px" }}>
                  มีแบบแต่ไม่แน่ใจว่าพิมพ์ได้
                </button>
                <button className="btn btn-outline" style={{ minWidth: "220px", borderColor: "var(--primary)", color: "var(--primary)" }}>
                  มีไฟล์พร้อมพิมพ์
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Overview (From PDF Style) */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <h2 className="section-title text-gradient" style={{ textTransform: "uppercase" }}>Problem Overview</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-number">01</div>
              <h3 className="problem-title">การสั่งผลิตงานพิมพ์คุณภาพสูงเข้าถึงได้ยาก</h3>
              <p className="problem-desc">สินค้าชุมชน หรือผู้ประกอบการรายเล็กในไทย ที่ใช้ Canva ยังเข้าไม่ถึงงานพิมพ์คุณภาพ ด้วยปัญหาการเซ็ตไฟล์พิมพ์จาก Canva</p>
            </div>
            <div className="problem-card">
              <div className="problem-number">02</div>
              <h3 className="problem-title">Non-Designer ออกแบบจาก Canva แต่พิมพ์มาไม่ตรงตามต้องการ</h3>
              <p className="problem-desc">ผู้ใช้ไม่รู้จัก CMYK, Bleed หรือ Margin ทำให้งานพิมพ์ที่ได้มาเสีย ตัวอักษรโดนตัดขอบ หรือสีที่เคยสดใสบนหน้าจอกลายเป็นสีตุ่นเมื่อพิมพ์จริง</p>
            </div>
            <div className="problem-card">
              <div className="problem-number">03</div>
              <h3 className="problem-title">ขั้นตอนการเซ็ตไฟล์พิมพ์เดิมล่าช้า และไร้ประสิทธิภาพ</h3>
              <p className="problem-desc">Canva ออกแบบมาเพื่อความเร็ว แต่ขั้นตอนการสั่งพิมพ์ในปัจจุบันมีขั้นตอนนำไฟล์ออกมาตรวจสอบที่ใช้เวลานาน</p>
            </div>
            <div className="problem-card">
              <div className="problem-number">04</div>
              <h3 className="problem-title">สินค้าชุมชน และแบรนด์เริ่มต้นของไทยใช้ Canva ออกแบบไฟล์ดิจิทัล แต่ออกเป็นสิ่งพิมพ์จำนวนน้อย</h3>
              <p className="problem-desc">ธุรกิจขนาดเล็กสามารถขับเคลื่อนธุรกิจได้ด้วยไฟล์ดิจิทัล จาก Content สื่อสารแบรนด์ แต่ยังมีจำนวนน้อยที่เพิ่มการขับเคลื่อนผ่านสิ่งพิมพ์ในการตลาด</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Roles Section */}
      <section className="section" id="roles">
        <div className="container">
          <h2 className="section-title text-gradient">แบ่งส่วนระบบให้ชัดเจนด้วย 3 Portal</h2>
          
          <div className="problem-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            <div className="problem-card" style={{ textAlign: "center", padding: "40px 20px" }}>
              <h3 className="problem-title" style={{ color: "var(--primary)" }}>Buyer Portal</h3>
              <p className="problem-desc" style={{ marginBottom: "20px" }}>สำหรับผู้สั่งพิมพ์ที่ไม่ต้องรู้เรื่องไฟล์</p>
              <ul style={{ textAlign: "left", color: "var(--foreground-muted)", fontSize: "15px", paddingLeft: "20px" }}>
                <li>เลือกสินค้า กรอกบรีฟ ส่งรูป/ข้อความ</li>
                <li>รับราคา ตรวจแบบ อนุมัติ</li>
                <li>ชำระเงิน ติดตามงาน</li>
              </ul>
            </div>
            <div className="problem-card" style={{ textAlign: "center", padding: "40px 20px" }}>
              <h3 className="problem-title" style={{ color: "var(--secondary)" }}>Creator Workspace</h3>
              <p className="problem-desc" style={{ marginBottom: "20px" }}>สำหรับคนทำอาร์ตเวิร์ก</p>
              <ul style={{ textAlign: "left", color: "var(--foreground-muted)", fontSize: "15px", paddingLeft: "20px" }}>
                <li>รับบรีฟ เสนอค่าบริการ</li>
                <li>ทำแบบ ส่งแก้ไข</li>
                <li>เตรียมไฟล์พิมพ์ ส่งมอบไฟล์</li>
              </ul>
            </div>
            <div className="problem-card" style={{ textAlign: "center", padding: "40px 20px" }}>
              <h3 className="problem-title" style={{ color: "var(--tertiary)" }}>Print Shop Portal</h3>
              <p className="problem-desc" style={{ marginBottom: "20px" }}>สำหรับโรงพิมพ์/ร้านป้าย</p>
              <ul style={{ textAlign: "left", color: "var(--foreground-muted)", fontSize: "15px", paddingLeft: "20px" }}>
                <li>ระบุงานที่รับ แจ้งสเปก เสนอราคา</li>
                <li>ตรวจไฟล์ รับผลิต</li>
                <li>อัปเดตสถานะ ส่งสินค้า</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <h2 className="section-title text-gradient">ลำดับงานล็อกสเปกก่อนเริ่มออกแบบ</h2>
          
          <div className="workflow-grid">
            <div className="workflow-step">
              <div className="step-circle">1</div>
              <h3 className="step-title">เลือกสินค้าและกรอกบรีฟ</h3>
              <p className="step-desc">กำหนดสเปกและประเมินราคา ก่อนเริ่มทำแบบ</p>
            </div>
            <div className="workflow-step">
              <div className="step-circle">2</div>
              <h3 className="step-title">Creator ทำแบบ</h3>
              <p className="step-desc">ลูกค้าอนุมัติแบบ เนื้อหา และหน้าตา</p>
            </div>
            <div className="workflow-step">
              <div className="step-circle">3</div>
              <h3 className="step-title">ร้านพิมพ์ตรวจรับไฟล์</h3>
              <p className="step-desc">ยืนยันว่าไฟล์พร้อมผลิต หากไม่ผ่านให้แก้ไฟล์</p>
            </div>
            <div className="workflow-step">
              <div className="step-circle">4</div>
              <h3 className="step-title">ผลิตและจัดส่ง</h3>
              <p className="step-desc">งานพิมพ์ส่งมอบถึงมือลูกค้า</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
