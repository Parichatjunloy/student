import React, { useState, useRef, useEffect } from "react";
import provincesData from "../../public/thai_provinces.json";
import amphuresData from "../../public/thai_amphures.json";
import tambonsData from "../../public/thai_tambons.json";

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
        className={`w-full p-2 border-2 rounded-lg flex justify-between items-center h-10 text-sm ${
          disabled ? "bg-gray-100 cursor-not-allowed text-gray-400" : "bg-white text-black"
        } ${error ? "border-red-500" : "border-gray-400"}`}
      >
        <span>{value || placeholder}</span>
        {!disabled && <span className="ml-2">{open ? "▲" : "▼"}</span>}
      </div>
      {open && !disabled && (
        <div className="absolute z-10 w-full mt-1 rounded-lg shadow-lg max-h-60 overflow-auto">
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

function Stepone({ formData, setFormData, handleChange, errors }) {
  // Filtered amphures and tambons for student address
  const amphures = amphuresData.filter((a) => a.province_id === formData.provinceId);
  const tambons = tambonsData.filter((t) => t.amphure_id === formData.amphureId);

  // Handlers for student address
  const handleProvinceChange = (provinceName) => {
    const province = provincesData.find((p) => p.name_th === provinceName);
    setFormData({
      ...formData,
      province: province.name_th,
      provinceId: province.id,
      amphure: "",
      amphureId: null,
      tambon: "",
      tambonId: null,
      zipcode: "",
    });
  };

  const handleAmphureChange = (amphureName) => {
    const amphure = amphures.find((a) => a.name_th === amphureName);
    setFormData({
      ...formData,
      amphure: amphure.name_th,
      amphureId: amphure.id,
      tambon: "",
      tambonId: null,
      zipcode: "",
    });
  };

  const handleTambonChange = (tambonName) => {
    const tambon = tambons.find((t) => t.name_th === tambonName);
    setFormData({
      ...formData,
      tambon: tambon.name_th,
      tambonId: tambon.id,
      zipcode: tambon.zip_code,
    });
  };

  // Handlers for current address
  const handleSimProvinceChange = (provinceName) => {
    const province = provincesData.find((p) => p.name_th === provinceName);
    setFormData({
      ...formData,
      simprovince: province.name_th,
      simprovinceId: province.id,
      simamphure: "",
      simamphureId: null,
      simtambon: "",
      simtambonId: null,
      simzipcode: "",
    });
  };

  const handleSimAmphureChange = (amphureName) => {
    const amphure = amphuresData.find(
      (a) => a.name_th === amphureName && a.province_id === formData.simprovinceId
    );
    setFormData({
      ...formData,
      simamphure: amphure.name_th,
      simamphureId: amphure.id,
      simtambon: "",
      simtambonId: null,
      simzipcode: "",
    });
  };

  const handleSimTambonChange = (tambonName) => {
    const tambon = tambonsData.find(
      (t) => t.name_th === tambonName && t.amphure_id === formData.simamphureId
    );
    setFormData({
      ...formData,
      simtambon: tambon.name_th,
      simtambonId: tambon.id,
      simzipcode: tambon.zip_code,
    });
  };

  const simAmphures = amphuresData.filter((a) => a.province_id === formData.simprovinceId);
  const simTambons = tambonsData.filter((t) => t.amphure_id === formData.simamphureId);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-2 text-blue-950 col-span-2">
          <i className="fa-solid fa-circle-user"></i>
          <p className="font-bold text-[23px]">ข้อมูลส่วนตัว</p>
        </div>

        {/* Prefix */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">คำนำหน้า <span className="text-red-500">*</span></label>
          <Dropdown
            options={["นาย", "นาง", "นางสาว"]}
            value={formData.prefix}
            onChange={(val) => handleChange("prefix", val)}
            placeholder="-- เลือกคำนำหน้า --"
            error={errors.prefix}
          />
          {errors.prefix && <p className="text-red-500 text-sm">{errors.prefix}</p>}
        </div>

        {/* Citizen ID */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">เลขบัตรประชาชน <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="citizenId"
            value={formData.citizenId}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.citizenId ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.citizenId && <p className="text-red-500 text-sm">{errors.citizenId}</p>}
        </div>

        {/* First Name */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">ชื่อ <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.firstName ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">นามสกุล <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.lastName ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>

        {/* Nickname */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">ชื่อเล่น <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="nickName"
            value={formData.nickName}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.nickName ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.nickName && <p className="text-red-500 text-sm">{errors.nickName}</p>}
        </div>

        {/* Birth Date */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">วัน/เดือน/ปีเกิด <span className="text-red-500">*</span></label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            max={new Date(new Date().setFullYear(new Date().getFullYear() - 14)).toISOString().split("T")[0]}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.birthDate ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.birthDate && <p className="text-red-500 text-sm">{errors.birthDate}</p>}
        </div>

        {/* Nationality & Ethnicity */}
        <div className="flex gap-5">
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">สัญชาติ <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`w-full p-2 border-2 rounded-lg text-sm ${errors.nationality ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.nationality && <p className="text-red-500 text-sm">{errors.nationality}</p>}
          </div>
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">เชื้อชาติ <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="ethnicity"
              value={formData.ethnicity}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`w-full p-2 border-2 rounded-lg text-sm ${errors.ethnicity ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.ethnicity && <p className="text-red-500 text-sm">{errors.ethnicity}</p>}
          </div>
        </div>

        {/* Religion & Blood Type */}
        <div className="flex gap-5">
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">ศาสนา <span className="text-red-500">*</span></label>
            <Dropdown
              options={["พุทธ", "คริสต์", "อิสลาม", "ฮินดู", "ไม่ระบุ"]}
              value={formData.religion}
              onChange={(val) => handleChange("religion", val)}
              placeholder="-- เลือก --"
              error={errors.religion}
            />
            {errors.religion && <p className="text-red-500 text-sm">{errors.religion}</p>}
          </div>
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">หมู่เลือด <span className="text-red-500">*</span></label>
            <Dropdown
              options={["A", "B", "O", "AB", "หมู่เลือดพิเศษ", "ไม่ทราบ"]}
              value={formData.bloodType}
              onChange={(val) => handleChange("bloodType", val)}
              placeholder="-- เลือก --"
              error={errors.bloodType}
            />
            {errors.bloodType && <p className="text-red-500 text-sm">{errors.bloodType}</p>}
          </div>
        </div>

        {/* Weight & Height */}
        <div className="flex gap-5">
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">น้ำหนัก (กก.) <span className="text-red-500">*</span></label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`w-full p-2 border-2 rounded-lg text-sm ${errors.weight ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.weight && <p className="text-red-500 text-sm">{errors.weight}</p>}
          </div>
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">ส่วนสูง (ซม.) <span className="text-red-500">*</span></label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`w-full p-2 border-2 rounded-lg text-sm ${errors.height ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.height && <p className="text-red-500 text-sm">{errors.height}</p>}
          </div>
        </div>

        {/* Elder Siblings */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">จำนวนพี่ (เฉพาะบิดา มารดา เดียวกัน) <span className="text-red-500">*</span></label>
          <input
            type="number"
            name="eldersibling"
            value={formData.eldersibling}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.eldersibling ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.eldersibling && <p className="text-red-500 text-sm">{errors.eldersibling}</p>}
        </div>

        {/* Younger Siblings */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">จำนวนน้อง (เฉพาะบิดา มารดา เดียวกัน) <span className="text-red-500">*</span></label>
          <input
            type="number"
            name="sibling"
            value={formData.sibling}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.sibling ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.sibling && <p className="text-red-500 text-sm">{errors.sibling}</p>}
        </div>

        {/* Siblings Studying */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">จำนวนพี่น้องที่กำลังศึกษาอยู่ <span className="text-red-500">*</span></label>
          <input
            type="number"
            name="schoolsibling"
            value={formData.schoolsibling}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.schoolsibling ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.schoolsibling && <p className="text-red-500 text-sm">{errors.schoolsibling}</p>}
        </div>

        {/* Chronic Disease */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">โรคประจำตัว <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="disease"
            value={formData.disease}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.disease ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.disease && <p className="text-red-500 text-sm">{errors.disease}</p>}
        </div>

        {/* Defect/Mark */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">ตำหนิ <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="defect"
            value={formData.defect}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.defect ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.defect && <p className="text-red-500 text-sm">{errors.defect}</p>}
        </div>

        {/* Disability */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">ความพิการ <span className="text-red-500">*</span></label>
          <Dropdown
            options={["ไม่พิการ", "การมองเห็น", "การได้ยิน", "สติปัญญา", "ร่างกาย/สุขภาพ", "การเรียนรู้", "การพูด/ภาษา", "พฤติกรรมและอารมณ์", "ออทิสติก", "พิการซ้ำซ้อน", "พิการ (ไม่ระบุประเภท)"]}
            value={formData.disability}
            onChange={(val) => handleChange("disability", val)}
            placeholder="-- เลือก --"
            error={errors.disability}
          />
          {errors.disability && <p className="text-red-500 text-sm">{errors.disability}</p>}
        </div>

        {/* Talent */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">ความสามารถพิเศษ <span className="text-red-500">*</span></label>
          <Dropdown
            options={["ไม่ระบุ", "สติปัญญา", "ความคิดสร้างสรรค์", "การใช้ภาษา", "การเป็นผู้นำ", "การสร้างงานทางทัศนศิลป์", "ศิลปะการแสดง", "ดนตรี", "กีฬา"]}
            value={formData.talent}
            onChange={(val) => handleChange("talent", val)}
            placeholder="-- เลือก --"
            error={errors.talent}
          />
          {errors.talent && <p className="text-red-500 text-sm">{errors.talent}</p>}
        </div>

        {/* Student Phone */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">เบอร์โทรของนักเรียน <span className="text-red-500">*</span></label>
          <input
            type="tel"
            name="stuphone"
            value={formData.stuphone}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.stuphone ? "border-red-500" : "border-gray-400"}`}
            maxLength="10"
          />
          {errors.stuphone && <p className="text-red-500 text-sm">{errors.stuphone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">อีเมล <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.email ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="flex items-center space-x-2 text-blue-950 col-span-2 mt-4">
          <i className="fa-solid fa-location-dot"></i>
          <p className="font-bold text-[23px]">ที่อยู่ตามสำเนาทะเบียนบ้านนักเรียน</p>
        </div>

        {/* Student Address (House Number) */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">บ้านเลขที่ <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="stuaddress"
            value={formData.stuaddress}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.stuaddress ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.stuaddress && <p className="text-red-500 text-sm">{errors.stuaddress}</p>}
        </div>

        {/* Student Address (Village No. & Village Name) */}
        <div className="flex gap-5">
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">หมู่ที่ <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="stuvillageno"
              value={formData.stuvillageno}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`w-full p-2 border-2 rounded-lg text-sm ${errors.stuvillageno ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.stuvillageno && <p className="text-red-500 text-sm">{errors.stuvillageno}</p>}
          </div>
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">หมู่บ้าน <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="stuvillage"
              value={formData.stuvillage}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`w-full p-2 border-2 rounded-lg text-sm ${errors.stuvillage ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.stuvillage && <p className="text-red-500 text-sm">{errors.stuvillage}</p>}
          </div>
        </div>

        {/* Student Address (Alley & Road) */}
        <div className="flex gap-5">
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">ซอย <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="stualley"
              value={formData.stualley}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`w-full p-2 border-2 rounded-lg text-sm ${errors.stualley ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.stualley && <p className="text-red-500 text-sm">{errors.stualley}</p>}
          </div>
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">ถนน <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="sturoad"
              value={formData.sturoad}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`w-full p-2 border-2 rounded-lg text-sm ${errors.sturoad ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.sturoad && <p className="text-red-500 text-sm">{errors.sturoad}</p>}
          </div>
        </div>

        {/* Student Address (Province) */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">จังหวัด <span className="text-red-500">*</span></label>
          <Dropdown
            options={provincesData.map((p) => p.name_th)}
            value={formData.province}
            onChange={handleProvinceChange}
            placeholder="-- เลือกจังหวัด --"
            error={errors.province}
          />
          {errors.province && <p className="text-red-500 text-sm">{errors.province}</p>}
        </div>

        {/* Student Address (Amphure) */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">อำเภอ <span className="text-red-500">*</span></label>
          <Dropdown
            options={amphures.map((a) => a.name_th)}
            value={formData.amphure}
            onChange={handleAmphureChange}
            placeholder="-- เลือกอำเภอ --"
            disabled={!formData.provinceId}
            error={errors.amphure}
          />
          {errors.amphure && <p className="text-red-500 text-sm">{errors.amphure}</p>}
        </div>

        {/* Student Address (Tambon) */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">ตำบล <span className="text-red-500">*</span></label>
          <Dropdown
            options={tambons.map((t) => t.name_th)}
            value={formData.tambon}
            onChange={handleTambonChange}
            placeholder="-- เลือกตำบล --"
            disabled={!formData.amphureId}
            error={errors.tambon}
          />
          {errors.tambon && <p className="text-red-500 text-sm">{errors.tambon}</p>}
        </div>

        {/* Student Address (Zipcode) */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">รหัสไปรษณีย์ <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={formData.zipcode || ""}
            readOnly
            className={`w-full p-2 border-2 rounded-lg bg-gray-100 text-sm ${errors.zipcode ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.zipcode && <p className="text-red-500 text-sm">{errors.zipcode}</p>}
        </div>

        {/* Student Address (House Registration Number) */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">เลขรหัสประจำบ้าน <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="stuHousenumber"
            value={formData.stuHousenumber}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.stuHousenumber ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.stuHousenumber && <p className="text-red-500 text-sm">{errors.stuHousenumber}</p>}
          <p className="text-red-500 text-[11px] pt-1">* เลขรหัสประจำบ้าน สามารถดูได้ในสมุดทะเบียน ที่หน้าแรก ทางด้านบนฝั่งซ้ายของสมุด</p>
        </div>

        <div className="flex items-center space-x-2 text-blue-950 col-span-2 mt-4">
          <i className="fa-solid fa-location-dot"></i>
          <p className="font-bold text-[23px]">ที่อยู่ปัจจุบัน</p>
        </div>

        {/* Current Address (House Number) */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">บ้านเลขที่ <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="stusimaddress"
            value={formData.stusimaddress}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.stusimaddress ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.stusimaddress && <p className="text-red-500 text-sm">{errors.stusimaddress}</p>}
        </div>
        <div className="flex gap-5">
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">หมู่ที่ <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="stusimvillageno"
              value={formData.stusimvillageno}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`w-full p-2 border-2 rounded-lg text-sm ${errors.stusimvillageno ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.stusimvillageno && <p className="text-red-500 text-sm">{errors.stusimvillageno}</p>}
          </div>
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">หมู่บ้าน <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="stusimvillage"
              value={formData.stusimvillage}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`w-full p-2 border-2 rounded-lg text-sm ${errors.stusimvillage ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.stusimvillage && <p className="text-red-500 text-sm">{errors.stusimvillage}</p>}
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">ซอย <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="stusimalley"
              value={formData.stusimalley}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`w-full p-2 border-2 rounded-lg text-sm ${errors.stusimalley ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.stusimalley && <p className="text-red-500 text-sm">{errors.stusimalley}</p>}
          </div>
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">ถนน <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="stusimroad"
              value={formData.stusimroad}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`w-full p-2 border-2 rounded-lg text-sm ${errors.stusimroad ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.stusimroad && <p className="text-red-500 text-sm">{errors.stusimroad}</p>}
          </div>
        </div>
        <div>
          <label className="block mb-1 text-blue-950 font-bold">จังหวัด <span className="text-red-500">*</span></label>
          <Dropdown
            options={provincesData.map((p) => p.name_th)}
            value={formData.simprovince}
            onChange={handleSimProvinceChange}
            placeholder="-- เลือกจังหวัด --"
            error={errors.simprovince}
          />
          {errors.simprovince && <p className="text-red-500 text-sm">{errors.simprovince}</p>}
        </div>
        <div>
          <label className="block mb-1 text-blue-950 font-bold">อำเภอ <span className="text-red-500">*</span></label>
          <Dropdown
            options={simAmphures.map((a) => a.name_th)}
            value={formData.simamphure}
            onChange={handleSimAmphureChange}
            placeholder="-- เลือกอำเภอ --"
            disabled={!formData.simprovinceId}
            error={errors.simamphure}
          />
          {errors.simamphure && <p className="text-red-500 text-sm">{errors.simamphure}</p>}
        </div>
        <div>
          <label className="block mb-1 text-blue-950 font-bold">ตำบล <span className="text-red-500">*</span></label>
          <Dropdown
            options={simTambons.map((t) => t.name_th)}
            value={formData.simtambon}
            onChange={handleSimTambonChange}
            placeholder="-- เลือกตำบล --"
            disabled={!formData.simamphureId}
            error={errors.simtambon}
          />
          {errors.simtambon && <p className="text-red-500 text-sm">{errors.simtambon}</p>}
        </div>
        <div>
          <label className="block mb-1 text-blue-950 font-bold">รหัสไปรษณีย์ <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={formData.simzipcode || ""}
            readOnly
            className={`w-full p-2 border-2 rounded-lg bg-gray-100 text-sm ${errors.simzipcode ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.simzipcode && <p className="text-red-500 text-sm">{errors.simzipcode}</p>}
        </div>
        <div>
          <label className="block mb-1 text-blue-950 font-bold">เลขรหัสประจำบ้าน <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="stusimhousenumber"
            value={formData.stusimhousenumber}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.stusimhousenumber ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.stusimhousenumber && <p className="text-red-500 text-sm">{errors.stusimhousenumber}</p>}
          <p className="text-red-500 text-[11px] pt-1">* เลขรหัสประจำบ้าน สามารถดูได้ในสมุดทะเบียน ที่หน้าแรก ทางด้านบนฝั่งซ้ายของสมุด</p>
        </div>

        <div className="flex items-center space-x-2 text-blue-950 col-span-2">
          <i className="fa-solid fa-circle-user"></i>
          <p className="font-bold text-[23px]">ข้อมูลส่วนตัวภาษาอังกฤษ</p>
        </div>

        {/* English First Name */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">ชื่อ <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="firstNameEng"
            value={formData.firstNameEng}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.firstNameEng ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.firstNameEng && <p className="text-red-500 text-sm">{errors.firstNameEng}</p>}
        </div>

        {/* English Last Name */}
        <div>
          <label className="block mb-1 text-blue-950 font-bold">นามสกุล <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="lastNameEng"
            value={formData.lastNameEng}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`w-full p-2 border-2 rounded-lg text-sm ${errors.lastNameEng ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.lastNameEng && <p className="text-red-500 text-sm">{errors.lastNameEng}</p>}
        </div>
      </div>
    </>
  );
}

export default Stepone;