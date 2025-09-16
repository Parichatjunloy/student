import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="relative min-h-screen">
      {/* Sidebar */}
      <div className="container">
        <div className="sidebar">
          <div className="logo">
            <img className="logo" src="/image/chonvc.png" alt="logo" />
          </div>
          <ul className="menu">
            <li>
              <a href="/Home">
                <i className="fa-solid fa-house-chimney"></i>
                <b> หน้าแรก</b>
              </a>
            </li>
            <li>
              <a href="/Login">
                <i className="fa-solid fa-user"></i>
                <b> เข้าสู่ระบบ</b>
              </a>
            </li>
            <li>
              <a href="/Status">
                <i className="fa-solid fa-file-contract"></i>
                <b> สถานะการสมัคร</b>
              </a>
            </li>
            <li>
              <a href="/คู่มือการใช้งานเว็บไซต์.pdf" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-book"></i>
                <b> คู่มือการใช้งาน</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
