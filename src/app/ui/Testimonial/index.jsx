"use client";
import React, { useState } from 'react';
import Rating from '../Rating';
import Image from 'next/image';

export default function Testimonial() {
  const [activeTab, setActiveTab] = useState(2);
  const handleTabClick = tabNumber => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="cs_tabs cs_style1">
      <ul className="cs_tab_links">
        <li className={activeTab === 1 ? 'active' : ''}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(1)}>
            <div className="cs_testimonial_1_avatar">
              <Image src="/images/home_1/avatar_1.png" alt="Avatar" height={125} width={125} />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">คุณพิมพ์</h3>
                <p className="cs_heading_color mb-0">กรุงเทพฯ, ประเทศไทย</p>
              </div>
            </div>
          </div>
        </li>
        <li className={activeTab === 2 ? 'active' : ''}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(2)}>
            <div className="cs_testimonial_1_avatar">
              <Image src="/images/home_1/avatar_2.png" alt="Avatar" height={125} width={125} />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">คุณลิลลี่</h3>
                <p className="cs_heading_color mb-0">เชียงใหม่, ประเทศไทย</p>
              </div>
            </div>
          </div>
        </li>
        <li className={activeTab === 3 ? 'active' : ''}>
          <div className="cs_tab_link_in" onClick={() => handleTabClick(3)}>
            <div className="cs_testimonial_1_avatar">
              <Image src="/images/home_1/avatar_3.png" alt="Avatar" height={125} width={125} />
              <div className="cs_testimonial_1_avatar_right">
                <h3 className="cs_fs_24 cs_semibold mb-0">คุณวิทยา</h3>
                <p className="cs_heading_color mb-0">พัทยา, ประเทศไทย</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="cs_tab_body">
        {activeTab === 1 && (
          <div className="cs_testimonial cs_style_1">
            <Image src="/images/icons/quote.svg" alt="Icon" height={38} width={50} />
            <p>
              ฉันรู้สึกประทับใจกับบริการทำตาสองชั้นที่ D Bangkok Clinic มาก ทีมแพทย์ให้คำแนะนำอย่างดีและเอาใจใส่ทุกรายละเอียด ผลลัพธ์ที่ได้เป็นธรรมชาติและสวยมากค่ะ!
            </p>
            <Rating ratingNumber={5} />
          </div>
        )}
        {activeTab === 2 && (
          <div className="cs_testimonial cs_style_1">
            <Image src="/images/icons/quote.svg" alt="Icon" height={38} width={50} />
            <p>
              ฉันมาทำเลเซอร์ยกกระชับผิวที่นี่ และผลลัพธ์ที่ได้ทำให้ฉันรู้สึกพอใจมาก ผิวหน้าดูเต่งตึงและสดใสขึ้น ทีมแพทย์ดูแลดีมากค่ะ.
            </p>
            <Rating ratingNumber={4.5} />
          </div>
        )}
        {activeTab === 3 && (
          <div className="cs_testimonial cs_style_1">
            <Image src="/images/icons/quote.svg" alt="Icon" height={38} width={50} />
            <p>
              ฉันทำฟิลเลอร์กับโบท็อกซ์ที่ D Bangkok Clinic และรู้สึกพอใจมาก ใบหน้าดูอ่อนเยาว์และกระชับ ทีมแพทย์มืออาชีพมากครับ!
            </p>
            <Rating ratingNumber={4.5} />
          </div>
        )}
      </div>
    </div>
  );
}
