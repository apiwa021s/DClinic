"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Breadcrumb({ title }) {
  const [urlSegments, setUrlSegments] = useState([]);
  useEffect(() => {
    const pathSegments = window.location.pathname
      .split('/')
      .filter(segment => segment !== '');
    setUrlSegments(pathSegments);
  }, []);
  return (
    <div className="container">
      <ol className="breadcrumb text-capitalize">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        {urlSegments.map((segment, index) => (
          <li key={index} className="breadcrumb-item">
            {index < urlSegments.length - 1 ? (
              <a href={`/${urlSegments.slice(0, index + 1).join('/')}`}>
                {segment}
              </a>
            ) : (
              <span>{segment}</span>
            )}
          </li>
        ))}
      </ol>
      <div className="cs_height_18" />
      <h1 className="cs_fs_72 mb-0">{title}<span c="text-orange-200"> Blog</span></h1>
      <p className="pt-1 text-sky-400">รวมบทความน่าสนใจเกี่ยวกับการทำตาสองชั้น และศัลยกรรมตาอื่นๆ ใครคิดจะทำตาสองชั้นต้องอ่าน</p>
      
    </div>
  );
}
