import React from "react";
import provincesData from "../../public/thai_provinces.json";

const Dropdown = ({ options, value, onChange, placeholder, disabled, error }) => {
  const [open, setOpen] = React.useState(false);
  const [coords, setCoords] = React.useState({ top: 0, left: 0, width: 0 });
  const ref = React.useRef(null);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const toggleOpen = () => {
    if (!disabled) {
      const rect = ref.current.getBoundingClientRect();
      setCoords({ top: rect.bottom, left: rect.left, width: rect.width });
      setOpen(!open);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <div
        onClick={toggleOpen}
        className={`w-full p-2 border-2 rounded-lg flex justify-between items-center h-10 text-sm ${
          disabled ? "bg-gray-100 cursor-not-allowed text-gray-400" : "bg-white text-black"
        } ${error ? "border-red-500" : "border-gray-400"}`}
      >
        <span>{value || placeholder}</span>
        {!disabled && <span className="ml-2">{open ? "▲" : "▼"}</span>}
      </div>

      {open && (
        <div
          className="rounded-lg shadow-lg border border-gray-300 bg-[#0F2C59] z-50"
          style={{
            position: "fixed",
            top: coords.top,
            left: coords.left,
            width: coords.width,
            maxHeight: "240px",
            overflowY: "auto",
            boxSizing: "border-box",
          }}
        >
          {options.map((option, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(option)}
              className="p-2 cursor-pointer text-white hover:bg-[#FFD15F] hover:text-black text-sm"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function Steptwo({ formData, handleChange, errors }) {
  const inputClass = `w-full p-2 border-2 rounded-lg text-sm`;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-2 text-blue-950 col-span-2">
          <i className="fa-solid fa-graduation-cap"></i>
          <p className="font-bold text-[23px]">ข้อมูลการศึกษา</p>
        </div>

        <div className="col-span-2">
          <label className="block mb-1 text-blue-950 font-bold">ชื่อสถานศึกษาเดิม <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`${inputClass} ${errors.school ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.school && <p className="text-red-500 text-sm">{errors.school}</p>}
        </div>

        <div className="col-span-2">
          <label className="block mb-1 text-blue-950 font-bold">ชื่อสถานศึกษาเดิม (ภาษาอังกฤษ)</label>
          <input
            type="text"
            name="previousSchoolEn"
            value={formData.previousSchoolEn}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`${inputClass} ${errors.previousSchoolEn ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.previousSchoolEn && <p className="text-red-500 text-sm">{errors.previousSchoolEn}</p>}
        </div>

        <div>
          <label className="block mb-1 text-blue-950 font-bold">จังหวัด <span className="text-red-500">*</span></label>
          <Dropdown
            options={provincesData.map((p) => p.name_th)}
            value={formData.provinceSchool}
            onChange={(val) => handleChange("provinceSchool", val)}
            placeholder="-- เลือกจังหวัด --"
            error={errors.provinceSchool}
          />
          {errors.provinceSchool && <p className="text-red-500 text-sm">{errors.provinceSchool}</p>}
        </div>

        <div>
          <label className="block mb-1 text-blue-950 font-bold">
            รหัสประจำตัวนักเรียน <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="stuNumid"
            value={formData.stuNumid}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`${inputClass} ${errors.stuNumid ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.stuNumid && <p className="text-red-500 text-sm">{errors.stuNumid}</p>}
        </div>

        <div>
          <label className="block mb-1 text-blue-950 font-bold">
            ประเภทสถานศึกษา <span className="text-red-500">*</span>
          </label>
          <Dropdown
            options={["รัฐบาล", "เอกชน"]}
            value={formData.typeEdu}
            onChange={(val) => handleChange("typeEdu", val)}
            placeholder="-- เลือกประเภท --"
            error={errors.typeEdu}
          />
          {errors.typeEdu && <p className="text-red-500 text-sm">{errors.typeEdu}</p>}
        </div>

        <div>
          <label className="block mb-1 text-blue-950 font-bold">
            ผลการเรียนเฉลี่ย <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="gpa"
            value={formData.gpa}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`${inputClass} ${errors.gpa ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.gpa && <p className="text-red-500 text-sm">{errors.gpa}</p>}
        </div>
      </div>
    </>
  );
}

export default Steptwo;