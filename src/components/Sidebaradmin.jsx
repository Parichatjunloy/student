import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./sidebar.css"

export default function Sidebaradmin() {
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
              <a href="/Homeadmin">
                <i className="fa-solid fa-house-chimney"></i>
                <b> หน้าแรก</b>
              </a>
            </li>
            <li>
              <a href="/Courseadmin">
                <i class="fa-solid fa-graduation-cap"></i>
                <b> หลักสูตร</b>
              </a>
            </li>
            <li>
              <a href="/Manageadmin">
                <i className="fa-solid fa-file-contract"></i>
                <b> จัดการใบสมัคร</b>
              </a>
            </li>
            <li>
              <a href="/Manageuse">
                <i class="fa-solid fa-user-gear"></i>
                <b> จัดการผู้ใช้งาน</b>
              </a>
            </li>
            <li className="border-b-2 border-white">
              <a href="/คู่มือการใช้งานเว็บไซต์(แอดมิน).pdf" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-book"></i>
                <b> คู่มือการใช้งาน</b>
              </a>
            </li>
            <li className="mt-23">
              <a href="/Home">
                <i class="fa-solid fa-right-from-bracket"></i>
                <b> ออกจากระบบ</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
