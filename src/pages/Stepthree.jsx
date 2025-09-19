import React from "react";
import provincesData from "../../public/thai_provinces.json";
import amphuresData from "../../public/thai_amphures.json";
import tambonsData from "../../public/thai_tambons.json";

const Dropdown = ({ options, value, onChange, placeholder, disabled, error }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  const handleSelect = (option) => {
    // Check if onChange is a function and call it with the selected value
    if (typeof onChange === "function") {
      onChange(option);
    } else {
      console.error("onChange prop is not a function.");
    }
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
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
        <div className="absolute top-full left-0 z-10 w-full rounded-lg shadow-lg max-h-60 overflow-auto border border-gray-300 bg-[#0F2C59]">
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
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

const Stepthree = ({ formData, setFormData, handleChange, errors }) => {
  // บิดามารดา
  const amphuresParent = amphuresData.filter(
    (a) => a.province_id === formData.parentProvinceId
  );
  const tambonsParent = tambonsData.filter(
    (t) => t.amphure_id === formData.parentAmphureId
  );

  // ผู้ปกครอง
  const amphuresGuardian = amphuresData.filter(
    (a) => a.province_id === formData.guardianProvinceId
  );
  const tambonsGuardian = tambonsData.filter(
    (t) => t.amphure_id === formData.guardianAmphureId
  );

  // Handlers บิดามารดา
  const handleParentProvinceChange = (provinceName) => {
    const province = provincesData.find((p) => p.name_th === provinceName);
    setFormData({
      ...formData,
      parentProvince: province.name_th,
      parentProvinceId: province.id,
      parentAmphure: "",
      parentAmphureId: null,
      parentTambon: "",
      parentTambonId: null,
      parentZipcode: "",
    });
  };

  const handleParentAmphureChange = (amphureName) => {
    const amphure = amphuresParent.find((a) => a.name_th === amphureName);
    setFormData({
      ...formData,
      parentAmphure: amphure.name_th,
      parentAmphureId: amphure.id,
      parentTambon: "",
      parentTambonId: null,
      parentZipcode: "",
    });
  };

  const handleParentTambonChange = (tambonName) => {
    const tambon = tambonsParent.find((t) => t.name_th === tambonName);
    setFormData({
      ...formData,
      parentTambon: tambon.name_th,
      parentTambonId: tambon.id,
      parentZipcode: tambon.zip_code,
    });
  };

  // Handlers ผู้ปกครอง
  const handleGuardianProvinceChange = (provinceName) => {
    const province = provincesData.find((p) => p.name_th === provinceName);
    setFormData({
      ...formData,
      guardianProvince: province.name_th,
      guardianProvinceId: province.id,
      guardianAmphure: "",
      guardianAmphureId: null,
      guardianTambon: "",
      guardianTambonId: null,
      guardianZipcode: "",
    });
  };

  const handleGuardianAmphureChange = (amphureName) => {
    const amphure = amphuresGuardian.find((a) => a.name_th === amphureName);
    setFormData({
      ...formData,
      guardianAmphure: amphure.name_th,
      guardianAmphureId: amphure.id,
      guardianTambon: "",
      guardianTambonId: null,
      guardianZipcode: "",
    });
  };

  const handleGuardianTambonChange = (tambonName) => {
    const tambon = tambonsGuardian.find((t) => t.name_th === tambonName);
    setFormData({
      ...formData,
      guardianTambon: tambon.name_th,
      guardianTambonId: tambon.id,
      guardianZipcode: tambon.zip_code,
    });
  };

  const inputClass =
    "w-full p-2 h-10 border-2 rounded-lg text-sm";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* ข้อมูลบิดามารดา */}
      <div className="flex items-center space-x-2 text-blue-950 col-span-2">
        <i className="fa-solid fa-users"></i>
        <p className="font-bold text-[23px]">ข้อมูลบิดามารดา</p>
      </div>

      {/* บิดา */}
      <div className="flex items-center space-x-2 text-blue-950 pl-7 pt-0.5 bg-[#FFE4A1] rounded-2xl w-[150px] h-[40px]">
        <i className="fa-solid fa-mars"></i>
        <p className="font-bold text-[18px]">บิดา</p>
      </div>
      <br/>
      <div>
        <label className="block mb-1 text-blue-950 font-bold">คำนำหน้าบิดา <span className="text-red-500">*</span></label>
        <Dropdown
          options={["นาย"]}
          value={formData.prefixFa}
          onChange={(val) => handleChange("prefixFa", val)}
          placeholder="-- เลือกคำนำหน้า --"
          error={errors.prefixFa}
        />
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">สถานภาพ <span className="text-red-500">*</span></label>
        <Dropdown
          options={["มีชีวิต", "เสียชีวิต"]}
          value={formData.statusFa}
          onChange={(val) => handleChange("statusFa", val)}
          placeholder="-- เลือก --"
          error={errors.statusFa}
        />
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">บิดาผู้ให้กำเนิด ชื่อ <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="FaName"
          value={formData.FaName}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.FaName ? "border-red-500" : "border-gray-400"}`}
        />
        {errors.FaName && <p className="text-red-500 text-sm">{errors.FaName}</p>}
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">นามสกุล <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="FaLname"
          value={formData.FaLname}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.FaLname ? "border-red-500" : "border-gray-400"}`}
        />
        {errors.FaLname && <p className="text-red-500 text-sm">{errors.FaLname}</p>}
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">บิดาผู้ให้กำเนิด ชื่อ (ภาษาอังกฤษ) <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="FaNameEng"
          value={formData.FaNameEng}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.FaNameEng ? "border-red-500" : "border-gray-400"}`}
        />
        {errors.FaNameEng && <p className="text-red-500 text-sm">{errors.FaNameEng}</p>}
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">นามสกุล <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="FaLnameEng"
          value={formData.FaLnameEng}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.FaLnameEng ? "border-red-500" : "border-gray-400"}`}
        />
        {errors.FaLnameEng && <p className="text-red-500 text-sm">{errors.FaLnameEng}</p>}
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">ความพิการ <span className="text-red-500">*</span></label>
        <Dropdown
          options={[
            "ไม่พิการ", "การมองเห็น", "การได้ยิน", "สติปัญญา",
            "ร่างกาย/สุขภาพ", "การเรียนรู้", "การพูด/ภาษา",
            "พฤติกรรมและอารมณ์", "ออทิสติก", "พิการซ้ำซ้อน", "พิการ (ไม่ระบุประเภท)"
          ]}
          value={formData.disabilityFa}
          onChange={(val) => handleChange("disabilityFa", val)}
          placeholder="-- เลือก --"
          error={errors.disabilityFa}
        />
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">อาชีพ <span className="text-red-500">*</span></label>
        <Dropdown
          options={[
            "รับราชการ", "รัฐวิสาหกิจ", "ธุรกิจ/ค้าขาย", "เกษตรกรรม",
            "พนักงานรัฐ/เจ้าหน้าที่ของรัฐ", "ข้าราชการ/พนักงานเกษียณ", "รับจ้าง เช่น (พนักงานโรงงาน)", "พระ/นักบวช", "อื่น ๆ", "ไม่ได้ประกอบอาชีพ"
          ]}
          value={formData.occupationFa}
          onChange={(val) => handleChange("occupationFa", val)}
          placeholder="-- เลือก --"
          error={errors.occupationFa}
        />
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">รายได้/เดือน <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="incomeFa"
          value={formData.incomeFa}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.incomeFa ? "border-red-500" : "border-gray-400"}`}
        />
        {errors.incomeFa && <p className="text-red-500 text-sm">{errors.incomeFa}</p>}
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">เบอร์โทร <span className="text-red-500">*</span></label>
        <input
          type="tel"
          name="telFa"
          value={formData.telFa}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.telFa ? "border-red-500" : "border-gray-400"}`}
          maxLength="10"
        />
        {errors.telFa && <p className="text-red-500 text-sm">{errors.telFa}</p>}
      </div>

      {/* มารดา */}
      <div className="flex items-center space-x-2 text-blue-950 pl-5.5 pt-0.5 bg-[#FFE4A1] rounded-2xl w-[150px] h-[40px]">
        <i className="fa-solid fa-venus"></i>
        <p className="font-bold text-[18px]">มารดา</p>
      </div>
      <br/>
      <div>
        <label className="block mb-1 text-blue-950 font-bold">คำนำหน้ามารดา <span className="text-red-500">*</span></label>
        <Dropdown
          options={["นาง", "นางสาว"]}
          value={formData.prefixMa}
          onChange={(val) => handleChange("prefixMa", val)}
          placeholder="-- เลือกคำนำหน้า --"
          error={errors.prefixMa}
        />
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">สถานภาพ <span className="text-red-500">*</span></label>
        <Dropdown
          options={["มีชีวิต", "เสียชีวิต"]}
          value={formData.statusMa}
          onChange={(val) => handleChange("statusMa", val)}
          placeholder="-- เลือก --"
          error={errors.statusMa}
        />
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">มารดาผู้ให้กำเนิด ชื่อ <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="MaName"
          value={formData.MaName}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.MaName ? "border-red-500" : "border-gray-400"}`}
        />
        {errors.MaName && <p className="text-red-500 text-sm">{errors.MaName}</p>}
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">นามสกุล <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="MaLname"
          value={formData.MaLname}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.MaLname ? "border-red-500" : "border-gray-400"}`}
        />
        {errors.MaLname && <p className="text-red-500 text-sm">{errors.MaLname}</p>}
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">มารดาผู้ให้กำเนิด ชื่อ (ภาษาอังกฤษ) <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="MaNameEng"
          value={formData.MaNameEng}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.MaNameEng ? "border-red-500" : "border-gray-400"}`}
        />
        {errors.MaNameEng && <p className="text-red-500 text-sm">{errors.MaNameEng}</p>}
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">นามสกุล <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="MaLnameEng"
          value={formData.MaLnameEng}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.MaLnameEng ? "border-red-500" : "border-gray-400"}`}
        />
        {errors.MaLnameEng && <p className="text-red-500 text-sm">{errors.MaLnameEng}</p>}
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">ความพิการ <span className="text-red-500">*</span></label>
        <Dropdown
          options={[
            "ไม่พิการ", "การมองเห็น", "การได้ยิน", "สติปัญญา",
            "ร่างกาย/สุขภาพ", "การเรียนรู้", "การพูด/ภาษา",
            "พฤติกรรมและอารมณ์", "ออทิสติก", "พิการซ้ำซ้อน", "พิการ (ไม่ระบุประเภท)"
          ]}
          value={formData.disabilityMa}
          onChange={(val) => handleChange("disabilityMa", val)}
          placeholder="-- เลือก --"
          error={errors.disabilityMa}
        />
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">อาชีพ <span className="text-red-500">*</span></label>
        <Dropdown
          options={[
            "รับราชการ", "รัฐวิสาหกิจ", "ธุรกิจ/ค้าขาย", "เกษตรกรรม",
            "พนักงานรัฐ/เจ้าหน้าที่ของรัฐ", "ข้าราชการ/พนักงานเกษียณ", "รับจ้าง เช่น (พนักงานโรงงาน)", "พระ/นักบวช", "อื่น ๆ", "ไม่ได้ประกอบอาชีพ"
          ]}
          value={formData.occupationMa}
          onChange={(val) => handleChange("occupationMa", val)}
          placeholder="-- เลือก --"
          error={errors.occupationMa}
        />
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">รายได้/เดือน <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="incomeMa"
          value={formData.incomeMa}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.incomeMa ? "border-red-500" : "border-gray-400"}`}
        />
        {errors.incomeMa && <p className="text-red-500 text-sm">{errors.incomeMa}</p>}
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">เบอร์โทร <span className="text-red-500">*</span></label>
        <input
          type="tel"
          name="telMa"
          value={formData.telMa}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.telMa ? "border-red-500" : "border-gray-400"}`}
          maxLength="10"
        />
        {errors.telMa && <p className="text-red-500 text-sm">{errors.telMa}</p>}
      </div>

      {/* สถานภาพของบิดามารดา */}
      <div>
        <label className="block mb-1 text-blue-950 font-bold">สถานภาพ <span className="text-red-500">*</span></label>
        <Dropdown
          options={["อยู่ด้วยกัน", "แยกกันอยู่", "หย่าร้าง", "บิดาถึงแก่กรรม", "มารดาถึงแก่กรรม"]}
          value={formData.parentStatus}
          onChange={(val) => handleChange("parentStatus", val)}
          placeholder="-- เลือก --"
          error={errors.parentStatus}
        />
      </div>

      {/* ที่อยู่บิดามารดา */}
      <div className="flex items-center space-x-2 text-blue-950 col-span-2">
        <i className="fa-solid fa-house-chimney"></i>
        <p className="font-bold text-[23px]">ข้อมูลที่อยู่บิดามารดา</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-2">
        <div>
          <label className="block mb-1 text-blue-950 font-bold">ที่อยู่ตามทะเบียนบ้าน <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="addressParent"
            value={formData.addressParent}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`${inputClass} ${errors.addressParent ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.addressParent && <p className="text-red-500 text-sm">{errors.addressParent}</p>}
        </div>
        
        <div className="flex gap-5">
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">หมู่ที่</label>
            <input
              type="text"
              name="mooParent"
              value={formData.mooParent}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`${inputClass} ${errors.mooParent ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.mooParent && <p className="text-red-500 text-sm">{errors.mooParent}</p>}
          </div>

          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">หมู่บ้าน</label>
            <input
              type="text"
              name="mooBanParent"
              value={formData.mooBanParent}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`${inputClass} ${errors.mooBanParent ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.mooBanParent && <p className="text-red-500 text-sm">{errors.mooBanParent}</p>}
          </div>
        </div>
        
        <div className="flex gap-5">
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">ซอย</label>
            <input
              type="text"
              name="soiParent"
              value={formData.soiParent}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`${inputClass} ${errors.soiParent ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.soiParent && <p className="text-red-500 text-sm">{errors.soiParent}</p>}
          </div>

          <div>
            <label className="block mb-1 text-blue-950 font-bold ">ถนน</label>
            <input
              type="text"
              name="roadParent"
              value={formData.roadParent}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`${inputClass} ${errors.roadParent ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.roadParent && <p className="text-red-500 text-sm">{errors.roadParent}</p>}
          </div>
        </div>
      
        <div>
          <label className="block mb-1 text-blue-950 font-bold">จังหวัด <span className="text-red-500">*</span></label>
          <Dropdown
            options={provincesData.map((p) => p.name_th)}
            value={formData.parentProvince}
            onChange={handleParentProvinceChange}
            placeholder="-- เลือกจังหวัด --"
            error={errors.parentProvince}
          />
        </div>

        <div>
          <label className="block mb-1 text-blue-950 font-bold">อำเภอ <span className="text-red-500">*</span></label>
          <Dropdown
            options={amphuresParent.map((a) => a.name_th)}
            value={formData.parentAmphure}
            onChange={handleParentAmphureChange}
            placeholder="-- เลือกอำเภอ --"
            disabled={!formData.parentProvinceId}
            error={errors.parentAmphure}
          />
        </div>

        <div>
          <label className="block mb-1 text-blue-950 font-bold">ตำบล <span className="text-red-500">*</span></label>
          <Dropdown
            options={tambonsParent.map((t) => t.name_th)}
            value={formData.parentTambon}
            onChange={handleParentTambonChange}
            placeholder="-- เลือกตำบล --"
            disabled={!formData.parentAmphureId}
            error={errors.parentTambon}
          />
        </div>

        <div>
          <label className="block mb-1 text-blue-950 font-bold">รหัสไปรษณีย์ <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={formData.parentZipcode || ""}
            readOnly
            className={`${inputClass} bg-gray-100 ${errors.parentZipcode ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.parentZipcode && <p className="text-red-500 text-sm">{errors.parentZipcode}</p>}
        </div>

        <div>
          <label className="block mb-1 text-blue-950 font-bold">เลขประจำบ้าน</label>
          <input
            type="text"
            name="homeIDParent"
            value={formData.homeIDParent}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`${inputClass} ${errors.homeIDParent ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.homeIDParent && <p className="text-red-500 text-sm">{errors.homeIDParent}</p>}
          <p className="text-red-500 text-[11px] pt-1">* เลขรหัสประจำบ้าน สามารถดูได้ในสมุดทะเบียน ที่หน้าแรก ทางด้านบนฝั่งซ้ายของสมุด</p>
        </div>
      </div>

      {/* ข้อมูลผู้ปกครอง */}
      <div className="flex items-center space-x-2 text-blue-950 col-span-2">
        <i className="fa-solid fa-user-shield"></i>
        <p className="font-bold text-[23px]">ข้อมูลผู้ปกครอง</p>
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">คำนำหน้า <span className="text-red-500">*</span></label>
        <Dropdown
          options={["นาย", "นาง", "นางสาว"]}
          value={formData.prefixGuardian}
          onChange={(val) => handleChange("prefixGuardian", val)}
          placeholder="-- เลือกคำนำหน้า --"
          error={errors.prefixGuardian}
        />
      </div>
      <div>
        <label className="block mb-1 text-blue-950 font-bold">ชื่อ <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="nameGuardian"
          value={formData.nameGuardian}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.nameGuardian ? "border-red-500" : "border-gray-400"}`}
        />
        {errors.nameGuardian && <p className="text-red-500 text-sm">{errors.nameGuardian}</p>}
      </div>
      <div>
        <label className="block mb-1 text-blue-950 font-bold">นามสกุล <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="lnameGuardian"
          value={formData.lnameGuardian}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.lnameGuardian ? "border-red-500" : "border-gray-400"}`}
        />
        {errors.lnameGuardian && <p className="text-red-500 text-sm">{errors.lnameGuardian}</p>}
      </div>
      <div>
        <label className="block mb-1 text-blue-950 font-bold">ความสัมพันธ์กับนักเรียน <span className="text-red-500">*</span></label>
        <Dropdown
          options={["บิดา", "มารดา", "ปู่", "ย่า", "ตา", "ยาย", "พี่ชาย", "พี่สาว", "ลุง", "ป้า", "น้า", "อา", "อื่น ๆ"]}
          value={formData.relationshipGuardian}
          onChange={(val) => handleChange("relationshipGuardian", val)}
          placeholder="-- เลือก --"
          error={errors.relationshipGuardian}
        />
      </div>
      <div>
        <label className="block mb-1 text-blue-950 font-bold">อาชีพ <span className="text-red-500">*</span></label>
        <Dropdown
          options={[
            "รับราชการ", "รัฐวิสาหกิจ", "ธุรกิจ/ค้าขาย", "เกษตรกรรม",
            "พนักงานรัฐ/เจ้าหน้าที่ของรัฐ", "ข้าราชการ/พนักงานเกษียณ", "รับจ้าง เช่น (พนักงานโรงงาน)", "พระ/นักบวช", "อื่น ๆ", "ไม่ได้ประกอบอาชีพ"
          ]}
          value={formData.occupationGuardian}
          onChange={(val) => handleChange("occupationGuardian", val)}
          placeholder="-- เลือก --"
          error={errors.occupationGuardian}
        />
      </div>
      <div>
        <label className="block mb-1 text-blue-950 font-bold">รายได้/เดือน <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="incomeGuardian"
          value={formData.incomeGuardian}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.incomeGuardian ? "border-red-500" : "border-gray-400"}`}
        />
        {errors.incomeGuardian && <p className="text-red-500 text-sm">{errors.incomeGuardian}</p>}
      </div>

      <div>
        <label className="block mb-1 text-blue-950 font-bold">เบอร์โทร <span className="text-red-500">*</span></label>
        <input
          type="tel"
          name="telGuardian"
          value={formData.telGuardian}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={`${inputClass} ${errors.telGuardian ? "border-red-500" : "border-gray-400"}`}
          maxLength="10"
        />
        {errors.telGuardian && <p className="text-red-500 text-sm">{errors.telGuardian}</p>}
      </div>

      {/* ที่อยู่ผู้ปกครอง */}
      <div className="flex items-center space-x-2 text-blue-950 col-span-2">
        <i className="fa-solid fa-house-chimney"></i>
        <p className="font-bold text-[23px]">ข้อมูลที่อยู่ผู้ปกครอง</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-2">
        <div>
          <label className="block mb-1 text-blue-950 font-bold">ที่อยู่ตามทะเบียนบ้าน <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="addressGuardian"
            value={formData.addressGuardian}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`${inputClass} ${errors.addressGuardian ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.addressGuardian && <p className="text-red-500 text-sm">{errors.addressGuardian}</p>}
        </div>

        <div className="flex gap-5">
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">หมู่ที่</label>
            <input
              type="text"
              name="mooGuardian"
              value={formData.mooGuardian}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`${inputClass} ${errors.mooGuardian ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.mooGuardian && <p className="text-red-500 text-sm">{errors.mooGuardian}</p>}
          </div>

          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">หมู่บ้าน</label>
            <input
              type="text"
              name="mooBanGuardian"
              value={formData.mooBanGuardian}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`${inputClass} ${errors.mooBanGuardian ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.mooBanGuardian && <p className="text-red-500 text-sm">{errors.mooBanGuardian}</p>}
          </div>
        </div>

        <div className="flex gap-5">
          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">ซอย</label>
            <input
              type="text"
              name="soiGuardian"
              value={formData.soiGuardian}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`${inputClass} ${errors.soiGuardian ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.soiGuardian && <p className="text-red-500 text-sm">{errors.soiGuardian}</p>}
          </div>

          <div>
            <label className="block mb-1 text-blue-950 font-bold w-[185px]">ถนน</label>
            <input
              type="text"
              name="roadGuardian"
              value={formData.roadGuardian}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={`${inputClass} ${errors.roadGuardian ? "border-red-500" : "border-gray-400"}`}
            />
            {errors.roadGuardian && <p className="text-red-500 text-sm">{errors.roadGuardian}</p>}
          </div>
        </div>

        <div>
          <label className="block mb-1 text-blue-950 font-bold">จังหวัด <span className="text-red-500">*</span></label>
          <Dropdown
            options={provincesData.map((p) => p.name_th)}
            value={formData.guardianProvince}
            onChange={handleGuardianProvinceChange}
            placeholder="-- เลือกจังหวัด --"
            error={errors.guardianProvince}
          />
        </div>

        <div>
          <label className="block mb-1 text-blue-950 font-bold">อำเภอ <span className="text-red-500">*</span></label>
          <Dropdown
            options={amphuresGuardian.map((a) => a.name_th)}
            value={formData.guardianAmphure}
            onChange={handleGuardianAmphureChange}
            placeholder="-- เลือกอำเภอ --"
            disabled={!formData.guardianProvinceId}
            error={errors.guardianAmphure}
          />
        </div>

        <div>
          <label className="block mb-1 text-blue-950 font-bold">ตำบล <span className="text-red-500">*</span></label>
          <Dropdown
            options={tambonsGuardian.map((t) => t.name_th)}
            value={formData.guardianTambon}
            onChange={handleGuardianTambonChange}
            placeholder="-- เลือกตำบล --"
            disabled={!formData.guardianAmphureId}
            error={errors.guardianTambon}
          />
        </div>

        <div>
          <label className="block mb-1 text-blue-950 font-bold">รหัสไปรษณีย์ <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={formData.guardianZipcode || ""}
            readOnly
            className={`${inputClass} bg-gray-100 ${errors.guardianZipcode ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.guardianZipcode && <p className="text-red-500 text-sm">{errors.guardianZipcode}</p>}
        </div>

        <div>
          <label className="block mb-1 text-blue-950 font-bold">เลขประจำบ้าน</label>
          <input
            type="text"
            name="homeIDGuardian"
            value={formData.homeIDGuardian}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={`${inputClass} ${errors.homeIDGuardian ? "border-red-500" : "border-gray-400"}`}
          />
          {errors.homeIDGuardian && <p className="text-red-500 text-sm">{errors.homeIDGuardian}</p>}
          <p className="text-red-500 text-[11px] pt-1">* เลขรหัสประจำบ้าน สามารถดูได้ในสมุดทะเบียน ที่หน้าแรก ทางด้านบนฝั่งซ้ายของสมุด</p>
        </div>
      </div>
    </div>
  );
};

export default Stepthree;