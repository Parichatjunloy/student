import React, { useState, useMemo, useRef, useEffect } from "react";

// ✅ ข้อมูลสาขา
const majors = {
  "ประกาศนียบัตรวิชาชีพ (ปวช.)": {
    "คหกรรม": ["คหกรรม", "แฟชั่นและสิ่งทอ", "อาหารและโภชนาการ"],
    "ศิลปกรรม": ["วิจิตรศิลป์", "การออกแบบ", "ดิจิทัลกราฟิก"],
    "บริหารธุรกิจ": ["การบัญชี", "การตลาด", "การจัดการธุรกิจ"],
    "อุตสาหกรรมท่องเที่ยว": ["การโรงแรม (ทวิภาคี)", "การท่องเที่ยว"],
    "อุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศ": [
      "เทคโนโลยีธุรกิจดิจิทัล",
    ],
  },
  "ประกาศนียบัตรวิชาชีพขั้นสูง (ปวส.)": {
    "คหกรรม": [
      "การบริหารงานคหกรรมศาสตร์",
      "เทคโนโลยีแฟชั่นและเครื่องแต่งกาย",
      "อาหารและโภชนาการ",
    ],
    "ศิลปกรรม": ["การออกแบบ", "ดิจิทัลกราฟิก"],
    "บริหารธุรกิจ": [
      "การบัญชี",
      "การตลาด",
      "การจัดการธุรกิจ",
      "การจัดการโลจิสติกส์ (ทวิภาคี)",
    ],
    "อุตสาหกรรมท่องเที่ยว": [
      "การโรงแรม",
      "การท่องเที่ยว",
      "การจัดประชุมและนิทรรศการ (ทวิภาคี)",
    ],
    "อุตสาหกรรมดิจิทัลและเทคโนโลยีสารสนเทศ": [
      "เทคโนโลยีธุรกิจดิจิทัล",
      "เทคโนโลยีสารสนเทศ",
    ],
  },
};

// ✅ Dropdown component (div ไม่ใช้ option)
const Dropdown = ({ label, options, value, onChange, disabled, error }) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const ref = useRef(null);

  const toggleOpen = () => {
    if (!disabled && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setCoords({ top: rect.bottom, left: rect.left, width: rect.width });
      setOpen((prev) => !prev);
    }
  };

  const handleSelect = (val) => {
    onChange(val);
    setOpen(false);
  };

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full relative" ref={ref}>
      <label className="block mb-1 font-bold text-blue-950">{label}</label>
      <div
        onClick={toggleOpen}
        className={`w-full p-2 border-2 rounded-lg flex justify-between items-center h-10 text-sm ${
          error ? "border-red-500" : "border-gray-400"
        } ${
          disabled
            ? "bg-gray-100 cursor-not-allowed text-gray-400"
            : "bg-white text-black cursor-pointer"
        }`}
      >
        <span>{value || "-- เลือก --"}</span>
        {!disabled && <span>{open ? "▲" : "▼"}</span>}
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

      {open && !disabled && (
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
          {options.map((opt, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(opt)}
              className="p-2 cursor-pointer text-white hover:bg-[#FFD15F] hover:text-black text-sm"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Stepfour = ({ formData, handleChange, errors }) => {
  // ✅ branch options
  const branchOptions = useMemo(() => {
    return majors[formData.educationLevel]?.[formData.major] || [];
  }, [formData.educationLevel, formData.major]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Dropdown
        label="ระดับการศึกษา"
        options={Object.keys(majors)}
        value={formData.educationLevel}
        onChange={(val) => handleChange("educationLevel", val)}
        error={errors.educationLevel}
      />

      <Dropdown
        label="ภาคการศึกษา"
        options={[
          "ปกติ",
          "ทวิภาคี",
          "สมทบ",
          "เกษตรปฏิรูป",
          "อศ.กช.",
          "ด้อยโอกาส",
        ]}
        value={formData.semesterType}
        onChange={(val) => handleChange("semesterType", val)}
        error={errors.semesterType}
      />

      <Dropdown
        label="ประเภทวิชา"
        options={Object.keys(majors[formData.educationLevel] || {})}
        value={formData.major}
        onChange={(val) => handleChange("major", val)}
        disabled={!formData.educationLevel}
        error={errors.major}
      />

      <Dropdown
        label="สาขา"
        options={branchOptions}
        value={formData.branch}
        onChange={(val) => handleChange("branch", val)}
        disabled={!formData.major}
        error={errors.branch}
      />
    </div>
  );
};

export default Stepfour;