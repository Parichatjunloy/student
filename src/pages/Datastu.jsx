import React, { useState } from "react";
// Import useNavigate from react-router-dom to enable navigation
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Stepone from "./Stepone";
import Steptwo from "./Steptwo";
import Stepthree from "./Stepthree";
import Stepfour from "./Stepfour";
import Stepfive from "./Stepfive";

function Datastu() {
  const [step, setStep] = useState(1);
  const steps = ["ข้อมูลส่วนตัว", "ข้อมูลการศึกษา", "ข้อมูลผู้ปกครอง", "เลือกหลักสูตร", "ยืนยันข้อมูล"];

  // Initialize the navigate hook here
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    prefix: "",
    citizenId: "",
    firstName: "",
    lastName: "",
    nickName: "",
    birthDate: "",
    nationality: "",
    ethnicity: "",
    religion: "",
    bloodType: "",
    weight: "",
    height: "",
    eldersibling: "",
    sibling: "",
    schoolsibling: "",
    disease: "",
    defect: "",
    disability: "",
    talent: "",
    stuphone: "",
    email: "",
    stuaddress: "",
    stuvillageno: "",
    stuvillage: "",
    stualley: "",
    sturoad: "",
    province: "",
    provinceId: null,
    amphure: "",
    amphureId: null,
    tambon: "",
    tambonId: null,
    zipcode: "",
    stuHousenumber: "",
    stusimaddress: "",
    stusimvillageno: "",
    stusimvillage: "",
    stusimalley: "",
    stusimroad: "",
    simprovince: "",
    simprovinceId: null,
    simamphure: "",
    simamphureId: null,
    simtambon: "",
    simtambonId: null,
    simzipcode: "",
    stusimhousenumber: "",
    firstNameEng: "",
    lastNameEng: "",
    school: "",
    provinceSchool: "",
    stuNumid: "",
    typeEdu: "",
    gpa: "",
    // Add new state variables for Stepthree
    prefixFa: "",
    statusFa: "",
    FaName: "",
    FaLname: "",
    FaNameEng: "",
    FaLnameEng: "",
    disabilityFa: "",
    occupationFa: "",
    incomeFa: "",
    telFa: "",
    prefixMa: "",
    statusMa: "",
    MaName: "",
    MaLname: "",
    MaNameEng: "",
    MaLnameEng: "",
    disabilityMa: "",
    occupationMa: "",
    incomeMa: "",
    telMa: "",
    parentStatus: "",
    addressParent: "",
    parentProvince: "",
    parentProvinceId: null,
    parentAmphure: "",
    parentAmphureId: null,
    parentTambon: "",
    parentTambonId: null,
    parentZipcode: "",
    homeIDParent: "",
    prefixGuardian: "",
    nameGuardian: "",
    lnameGuardian: "",
    disabilityGuardian: "",
    occupationGuardian: "",
    incomeGuardian: "",
    telGuardian: "",
    addressGuardian: "",
    guardianProvince: "",
    guardianProvinceId: null,
    guardianAmphure: "",
    guardianAmphureId: null,
    guardianTambon: "",
    guardianTambonId: null,
    guardianZipcode: "",
    homeIDGuardian: "",
    // Stepfour data
    educationLevel: "",
    semesterType: "",
    major: "",
    branch: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => {
      if (name === "educationLevel") {
        return { ...prev, educationLevel: value, major: "", branch: "" };
      }
      if (name === "major") {
        return { ...prev, major: value, branch: "" };
      }
      return { ...prev, [name]: value };
    });
  };

  const validateStepOne = () => {
    const newErrors = {};

    if (!formData.prefix) newErrors.prefix = "กรุณาเลือกคำนำหน้า";
    if (!formData.citizenId || formData.citizenId.length !== 13) newErrors.citizenId = "กรุณากรอกเลขบัตรประชาชนให้ครบ 13 หลัก";
    if (!formData.firstName) newErrors.firstName = "กรุณากรอกชื่อ";
    if (!formData.lastName) newErrors.lastName = "กรุณากรอกนามสกุล";
    if (!formData.nickName) newErrors.nickName = "กรุณากรอกชื่อเล่น";
    if (!formData.birthDate) newErrors.birthDate = "กรุณาเลือกวัน/เดือน/ปีเกิด";
    if (!formData.nationality) newErrors.nationality = "กรุณากรอกสัญชาติ";
    if (!formData.ethnicity) newErrors.ethnicity = "กรุณากรอกเชื้อชาติ";
    if (!formData.religion) newErrors.religion = "กรุณาเลือกศาสนา";
    if (!formData.bloodType) newErrors.bloodType = "กรุณาเลือกหมู่เลือด";
    if (!formData.weight || isNaN(formData.weight)) newErrors.weight = "กรุณากรอกน้ำหนัก";
    if (!formData.height || isNaN(formData.height)) newErrors.height = "กรุณากรอกส่วนสูง";
    if (formData.eldersibling === "" || isNaN(formData.eldersibling) || parseInt(formData.eldersibling) < 0) newErrors.eldersibling = "กรุณากรอกจำนวนพี่ที่ถูกต้อง";
    if (formData.sibling === "" || isNaN(formData.sibling) || parseInt(formData.sibling) < 0) newErrors.sibling = "กรุณากรอกจำนวนน้องที่ถูกต้อง";
    if (formData.schoolsibling === "" || isNaN(formData.schoolsibling) || parseInt(formData.schoolsibling) < 0) newErrors.schoolsibling = "กรุณากรอกจำนวนพี่น้องที่กำลังศึกษา";
    if (!formData.disease) newErrors.disease = "กรุณากรอกโรคประจำตัว";
    if (!formData.defect) newErrors.defect = "กรุณากรอกตำหนิ";
    if (!formData.disability) newErrors.disability = "กรุณาเลือกความพิการ";
    if (!formData.talent) newErrors.talent = "กรุณาเลือกความสามารถพิเศษ";
    if (!formData.stuphone || formData.stuphone.length < 9) newErrors.stuphone = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "กรุณากรอกอีเมลให้ถูกต้อง";
    if (!formData.stuaddress) newErrors.stuaddress = "กรุณากรอกบ้านเลขที่";
    if (!formData.stuvillageno) newErrors.stuvillageno = "กรุณากรอกหมู่ที่";
    if (!formData.stuvillage) newErrors.stuvillage = "กรุณากรอกหมู่บ้าน";
    if (!formData.stualley) newErrors.stualley = "กรุณากรอกซอย";
    if (!formData.sturoad) newErrors.sturoad = "กรุณากรอกถนน";
    if (!formData.province) newErrors.province = "กรุณาเลือกจังหวัด";
    if (!formData.amphure) newErrors.amphure = "กรุณาเลือกอำเภอ";
    if (!formData.tambon) newErrors.tambon = "กรุณาเลือกตำบล";
    if (!formData.zipcode) newErrors.zipcode = "กรุณากรอกรหัสไปรษณีย์";
    if (!formData.stuHousenumber) newErrors.stuHousenumber = "กรุณากรอกเลขรหัสประจำบ้าน";
    if (!formData.stusimaddress) newErrors.stusimaddress = "กรุณากรอกบ้านเลขที่";
    if (!formData.stusimvillageno) newErrors.stusimvillageno = "กรุณากรอกหมู่ที่";
    if (!formData.stusimvillage) newErrors.stusimvillage = "กรุณากรอกหมู่บ้าน";
    if (!formData.stusimalley) newErrors.stusimalley = "กรุณากรอกซอย";
    if (!formData.stusimroad) newErrors.stusimroad = "กรุณากรอกถนน";
    if (!formData.simprovince) newErrors.simprovince = "กรุณาเลือกจังหวัด";
    if (!formData.simamphure) newErrors.simamphure = "กรุณาเลือกอำเภอ";
    if (!formData.simtambon) newErrors.simtambon = "กรุณาเลือกตำบล";
    if (!formData.simzipcode) newErrors.simzipcode = "กรุณากรอกรหัสไปรษณีย์";
    if (!formData.stusimhousenumber) newErrors.stusimhousenumber = "กรุณากรอกเลขรหัสประจำบ้าน";
    if (!formData.firstNameEng) newErrors.firstNameEng = "กรุณากรอกชื่อภาษาอังกฤษ";
    if (!formData.lastNameEng) newErrors.lastNameEng = "กรุณากรอกนามสกุลภาษาอังกฤษ";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStepTwo = () => {
    const newErrors = {};
    if (!formData.school) newErrors.school = "กรุณากรอกชื่อสถานศึกษา";
    if (!formData.previousSchoolEn) newErrors.previousSchoolEn = "กรุณากรอกชื่อสถานศึกษาเดิม (ภาษาอังกฤษ)";
    if (!formData.provinceSchool) newErrors.provinceSchool = "กรุณาเลือกจังหวัด";
    if (!formData.stuNumid) newErrors.stuNumid = "กรุณากรอกรหัสประจำตัวนักเรียน";
    if (!formData.typeEdu) newErrors.typeEdu = "กรุณาเลือกประเภทสถานศึกษา";
    if (!formData.gpa) newErrors.gpa = "กรุณากรอกผลการเรียนเฉลี่ย";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStepThree = () => {
    const newErrors = {};

    // บิดา
    if (!formData.prefixFa) newErrors.prefixFa = "กรุณาเลือกคำนำหน้าบิดา";
    if (!formData.statusFa) newErrors.statusFa = "กรุณาเลือกสถานภาพบิดา";
    if (!formData.FaName) newErrors.FaName = "กรุณากรอกชื่อบิดา";
    if (!formData.FaLname) newErrors.FaLname = "กรุณากรอกนามสกุลบิดา";
    if (!formData.FaNameEng) newErrors.FaNameEng = "กรุณากรอกชื่อบิดา (ภาษาอังกฤษ)";
    if (!formData.FaLnameEng) newErrors.FaLnameEng = "กรุณากรอกนามสกุลบิดา (ภาษาอังกฤษ)";
    if (!formData.disabilityFa) newErrors.disabilityFa = "กรุณาเลือกความพิการของบิดา";
    if (!formData.occupationFa) newErrors.occupationFa = "กรุณาเลือกอาชีพบิดา";
    if (!formData.incomeFa || isNaN(formData.incomeFa) || parseInt(formData.incomeFa) < 0) newErrors.incomeFa = "กรุณากรอกรายได้บิดา";
    if (!formData.telFa || formData.telFa.length < 9) newErrors.telFa = "กรุณากรอกเบอร์โทรศัพท์บิดาให้ถูกต้อง";

    // มารดา
    if (!formData.prefixMa) newErrors.prefixMa = "กรุณาเลือกคำนำหน้านมารดา";
    if (!formData.statusMa) newErrors.statusMa = "กรุณาเลือกสถานภาพมารดา";
    if (!formData.MaName) newErrors.MaName = "กรุณากรอกชื่อมารดา";
    if (!formData.MaLname) newErrors.MaLname = "กรุณากรอกนามสกุลมารดา";
    if (!formData.MaNameEng) newErrors.MaNameEng = "กรุณากรอกชื่อมารดา (ภาษาอังกฤษ)";
    if (!formData.MaLnameEng) newErrors.MaLnameEng = "กรุณากรอกนามสกุลมารดา (ภาษาอังกฤษ)";
    if (!formData.disabilityMa) newErrors.disabilityMa = "กรุณาเลือกความพิการของมารดา";
    if (!formData.occupationMa) newErrors.occupationMa = "กรุณาเลือกอาชีพมารดา";
    if (!formData.incomeMa || isNaN(formData.incomeMa) || parseInt(formData.incomeMa) < 0) newErrors.incomeMa = "กรุณากรอกรายได้มารดา";
    if (!formData.telMa || formData.telMa.length < 9) newErrors.telMa = "กรุณากรอกเบอร์โทรศัพท์มารดาให้ถูกต้อง";

    // ที่อยู่บิดามารดา
    if (!formData.parentStatus) newErrors.parentStatus = "กรุณาเลือกสถานภาพ";
    if (!formData.addressParent) newErrors.addressParent = "กรุณากรอกที่อยู่ตามทะเบียนบ้าน";
    if (!formData.mooParent) newErrors.mooParent = "กรุณากรอกหมู่ที่";
    if (!formData.mooBanParent) newErrors.mooBanParent = "กรุณากรอกหมู่บ้าน";
    if (!formData.soiParent) newErrors.soiParent = "กรุณากรอกซอย";
    if (!formData.roadParent) newErrors.roadParent = "กรุณากรอกถนน";
    if (!formData.parentProvince) newErrors.parentProvince = "กรุณาเลือกจังหวัด";
    if (!formData.parentAmphure) newErrors.parentAmphure = "กรุณาเลือกอำเภอ";
    if (!formData.parentTambon) newErrors.parentTambon = "กรุณาเลือกตำบล";
    if (!formData.parentZipcode) newErrors.parentZipcode = "กรุณากรอกรหัสไปรษณีย์";
    if (!formData.homeIDParent) newErrors.homeIDParent = "กรุณากรอกเลขประจำบ้าน";

    // ผู้ปกครอง
    if (!formData.prefixGuardian) newErrors.prefixGuardian = "กรุณาเลือกคำนำหน้าผู้ปกครอง";
    if (!formData.nameGuardian) newErrors.nameGuardian = "กรุณากรอกชื่อผู้ปกครอง";
    if (!formData.lnameGuardian) newErrors.lnameGuardian = "กรุณากรอกนามสกุลผู้ปกครอง";
    if (!formData.relationshipGuardian) newErrors.relationshipGuardian = "กรุณาเลือกความสัมพันธ์กับนักเรียน";
    if (!formData.occupationGuardian) newErrors.occupationGuardian = "กรุณาเลือกอาชีพผู้ปกครอง";
    if (!formData.incomeGuardian || isNaN(formData.incomeGuardian) || parseInt(formData.incomeGuardian) < 0) newErrors.incomeGuardian = "กรุณากรอกรายได้ผู้ปกครอง";
    if (!formData.telGuardian || formData.telGuardian.length < 9) newErrors.telGuardian = "กรุณากรอกเบอร์โทรศัพท์ผู้ปกครองให้ถูกต้อง";

    // ที่อยู่ผู้ปกครอง
    if (!formData.addressGuardian) newErrors.addressGuardian = "กรุณากรอกที่อยู่ตามทะเบียนบ้าน";
    if (!formData.mooGuardian) newErrors.mooGuardian = "กรุณากรอกหมู่ที่";
    if (!formData.mooBanGuardian) newErrors.mooBanGuardian = "กรุณากรอกหมู่บ้าน";
    if (!formData.soiGuardian) newErrors.soiGuardian = "กรุณากรอกซอย";
    if (!formData.roadGuardian) newErrors.roadGuardian = "กรุณากรอกถนน";
    if (!formData.guardianProvince) newErrors.guardianProvince = "กรุณาเลือกจังหวัด";
    if (!formData.guardianAmphure) newErrors.guardianAmphure = "กรุณาเลือกอำเภอ";
    if (!formData.guardianTambon) newErrors.guardianTambon = "กรุณาเลือกตำบล";
    if (!formData.guardianZipcode) newErrors.guardianZipcode = "กรุณากรอกรหัสไปรษณีย์";
    if (!formData.homeIDGuardian) newErrors.homeIDGuardian = "กรุณากรอกเลขประจำบ้าน";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStepFour = () => {
    const newErrors = {};
    if (!formData.educationLevel) newErrors.educationLevel = "กรุณาเลือกระดับการศึกษา";
    if (!formData.semesterType) newErrors.semesterType = "กรุณาเลือกภาคการศึกษา";
    if (!formData.major) newErrors.major = "กรุณาเลือกประเภทวิชา";
    if (!formData.branch) newErrors.branch = "กรุณาเลือกสาขา";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && validateStepOne()) {
      setStep(step + 1);
    } else if (step === 2 && validateStepTwo()) {
      setStep(step + 1);
    } else if (step === 3 && validateStepThree()) {
      setStep(step + 1);
    } else if (step === 4 && validateStepFour()) {
      setStep(step + 1);
    } else if (step === steps.length) {
      // Logic for final submission
      console.log("Submitting form data:", formData);
      // Navigate to the Linescan page after submission
      navigate("/Linescan");
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const goToStep = (targetStep) => {
    setStep(targetStep);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Stepone
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 2:
        return (
          <Steptwo
            formData={formData}
            handleChange={handleChange}
            setFormData={setFormData}
            errors={errors}
          />
        );
      case 3:
        return (
          <Stepthree
            formData={formData}
            handleChange={handleChange}
            setFormData={setFormData}
            errors={errors}
          />
        );
      case 4:
        return (
          <Stepfour
            formData={formData}
            handleChange={handleChange}
            setFormData={setFormData}
            errors={errors}
          />
        );
      case 5:
        return <Stepfive formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex bg-[#FFF3E0] min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-10 lg:p-12">
          <h1 className="text-3xl font-bold mb-6 text-blue-950 text-center">สมัครเรียน</h1>
          <div className="flex justify-center items-center mb-8">
            {steps.map((label, index) => (
              <div
                key={index}
                className="flex-1 px-2 cursor-pointer text-center"
                onClick={() => goToStep(index + 1)}
              >
                <div
                  className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2 text-lg font-semibold
                    ${step === index + 1
                      ? "bg-yellow-400 text-black shadow-md"
                      : step > index + 1
                      ? "bg-blue-900 text-white"
                      : "bg-gray-300 text-gray-700"
                    }`}
                >
                  {index + 1}
                </div>
                <p className={`text-sm ${step === index + 1 ? "font-bold text-blue-950" : "text-gray-600"}`}>
                  {label}
                </p>
              </div>
            ))}
          </div>
          {renderStep()}
          <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="px-6 py-2 bg-gray-200 text-blue-950 font-semibold rounded-lg hover:bg-gray-300 disabled:opacity-50 transition-colors duration-200"
            >
              ⭠ ย้อนกลับ
            </button>
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-blue-950 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-blue-950 transition-colors duration-200"
            >
              {step === steps.length ? "ยืนยันการสมัคร" : "ถัดไป ⭢"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datastu;