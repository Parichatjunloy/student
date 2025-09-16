import React from "react";

function Stepfive({ formData }) {
  const combinedData = {
    // Stepone: ข้อมูลส่วนตัว
    "ข้อมูลส่วนตัว": [
      { label: "คำนำหน้า", value: formData.prefix || "" },
      { label: "เลขบัตรประชาชน", value: formData.citizenId || "" },
      { label: "ชื่อ", value: formData.firstName || "" },
      { label: "นามสกุล", value: formData.lastName || "" },
      { label: "ชื่อเล่น", value: formData.nickName || "" },
      { label: "วัน/เดือน/ปีเกิด", value: formData.birthDate || "" },
      { label: "สัญชาติ", value: formData.nationality || "" },
      { label: "เชื้อชาติ", value: formData.ethnicity || "" },
      { label: "ศาสนา", value: formData.religion || "" },
      { label: "หมู่เลือด", value: formData.bloodType || "" },
      { label: "น้ำหนัก (กก.)", value: formData.weight || "" },
      { label: "ส่วนสูง (ซม.)", value: formData.height || "" },
      { label: "จำนวนพี่", value: formData.eldersibling || "" },
      { label: "จำนวนน้อง", value: formData.sibling || "" },
      { label: "จำนวนพี่น้องที่กำลังศึกษาอยู่", value: formData.schoolsibling || "" },
      { label: "โรคประจำตัว", value: formData.disease || "" },
      { label: "ตำหนิ", value: formData.defect || "" },
      { label: "ความพิการ", value: formData.disability || "" },
      { label: "ความสามารถพิเศษ", value: formData.talent || "" },
      { label: "เบอร์โทรของนักเรียน", value: formData.stuphone || "" },
      { label: "ชื่อ (ภาษาอังกฤษ)", value: formData.firstNameEng || "" },
      { label: "นามสกุล (ภาษาอังกฤษ)", value: formData.lastNameEng || "" },
    ],

    // Stepone: ที่อยู่
    "ที่อยู่": [
      { label: "บ้านเลขที่ (ตามสำเนาทะเบียนบ้าน)", value: formData.stuaddress || "" },
      { label: "หมู่ที่", value: formData.stuvillageno || "" },
      { label: "หมู่บ้าน", value: formData.stuvillage || "" },
      { label: "ซอย", value: formData.stualley || "" },
      { label: "ถนน", value: formData.sturoad || "" },
      { label: "ตำบล", value: formData.tambon || "" },
      { label: "อำเภอ", value: formData.amphure || "" },
      { label: "จังหวัด", value: formData.province || "" },
      { label: "รหัสไปรษณีย์", value: formData.zipcode || "" },
      { label: "เลขรหัสประจำบ้าน", value: formData.stuHousenumber || "" },
      { label: "ที่อยู่ปัจจุบัน (ที่อยู่ปัจจุบัน)", value: formData.stusimaddress || "" },
      { label: "บ้านเลขที่", value: formData.stusimaddress || "" },
      { label: "หมู่ที่", value: formData.stusimvillageno || "" },
      { label: "หมู่บ้าน", value: formData.stusimvillage || "" },
      { label: "ซอย", value: formData.stusimalley || "" },
      { label: "ถนน", value: formData.stusimroad || "" },
      { label: "ตำบล", value: formData.simtambon || "" },
      { label: "อำเภอ", value: formData.simamphure || "" },
      { label: "จังหวัด", value: formData.simprovince || "" },
      { label: "รหัสไปรษณีย์", value: formData.simzipcode || "" },
      { label: "เลขรหัสประจำบ้าน", value: formData.stusimhousenumber || "" },
    ],

    // Steptwo: ข้อมูลการศึกษา
    "ข้อมูลการศึกษา": [
      { label: "ชื่อสถานศึกษาเดิม", value: formData.school || "" },
      { label: "ชื่อสถานศึกษาเดิม (ภาษาอังกฤษ)", value: formData.previousSchoolEn || "" },
      { label: "จังหวัด", value: formData.provinceSchool || "" },
      { label: "รหัสประจำตัวนักเรียน", value: formData.stuNumid || "" },
      { label: "ประเภทสถานศึกษา", value: formData.typeEdu || "" },
      { label: "ผลการเรียนเฉลี่ย", value: formData.gpa || "" },
    ],

    // Stepthree: ข้อมูลผู้ปกครอง
    "ข้อมูลบิดา": [
      { label: "คำนำหน้า", value: formData.prefixFa || "" },
      { label: "สถานภาพ", value: formData.statusFa || "" },
      { label: "ชื่อ", value: formData.FaName || "" },
      { label: "นามสกุล", value: formData.FaLname || "" },
      { label: "ชื่อ (ภาษาอังกฤษ)", value: formData.FaNameEng || "" },
      { label: "นามสกุล (ภาษาอังกฤษ)", value: formData.FaLnameEng || "" },
      { label: "ความพิการ", value: formData.disabilityFa || "" },
      { label: "อาชีพ", value: formData.occupationFa || "" },
      { label: "รายได้/เดือน", value: formData.incomeFa || "" },
      { label: "เบอร์โทร", value: formData.telFa || "" },
    ],
    "ข้อมูลมารดา": [
      { label: "คำนำหน้า", value: formData.prefixMa || "" },
      { label: "สถานภาพ", value: formData.statusMa || "" },
      { label: "ชื่อ", value: formData.MaName || "" },
      { label: "นามสกุล", value: formData.MaLname || "" },
      { label: "ชื่อ (ภาษาอังกฤษ)", value: formData.MaNameEng || "" },
      { label: "นามสกุล (ภาษาอังกฤษ)", value: formData.MaLnameEng || "" },
      { label: "ความพิการ", value: formData.disabilityMa || "" },
      { label: "อาชีพ", value: formData.occupationMa || "" },
      { label: "รายได้/เดือน", value: formData.incomeMa || "" },
      { label: "เบอร์โทร", value: formData.telMa || "" },
      { label: "สถานภาพ", value: formData.parentStatus || "" },
    ],
    "ที่อยู่บิดา/มารดา": [
      { label: "บ้านเลขที่", value: formData.addressParent || "" },
      { label: "หมู่ที่", value: formData.mooParent || "" },
      { label: "หมู่บ้าน", value: formData.mooBanParent || "" },
      { label: "ซอย", value: formData.soiParent || "" },
      { label: "ถนน", value: formData.roadParent || "" },
      { label: "ตำบล", value: formData.parentTambon || "" },
      { label: "อำเภอ", value: formData.parentAmphure || "" },
      { label: "จังหวัด", value: formData.parentProvince || "" },
      { label: "รหัสไปรษณีย์", value: formData.parentZipcode || "" },
      { label: "เลขประจำบ้าน", value: formData.homeIDParent || "" },
    ],
    "ข้อมูลผู้ปกครอง": [
      { label: "ความสัมพันธ์กับผู้เรียน", value: formData.relationshipGuardian || "" },
      { label: "คำนำหน้า", value: formData.prefixGuardian || "" },
      { label: "ชื่อ", value: formData.nameGuardian || "" },
      { label: "นามสกุล", value: formData.lnameGuardian || "" },
      { label: "อาชีพ", value: formData.occupationGuardian || "" },
      { label: "รายได้/เดือน", value: formData.incomeGuardian || "" },
      { label: "เบอร์โทร", value: formData.telGuardian || "" },
    ],
    "ที่อยู่ผู้ปกครอง": [
      { label: "บ้านเลขที่", value: formData.addressGuardian || "" },
      { label: "หมู่ที่", value: formData.mooGuardian || "" },
      { label: "หมู่บ้าน", value: formData.mooBanGuardian || "" },
      { label: "ซอย", value: formData.soiGuardian || "" },
      { label: "ถนน", value: formData.roadGuardian || "" },
      { label: "ตำบล", value: formData.guardianTambon || "" },
      { label: "อำเภอ", value: formData.guardianAmphure || "" },
      { label: "จังหวัด", value: formData.guardianProvince || "" },
      { label: "รหัสไปรษณีย์", value: formData.guardianZipcode || "" },
      { label: "เลขประจำบ้าน", value: formData.homeIDGuardian || "" },
    ],
    
    // Stepfour: ข้อมูลสาขา -> ข้อมูลหลักสูตร
    "ข้อมูลหลักสูตร": [
      { label: "ระดับการศึกษา", value: formData.educationLevel || "" },
      { label: "ภาคการศึกษา", value: formData.semesterType || "" },
      { label: "ประเภทวิชา", value: formData.major || "" },
      { label: "สาขาวิชา", value: formData.branch || "" },
    ],
  };

  const renderSection = (title, data) => (
    <div key={title} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4 text-blue-950">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-sm font-semibold text-gray-600">{item.label}</span>
            <span className="text-base text-gray-800 font-medium break-words">
              {item.value || "\u00A0"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 p-4 md:p-8 bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-950">สรุปข้อมูลที่กรอก</h2>
        <p className="mt-2 text-gray-600">ตรวจสอบความถูกต้องของข้อมูลก่อนยืนยัน</p>
      </div>
      {Object.entries(combinedData).map(([title, data]) =>
        renderSection(title, data)
      )}
    </div>
  );
}

export default Stepfive;