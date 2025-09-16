import React, { useState, useRef, useEffect, useMemo } from "react";
import Sidebaradmin from "../components/Sidebaradmin";
import { Link } from "react-router-dom";

// Dropdown component (Integrated)
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-end mt-6 mr-6 space-x-2">
      {/* ปุ่มย้อนกลับ */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center justify-center w-8 h-8 border rounded ${
          currentPage === 1
            ? "text-gray-400 border-gray-200 bg-gray-100 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        {"<"} {/* แทนที่ ChevronLeft ด้วยสัญลักษณ์ */}
      </button>

      {/* เลขหน้า */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 border rounded flex items-center justify-center ${
            currentPage === page
              ? "bg-yellow-400 text-white border-yellow-400"
              : "hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      {/* ปุ่มไปข้างหน้า */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center w-8 h-8 border rounded ${
          currentPage === totalPages
            ? "text-gray-400 border-gray-200 bg-gray-100 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        {">"} {/* แทนที่ ChevronRight ด้วยสัญลักษณ์ */}
      </button>
    </div>
  );
};

// Dropdown component (เดิม)
const Dropdown = ({ options, value, onChange, placeholder, disabled, error }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <div
        onClick={() => !disabled && setOpen(!open)}
        className={`w-full p-2 border-2 rounded-xl flex justify-between items-center h-[50px] text-sm ${
          disabled ? "bg-gray-100 cursor-not-allowed text-gray-100" : "bg-[#E6E6E6] text-black"
        } ${error ? "border-red-500" : "border-[#E6E6E6]"}`}
      >
        <span>{value || placeholder}</span>
        {!disabled && <span className="ml-2">{open ? "▲" : "▼"}</span>}
      </div>
      {open && !disabled && (
        <div className="absolute z-10 w-full mt-1 rounded-lg border border-[#FFD15F] max-h-60 overflow-auto">
          {options.map((option, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(option)}
              className="p-2 cursor-pointer bg-[#ffffff] text-black hover:bg-[#FFD15F] hover:text-black text-sm"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main component
function Dmanagea() {
  // ใช้ useMemo เพื่อป้องกันการสร้าง array ใหม่ทุกครั้งที่ render
  const allApplicants = useMemo(() => [
    {
      id: "REP-2568-0001",
      name: "นายปัณณพัฒน์ สมานคุณารักษ์",
      round: "รอบปกติ 1",
      date: "16/07/2568 11.56",
      status: "รอตรวจสอบ",
    },
    {
      id: "REP-2568-0002",
      name: "นางสาวสมศรี มีสุข",
      round: "รอบปกติ 1",
      date: "16/07/2568 11.56",
      status: "รอตรวจสอบ",
    },
    {
      id: "REP-2568-0003",
      name: "นายวิชัย สุขสันต์",
      round: "รอบปกติ 1",
      date: "16/07/2568 11.56",
      status: "รอตรวจสอบ",
    },
    {
      id: "REP-2568-0004",
      name: "นางสาวนภา ดาวเด่น",
      round: "รอบปกติ 2",
      date: "16/07/2568 11.56",
      status: "รอสัมภาษณ์",
    },
    {
      id: "REP-2568-0005",
      name: "นายธนา รักเรียน",
      round: "รอบปกติ 2",
      date: "16/07/2568 11.56",
      status: "รอสัมภาษณ์",
    },
    {
      id: "REP-2568-0006",
      name: "นางสาวสมหญิง รักเรียน",
      round: "รอบปกติ 3",
      date: "16/07/2568 11.56",
      status: "แก้ไขแล้ว",
    },
    {
      id: "REP-2568-0007",
      name: "นายวิชัย เรียนดี",
      round: "รอบปกติ 3",
      date: "16/07/2568 11.56",
      status: "รอสัมภาษณ์",
    },
    {
      id: "REP-2568-0008",
      name: "นางสาวนภา ดาวเด่น",
      round: "รอบโควต้า",
      date: "16/07/2568 11.56",
      status: "แก้ไขแล้ว",
    },
    {
      id: "REP-2568-0009",
      name: "นายธนา มั่งมี",
      round: "รอบโควต้า",
      date: "16/07/2568 11.56",
      status: "อนุมัติแล้ว",
    },
    {
      id: "REP-2568-0010",
      name: "นายสมพงศ์ ปลงทุกเรื่อง",
      round: "รอบโควต้า",
      date: "16/07/2568 11.56",
      status: "อนุมัติแล้ว",
    },
  ], []); // empty dependency array หมายความว่า array นี้จะถูกสร้างเพียงครั้งเดียว

  const [formData, setFormData] = useState({ round: "", statusmanage: "", samang: "" });
  const [filteredApplicants, setFilteredApplicants] = useState(allApplicants);
  const [errors] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  // ฟังก์ชันสำหรับรีเซ็ตการกรอง
  const handleReset = () => {
    setFormData({ round: "", statusmanage: "", samang: "" });
    setFilteredApplicants(allApplicants);
  };

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };
  
  // เพิ่ม allApplicants ใน dependency array
  useEffect(() => {
    const newFilteredApplicants = allApplicants.filter((applicant) => {
      const matchRound = formData.round === "" || applicant.round === formData.round;
      const matchStatus = formData.statusmanage === "" || formData.statusmanage === "สถานะทั้งหมด" || applicant.status === formData.statusmanage;
      return matchRound && matchStatus;
    });
    setFilteredApplicants(newFilteredApplicants);
  }, [formData, allApplicants]); // เพิ่ม allApplicants ใน dependency array ที่นี่

  return (
    <>
      <Sidebaradmin />
      <div className="w-[500px] h-[200px] bg-white absolute inset-0 z-20 mt-47 ml-138 rounded-2xl">
          <div className="w-[300px] text-center ml-24 mt-5">
            <p className="font-bold text-[30px] leading-12">คุณต้องการลบหลักสูตรนี้ใช่หรือไม่</p>
          </div>
          <div className="flex gap-5 ml-22.5 mt-5">
            <Link to= "/Manageadmin"><button className="border-[#FFD15F] border-2 w-[150px] h-[40px] rounded-xl font-bold cursor-pointer">ย้อนกลับ</button></Link>
            <Link to= "/Manageadmin"><button className="bg-[#FFD15F] w-[150px] h-[40px] rounded-xl font-bold cursor-pointer text-white">ยืนยัน</button></Link>
          </div>
      </div>
      <div className="fixed inset-0 bg-black/40 z-10"></div>
      <div className="bg-blue-950 w-[1411px] h-[150px] absolute top-0 left-25 rounded-b-4xl">
        <p className="text-white text-[45px] font-bold text-center mt-3.5">
          จัดการใบสมัคร
        </p>
      </div>
      <div className="bg-[#FFD15F] w-[1300px] h-[840px] absolute top-26 left-40 rounded-xl mb-10">
        <div className="flex gap-5 mt-5 ml-10 mr-10">
            {/* ... (โค้ดส่วนบน) ... */}
            <div className="bg-white w-[230px] h-[100px] rounded-xl flex">
                <div>
                    <p className="font-bold opacity-50 mt-3 ml-5 text-[18px]">ผู้สมัครทั้งหมด</p>
                    <p className="font-bold ml-7.5 text-[35px]">1,250</p>
                </div>
                <div className="bg-[#ffd5c6] w-[50px] h-[50px] rounded-xl text-center mt-7 ml-6">
                    <i className="fa-solid fa-file-pen text-[#FF4400] mt-1.5"></i>
                </div>
            </div>
            <div className="bg-white w-[230px] h-[100px] rounded-xl flex">
                <div>
                    <p className="font-bold opacity-50 mt-3 ml-7 text-[18px]">รอตรวจสอบ</p>
                    <p className="font-bold ml-11.5 text-[35px]">250</p>
                </div>
                <div className="bg-[#CCF4FF] w-[50px] h-[50px] rounded-xl text-center mt-7 ml-8">
                    <i className="fa-solid fa-clock text-[#00ADDC] mt-1.5"></i>
                </div>
            </div>
            <div className="bg-white w-[230px] h-[100px] rounded-xl flex">
                <div>
                    <p className="font-bold opacity-50 mt-3 ml-7 text-[18px]">รอสัมภาษณ์</p>
                    <p className="font-bold ml-11 text-[35px]">100</p>
                </div>
                <div className="bg-[#FFEFCC] w-[50px] h-[50px] rounded-xl text-center mt-7 ml-8">
                    <i className="fa-solid fa-spinner text-[#FFAE00] mt-1.5"></i>
                </div>
            </div>
            <div className="bg-white w-[230px] h-[100px] rounded-xl flex">
                <div>
                    <p className="font-bold opacity-50 mt-3 ml-7 text-[18px]">รอชำระเงิน</p>
                    <p className="font-bold ml-10.5 text-[35px]">900</p>
                </div>
                <div className="bg-[#e7c4fe] w-[50px] h-[50px] rounded-xl text-center mt-7 ml-10">
                    <i className="fa-solid fa-money-bills text-[#8300DB] mt-1.5 -ml-1.5"></i>
                </div>
            </div>
            <div className="bg-white w-[230px] h-[100px] rounded-xl flex">
                <div>
                    <p className="font-bold opacity-50 mt-3 ml-7 text-[18px]">อนุมัติแล้ว</p>
                    <p className="font-bold ml-10 text-[35px]">900</p>
                </div>
                <div className="bg-[#befdc6] w-[50px] h-[50px] rounded-xl text-center mt-7 ml-12">
                    <i className="fa-solid fa-circle-check text-[#00D018] mt-1.5 -ml-1.5"></i>
                </div>
            </div>
        </div>
        <div className="bg-white w-[1220px] h-[670px] ml-10 mt-5 rounded-xl">
          <div className="flex">
            <div className="">
              <p className="font-bold text-[20px] ml-6 pt-5">รายชื่อผู้สมัคร</p>
            </div>
            <div className="flex items-center bg-gray-100 rounded-xl w-[300px] ml-188 mt-4 px-3 py-2">
              <input
                type="text"
                placeholder="ค้นหา..."
                className="bg-gray-100 ml-2 outline-none w-full text-sm"
              />
              <i className="fa-solid fa-magnifying-glass text-gray-500" style={{ fontSize: "15px" }}></i>
            </div>
          </div>
          <div className="flex">
            <div className="w-[150px] ml-6 mt-4">
              <Dropdown
                options={["รอบโควต้า", "รอบปกติ 1", "รอบปกติ 2", "รอบปกติ 3"]}
                value={formData.round}
                onChange={(val) => handleChange("round", val)}
                placeholder="รอบการสมัคร"
                error={errors.round}
              />
            </div>
            <div className="w-[150px] ml-6 mt-4">
              <Dropdown
                options={["สถานะทั้งหมด", "รอตรวจสอบ", "รอสัมภาษณ์", "รอชำระเงิน", "อนุมัติแล้ว"]}
                value={formData.statusmanage}
                onChange={(val) => handleChange("statusmanage", val)}
                placeholder="สถานะ"
                error={errors.statusmanage}
              />
            </div>
            <div className="w-[150px] ml-6 mt-4">
              <input type="date" className="bg-[#E6E6E6] w-[150px] h-[50px] rounded-xl pl-2 pr-2" />
            </div>
            <div className="w-[150px] ml-6 mt-4">
              <Dropdown
                options={["สมัครวันนี้", "สมัครเดือนนี้", "สมัครปีนี้", "สมัครทั้งหมด"]}
                value={formData.samang}
                onChange={(val) => handleChange("samang", val)}
                placeholder="การสมัคร"
                error={errors.samang}
              />
            </div>
            <button
              className="bg-[#FFD15F] h-[40px] w-[100px] mt-5.5 ml-5 text-left text-white rounded-xl "
            >
              <i className="fa-solid fa-filter ml-3.5 mr-2" style={{ fontSize: "20px" }}></i>กรอง
            </button>
            <button
              onClick={handleReset}
              className="bg-[#B7B7B7] h-[40px] w-[100px] mt-5.5 ml-3 text-left rounded-xl "
            >
              <i className="fa-solid fa-arrows-rotate ml-3.5 mr-2" style={{ fontSize: "20px" }}></i>รีเซ็ต
            </button>
            <input type="text" value={`จำนวนผู้สมัคร ${filteredApplicants.length}`} className="border-1 border-gray-300 h-[40px] text-center rounded-xl mt-5.5 ml-23"/>
          </div>

          <div className="overflow-y-auto max-h-[480px]">
            <table className="mt-5 ml-6" style={{ width: '96%', borderCollapse: 'collapse' }}>
              <thead>
                <tr className="bg-[#E6E6E6] text-[#454545] " style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <th className="pt-[10px] pb-[10px] pl-2 text-left">รหัสผู้สมัคร</th>
                  <th className="pr-[100px] text-left">ผู้แจ้ง</th>
                  <th className="pr-[40px] text-left">รอบการสมัคร</th>
                  <th className="pr-[30px] text-left">วันที่สมัคร</th>
                  <th className="pl-[20px] pr-[20px] text-left">สถานะ</th>
                  <th className="p-[0px] text-left">การดำเนินการ</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplicants.map((applicant) => (
                  <tr key={applicant.id}>
                    <td className="pl-2 border-b-1 text-[#0F2C59]" style={{ borderColor: "rgba(0,0,0,0.2)" }}>{applicant.id}</td>
                    <td className="pl-0 border-b-1 text-[#535353]" style={{ borderColor: "rgba(0,0,0,0.2)" }}>{applicant.name}</td>
                    <td className="pl-0 border-b-1 text-[#535353]" style={{ borderColor: "rgba(0,0,0,0.2)" }}>{applicant.round}</td>
                    <td className="pl-0 border-b-1 text-[#535353]" style={{ borderColor: "rgba(0,0,0,0.2)" }}>{applicant.date}</td>
                    <td className="pt-1 pb-1 border-b-1 text-[#535353] font-bold" style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                      <button
                        style={{
                          backgroundColor:
                            applicant.status === "รอตรวจสอบ" ? "#84DBF3" :
                            applicant.status === "รอสัมภาษณ์" ? "#FFD57B" :
                            applicant.status === "แก้ไขแล้ว" ? "#E6CCF8" :
                            applicant.status === "อนุมัติแล้ว" ? "#93EC9E" : "",
                          color:
                            applicant.status === "รอตรวจสอบ" ? "#045792" :
                            applicant.status === "รอสัมภาษณ์" ? "#805800" :
                            applicant.status === "แก้ไขแล้ว" ? "#8300DB" :
                            applicant.status === "อนุมัติแล้ว" ? "#008B10" : "",
                          padding: '4px 10px',
                          borderRadius: '20px',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        {applicant.status}
                      </button>
                    </td>
                    <td className="pl-5 border-b-1 text-[#519DD8]" style={{ borderColor: "rgba(0,0,0,0.2)" }}><i className="fa-solid fa-eye" style={{ fontSize: "20px" }}></i><i className="fa-solid fa-pen ml-2 text-gray-400" style={{ fontSize: "20px" }}></i></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* ส่วนของ pagination และจำนวนรายการที่ถูกย้ายออกมา */}
        <div className="-mt-19 mr-10">
        <Pagination 
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
        />
        </div>
        <div className="ml-17 -mt-5">
            <p className="text-[#828282] text-[14px]">แสดงจาก 1-{filteredApplicants.length} จาก 1,250 รายการ</p>
        </div>
      </div>
    </>
  );
}

export default Dmanagea;