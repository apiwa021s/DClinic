"use client";
import React from 'react';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import TextWidget from '../Widget/TextWidget';
import Image from 'next/image';
const menuDataOne = [
  { title: 'เกี่ยวกับเรา', href: '/about' },
  { title: 'บริการ', href: '/services' },
  { title: 'ทีมแพทย์', href: '/doctors' },
  { title: 'ตารางเวลา', href: '/timetable' },
  { title: 'นัดหมาย', href: '/appointments' },
  { title: 'รีวิวลูกค้า', href: '/' },
];
const menuDataTwo = [
  { title: 'ติดต่อเรา', href: '/contact' },
  { title: 'นโยบายความเป็นส่วนตัว', href: '/' },
  { title: 'ข้อกำหนดและเงื่อนไข', href: '/' },
];

export default function Footer() {
  return (
    <footer className="cs_footer cs_style_1 cs_heading_color">
      <div
        className="cs_footer_logo_wrap"
        style={{ backgroundImage: 'url(/images/footer_bg_1.svg)' }}
      >
        <div
          className="cs_footer_brand"
          style={{ backgroundImage: 'url(/images/footer_logo_bg.svg)' }}
        >
          <Image
            src="/images/logo_icon.svg"
            alt="Logo Icon"
            className="cs_footer_brand_icon"
            height={49}
            width={51}
          />
          <h2 className="cs_footer_brand_text">D Bangkok Clinic</h2>
        </div>
      </div>
      <div className="cs_footer_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <TextWidget text="D Bangkok Clinic <br />คลินิกเวชกรรมความงาม" />
                <ContactInfoWidget />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataOne} />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataTwo} />
              </div>
            </div>
            <div className="col-lg-4">
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_accent_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <SocialWidget />
            <div className="cs_copyright">
              Copyright © 2024 D Bangkok Clinic. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
