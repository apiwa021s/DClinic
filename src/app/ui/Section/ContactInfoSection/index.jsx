import React from 'react';
import IconBoxStyle11 from '../../IconBox/IconBoxStyle11';
import Spacing from '../../Spacing';

export default function ContactInfoSection({ sectionTitle }) {
  return (
    <div className="container">
      <h2 className="cs_fs_72 mb-0">{sectionTitle}</h2>
      <Spacing md="70" lg="50" />
      <div className="row g-4 g-xl-3 g-xxl-5">
        <div className="col-xl-4">
          <IconBoxStyle11
            title="เบอร์โทรศัพท์"
            subTitle="02-123-4567"
            iconSrc="/images/contact/icon_1.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="อีเมล"
            subTitle="contact@dbangkokclinic.com"
            iconSrc="/images/contact/icon_2.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="ที่อยู่"
            subTitle="456/789 ถนนสุขุมวิท, แขวงคลองตัน, เขตวัฒนา, กรุงเทพฯ 10110"
            iconSrc="/images/contact/icon_3.svg"
          />
        </div>
      </div>
      <Spacing md="35" />
      {/* Start Google Map */}
      <div className="cs_map">
        <iframe
          id="map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.830858145714!2d100.57134331534818!3d13.729086590354336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed7bfc1b935%3A0x1234567890abcdef!2sD+Bangkok+Clinic!5e0!3m2!1sth!2sth!4v1563075599994!5m2!1sth!2sth"
          allowFullScreen
        />
      </div>
      {/* End Google Map */}
    </div>
  );
}
