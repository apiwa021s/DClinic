import Image from 'next/image';
import React from 'react';

export default function ContactForm() {
  return (
    <div className="cs_contact_form cs_style_1 cs_white_bg cs_radius_30">
      <div className="row">
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">ชื่อ</label>
          <input
            type="text"
            className="cs_form_field"
            placeholder="กรอกชื่อของคุณ"
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">อีเมล</label>
          <input
            type="email"
            className="cs_form_field"
            placeholder="example@gmail.com"
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">เรื่องที่ต้องการติดต่อ</label>
          <input
            type="text"
            className="cs_form_field"
            placeholder="กรุณาระบุหัวข้อ"
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">ข้อความ</label>
          <textarea
            cols={30}
            rows={10}
            className="cs_form_field"
            placeholder="เขียนข้อความของคุณที่นี่..."
            defaultValue={''}
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <div className="cs_height_18" />
          <button className="cs_btn cs_style_1">
            <span>ส่งข้อความ</span>
            <i>
              <Image src="/images/icons/arrow_white.svg" alt="Icon" height={11} width={15} />
              <Image src="/images/icons/arrow_white.svg" alt="Icon" height={11} width={15} />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}
