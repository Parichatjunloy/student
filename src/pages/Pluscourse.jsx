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
              className="p-2 cursor-pointer bg-[#0F2C59] text-white hover:bg-[#FFD15F] hover:text-black text-sm"
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
function Pluscourse() {
  const [formData, setFormData] = useState({
    courseNameThai: "",
    courseNameEng: "",
    courseAbbr: "",
    courseType: "",
  });

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Sidebaradmin />
      <div className="bg-blue-950 w-[1411px] h-[150px] absolute top-0 left-25 rounded-b-4xl">
        <p className="text-white text-[45px] font-bold text-center mt-3.5">
          เพิ่มหลักสูตร
        </p>
      </div>
      <div className="bg-[#FFFF] w-[1300px] h-[830px] absolute top-26 left-40 rounded-xl mb-10">
        <div className="flex gap-5 h-[115px] border-b-1 border-[#FFD15F]">
          <img
            className="w-[80px] h-[80px] mt-4 ml-4"
            src="/image/Group 173.png"
            alt=""
          />
          <p className="text-[23px] font-bold text-blue-950 mt-10">
            ข้อมูลหลักสูตรพื้นฐาน
          </p>
        </div>

        <div>
          <div className="mt-10 flex flex-col ml-30 mr-30">
            <label className="text-blue-950 font-bold text-[20px] mb-2">
              ชื่อหลักสูตร (ภาษาไทย)
            </label>
            <input
              type="text"
              name="courseNameThai"
              value={formData.courseNameThai}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="bg-[#E6E6E6] h-[50px] px-2 rounded-xl"
            />
          </div>
          <div className="mt-5 flex flex-col ml-30 mr-30">
            <label className="text-blue-950 font-bold text-[20px] mb-2">
              ชื่อหลักสูตร (ภาษาอังกฤษ)
            </label>
            <input
              type="text"
              name="courseNameEng"
              value={formData.courseNameEng}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="bg-[#E6E6E6] h-[50px] px-2 rounded-xl"
            />
          </div>
          <div className="flex ">
            <div className="mt-5 flex flex-col ml-30">
              <label className="text-blue-950 font-bold text-[20px] mb-2">
                ชื่อย่อหลักสูตร
              </label>
              <input
                type="text"
                name="courseAbbr"
                value={formData.courseAbbr}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className="bg-[#E6E6E6] h-[50px] px-2 rounded-xl w-[510px]"
              />
            </div>
            <div className="mt-5 flex flex-col mr-30 ml-10 w-[510px]">
              <label className="text-blue-950 font-bold text-[20px] mb-2">
                ประเภทวิชา
              </label>
              <Dropdown
                options={[
                  "คหกรรม",
                  "ศิลปกรรม",
                  "บริหารธุรกิจ",
                  "อุตสาหกรรมท่องเที่ยว",
                  "อุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศ",
                ]}
                value={formData.courseType}
                onChange={(val) => handleChange("courseType", val)}
                placeholder="-- เลือกประเภทวิชา --"
              />
            </div>
          </div>
          <div className="flex ">
            <div className="mt-5 flex flex-col ml-30 w-[510px]">
              <label className="text-blue-950 font-bold text-[20px] mb-2">
                ภาคการศึกษา
              </label>
              <Dropdown
                options={[
                  "ปกติ",
                  "ทวิภาคี",
                  "สมทบ",
                  "เกษตรปฏิรูป",
                  "อศ.กช.",
                  "ด้อยโอกาส",
                ]}
                value={formData.courseSector}
                onChange={(val) => handleChange("courseSector", val)}
                placeholder="-- เลือกภาคการศึกษา --"
              />
            </div>
            <div className="mt-5 flex flex-col mr-30 ml-10 w-[510px]">
              <label className="text-blue-950 font-bold text-[20px] mb-2">
                ระดับการศึกษา
              </label>
              <Dropdown
                options={[
                  "ประกาศนียบัตรวิชาชีพ (ปวช.)",
                  "ประกาศนียบัตรวิชาชีพขั้นสูง (ปวส.)",
                ]}
                value={formData.courseClass}
                onChange={(val) => handleChange("courseClass", val)}
                placeholder="-- เลือกระดับการศึกษา --"
              />
            </div>
          </div>
          <div className="flex ">
            <div className="mt-5 flex flex-col ml-30 w-[510px]">
              <label className="text-blue-950 font-bold text-[20px] mb-2">
                ระยะเวลาการศึกษา
              </label>
              <input
                type="number"
                name="coursetime"
                value={formData.coursetime}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className="bg-[#E6E6E6] h-[50px] px-2 rounded-xl w-[510px]"
              />
            </div>
            <div className="mt-5 flex flex-col mr-30 ml-10 w-[510px]">
              <label className="text-blue-950 font-bold text-[20px] mb-2">
                จำนวนหน่วยกิต
              </label>
              <input
                type="number"
                name="coursecredit"
                value={formData.coursecredit}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className="bg-[#E6E6E6] h-[50px] px-2 rounded-xl w-[510px]"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 ml-220 mt-20">
        <Link to= "/Courseadmin"><button className="text-black border-2 border-[#FFD15F] h-[50px] w-[140px] rounded-xl font-bold text-[18px]">ย้อนกลับ</button></Link>
        <Link to= "/Courseadmin"><button className="text-white bg-[#FFD15F] h-[50px] w-[140px] rounded-xl font-bold text-[18px]">เพิ่มหลักสูตร</button></Link>
        </div>
      </div>
    </>
  );
}

export default Pluscourse;