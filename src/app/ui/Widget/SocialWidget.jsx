import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';


export default function SocialWidget() {
  return (
    <div className="cs_social_links_wrap">
      <h2>ติดตามเราที่</h2>
      <div className="cs_social_links">
        <Link href="https://www.facebook.com/dbangkokclinic/">
          <Icon icon="fa-brands:facebook-f" />
        </Link>
        <Link href="https://line.me/R/ti/p/@555haawr?ts=06030418&oat_content=url">
          <Icon icon="fa-brands:line" />
        </Link>
        <Link href="https://www.instagram.com/dbangkokclinic/">
          <Icon icon="fa-brands:instagram" />
        </Link>
      </div>
    </div>
  );
}
