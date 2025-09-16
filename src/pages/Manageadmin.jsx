import React, { useState, useRef, useEffect } from "react";
import Sidebaradmin from "../components/Sidebaradmin";
import { Link } from "react-router-dom";

// Dropdown component (Integrated)
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

// Pluscourse component
function Manageadmin() {
  const [formData, setFormData] = useState({ prefix: "" }); // 👈 Corrected: Add useState for formData
  const [errors] = useState({}); // 👈 Corrected: Add useState for errors

  const handleChange = (field, value) => { // 👈 Corrected: Add handleChange function
    setFormData(prevData => ({ ...prevData, [field]: value }));
  };

  return (
    <>
      <Sidebaradmin />
      <div className="bg-blue-950 w-[1411px] h-[150px] absolute top-0 left-25 rounded-b-4xl">
        <p className="text-white text-[45px] font-bold text-center mt-3.5">
          จัดการใบสมัคร
        </p>
      </div>
      <div className="bg-[#FFD15F] w-[1300px] h-[600px] absolute top-26 left-40 rounded-xl mb-10">
        <div className="flex gap-5 mt-5 ml-10 mr-10">
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
        <div className="bg-white w-[1220px] h-[450px] ml-10 mt-5 rounded-xl">
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
                <i class="fa-solid fa-magnifying-glass text-gray-500"style={{ fontSize: "15px" }}></i>
            </div>
        </div>
        <div className="flex">
        <div className="w-[150px] ml-6 mt-4"> {/* 👈 Corrected: Add a div with width */}
            <Dropdown
            options={["รอบโควต้า", "รอบปกติ 1", "รอบปกติ 2", "รอบปกติ 3"]}
            value={formData.round}
            onChange={(val) => handleChange("round", val)}
            placeholder="รอบการสมัคร"
            error={errors.round}
          />
        </div>

        <div className="w-[150px] ml-6 mt-4"> {/* 👈 Corrected: Add a div with width */}
            <Dropdown
            options={["สถานะทั้งหมด", "รอตรวจสอบ", "รอสัมภาษณ์", "รอชำระเงิน", "อนุมัติแล้ว"]}
            value={formData.round}
            onChange={(val) => handleChange("round", val)}
            placeholder="สถานะ"
            error={errors.round}
          />
        </div>

        <div className="w-[150px] ml-6 mt-4"> {/* 👈 Corrected: Add a div with width */}
            <input type="date" className="bg-[#E6E6E6] w-[150px] h-[50px] rounded-xl pl-2 pr-2"/>
        </div>

        <div className="w-[150px] ml-6 mt-4"> {/* 👈 Corrected: Add a div with width */}
            <Dropdown
            options={["สมัครวันนี้", "สมัครเดือนนี้", "สมัครปีนี้", "สมัครทั้งหมด"]}
            value={formData.round}
            onChange={(val) => handleChange("round", val)}
            placeholder="การสมัคร"
            error={errors.round}
          />
        </div>

        <button className="bg-[#FFD15F] h-[40px] w-[100px] mt-5.5 ml-5 text-left text-white rounded-xl "><i className="fa-solid fa-filter ml-3.5 mr-2"style={{ fontSize: "20px" }}></i>กรอง</button>
        <button className="bg-[#B7B7B7] h-[40px] w-[100px] mt-5.5 ml-3 text-left rounded-xl "><i className="fa-solid fa-arrows-rotate ml-3.5 mr-2"style={{ fontSize: "20px" }}></i>รีเซ็ต</button>

        <input type="text" value="จำนวนผู้สมัคร 600" className="border-1 border-gray-300 h-[40px] text-center rounded-xl mt-5.5 ml-23"/>

        </div>

        <table className="mt-5 ml-6" style={{ width: '96%', borderCollapse: 'collapse' }}>
            <thead>
              <tr className="bg-[#E6E6E6] text-[#454545] "style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                <th className="pt-[10px] pb-[10px] pl-2 text-left">รหัสผู้สมัคร</th>
                <th className="pr-[100px] text-left">ผู้แจ้ง</th>
                <th className="pr-[40px] text-left">รอบการสมัคร</th>
                <th className="pr-[30px] text-left">วันที่สมัคร</th>
                <th className="pl-[20px] pr-[20px] text-left">สถานะ</th>
                <th className="p-[0px] text-left">การดำเนินการ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className = "pl-2 border-b-1 text-[#0F2C59]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>REP-2568-0001</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>นายปัณณพัฒน์ สมานคุณารักษ์</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>รอบปกติ 1</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>16/07/2568 11.56</td>
                <td className = "pt-1 pb-1  border-b-1 text-[#535353] font-bold"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#84DBF3', color: '#045792', padding: '4px 10px', borderRadius: '20px', border: 'none', cursor: 'pointer'}}>รอตรวจสอบ</button>
                </td>
                <td className = "pl-5 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}><i class="fa-solid fa-eye"style={{ fontSize: "20px" }}></i><i className="fa-solid fa-pen ml-2 text-gray-400"style={{ fontSize: "20px" }}></i></td>
              </tr>

              <tr className="">
                <td className = "pl-2 border-b-1 text-[#0F2C59]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>REP-2568-0002</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>นางสาวสมศรี มีสุข</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>รอบปกติ 1</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>16/07/2568 11.56</td>
                <td className = "pt-1 pb-1  border-b-1 text-[#535353] font-bold"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#84DBF3', color: '#045792', padding: '4px 10px', borderRadius: '20px', border: 'none', cursor: 'pointer'}}>รอตรวจสอบ</button>
                </td>
                <td className = "pl-5 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}><i class="fa-solid fa-eye"style={{ fontSize: "20px" }}></i><i className="fa-solid fa-pen ml-2 text-gray-400"style={{ fontSize: "20px" }}></i></td>
              </tr>

              <tr className="">
                <td className = "pl-2 border-b-1 text-[#0F2C59]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>REP-2568-0003</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>นายวิชัย สุขสันต์</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>รอบปกติ 1</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>16/07/2568 11.56</td>
                <td className = "pt-1 pb-1  border-b-1 text-[#535353] font-bold"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#84DBF3', color: '#045792', padding: '4px 10px', borderRadius: '20px', border: 'none', cursor: 'pointer'}}>รอตรวจสอบ</button>
                </td>
                <td className = "pl-5 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}><i class="fa-solid fa-eye"style={{ fontSize: "20px" }}></i><i className="fa-solid fa-pen ml-2 text-gray-400"style={{ fontSize: "20px" }}></i></td>
              </tr>

              <tr className="">
                <td className = "pl-2 border-b-1 text-[#0F2C59]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>REP-2568-0004</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>นางสาวนภา ดาวเด่น</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>รอบปกติ 2</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>16/07/2568 11.56</td>
                <td className = "pt-1 pb-1  border-b-1 text-[#535353] font-bold"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#FFD57B', color: '#805800', padding: '4px 10px', borderRadius: '20px', border: 'none', cursor: 'pointer'}}>รอสัมภาษณ์</button>
                </td>
                <td className = "pl-5 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}><i class="fa-solid fa-eye"style={{ fontSize: "20px" }}></i><i className="fa-solid fa-pen ml-2 text-gray-400"style={{ fontSize: "20px" }}></i></td>
              </tr>

              <tr className="">
                <td className = "pl-2 border-b-1 text-[#0F2C59]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>REP-2568-0005</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>นายธนา รักเรียน</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>รอบปกติ 2</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>16/07/2568 11.56</td>
                <td className = "pt-1 pb-1  border-b-1 text-[#535353] font-bold"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#FFD57B', color: '#805800', padding: '4px 10px', borderRadius: '20px', border: 'none', cursor: 'pointer'}}>รอสัมภาษณ์</button>
                </td>
                <td className = "pl-5 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}><i class="fa-solid fa-eye"style={{ fontSize: "20px" }}></i><i className="fa-solid fa-pen ml-2 text-gray-400"style={{ fontSize: "20px" }}></i></td>
              </tr>

              <tr className="">
                <td className = "pl-2 border-b-1 text-[#0F2C59]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>REP-2568-0006</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>นางสาวสมหญิง รักเรียน</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>รอบปกติ 3</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>16/07/2568 11.56</td>
                <td className = "pt-1 pb-1  border-b-1 text-[#535353] font-bold"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#E6CCF8', color: '#8300DB', padding: '4px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer'}}>แก้ไขแล้ว</button>
                </td>
                <td className = "pl-5 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}><i class="fa-solid fa-eye"style={{ fontSize: "20px" }}></i><i className="fa-solid fa-pen ml-2 text-gray-400"style={{ fontSize: "20px" }}></i></td>
              </tr>

              <tr className="">
                <td className = "pl-2 border-b-1 text-[#0F2C59]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>REP-2568-0007</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>นายวิชัย เรียนดี</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>รอบปกติ 3</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>16/07/2568 11.56</td>
                <td className = "pt-1 pb-1  border-b-1 text-[#535353] font-bold"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#FFD57B', color: '#805800', padding: '4px 10px', borderRadius: '20px', border: 'none', cursor: 'pointer'}}>รอสัมภาษณ์</button>
                </td>
                <td className = "pl-5 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}><i class="fa-solid fa-eye"style={{ fontSize: "20px" }}></i><i className="fa-solid fa-pen ml-2 text-gray-400"style={{ fontSize: "20px" }}></i></td>
              </tr>

              <tr className="">
                <td className = "pl-2 border-b-1 text-[#0F2C59]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>REP-2568-0008</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>นางสาวนภา ดาวเด่น</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>รอบโควต้า</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>16/07/2568 11.56</td>
                <td className = "pt-1 pb-1  border-b-1 text-[#535353] font-bold"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#E6CCF8', color: '#8300DB', padding: '4px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer'}}>แก้ไขแล้ว</button>
                </td>
                <td className = "pl-5 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}><i class="fa-solid fa-eye"style={{ fontSize: "20px" }}></i><i className="fa-solid fa-pen ml-2 text-gray-400"style={{ fontSize: "20px" }}></i></td>
              </tr>

              <tr className="">
                <td className = "pl-2 border-b-1 text-[#0F2C59]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>REP-2568-0009</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>นายธนา มั่งมี</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>รอบโควต้า</td>
                <td className = "pl-0 border-b-1 text-[#535353]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>16/07/2568 11.56</td>
                <td className = "pt-1 pb-1  border-b-1 text-[#535353] font-bold"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#E6CCF8', color: '#008B10', padding: '4px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer'}}>อนุมัติแล้ว</button>
                </td>
                <td className = "pl-5 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}><i class="fa-solid fa-eye"style={{ fontSize: "20px" }}></i><i className="fa-solid fa-pen ml-2 text-gray-400"style={{ fontSize: "20px" }}></i></td>
              </tr>
        
            </tbody>
          </table>

        {/* กล่องขาว */}
        </div>

        {/* กล่องใหญ่เหลือง */}
      </div>
      
    </>
  );
}

export default Manageadmin;