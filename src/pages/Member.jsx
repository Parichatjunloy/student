import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Member() {
  const navigate = useNavigate();
  const [idCard, setIdCard] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [birthday, setBirthday] = useState("");
  const [emails, setEmails] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!idCard.trim()) {
      newErrors.idCard = "กรุณากรอกรหัสบัตรประชาชน";
    }
    if (!fname.trim()) {
      newErrors.fname = "กรุณากรอกชื่อ";
    }
    if (!lname.trim()) {
      newErrors.lname = "กรุณากรอกนามสกุล";
    }
    if (!phonenumber.trim()) {
      newErrors.phonenumber = "กรุณากรอกเบอร์โทร";
    }
    if (!birthday.trim()) {
      newErrors.birthday = "กรุณากรอกวัน/เดือน/ปีเกิด";
    }
    if (!emails.trim()) {
      newErrors.emails = "กรุณากรอกอีเมล";
    }
    if (!password.trim()) {
      newErrors.password = "กรุณากรอกรหัสผ่าน";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
    navigate("/Login"); // ใช้ react-router แทน window.location.href
    }
  };
  return (
    <>
    <Sidebar />
        {/* กรอบล่าง */}
        <div className="fixed bottom-0 left-0 w-full">
            <img className="kroplang w-full" src="./image/กรอบล่าง.png" alt="กรอบล่าง"/>
        </div>
        {/* กรอบบน */}
        <div className="fixed top-0 right-0 w-150">
            <img className="kropbon w-full" src="./image/กรอบบน.png" alt="กรอบบน" />
        </div>
        {/* ใบไม้ต่างๆ */}
        <div className="fixed top-0 right-100 w-30">
            <img className="leaf w-full" src="./image/ใบไม้.png" alt="ใบไม้" />
        </div>
        <div className="fixed bottom-10 right-0 w-30">
            <img className="leaf1 w-full" src="./image/ใบไม้(1).png" alt="ใบไม้1" />
        </div>
        <div className="fixed bottom-0 left-40 w-30 ">
            <img className="leaf2 w-full" src="./image/ใบไม้(2).png" alt="ใบไม้2" />
        </div>

        <div className="absolute -top-0 items-center flex">
            <div className="text-[40px] text-blue-950 ml-60 mt-9">
                <h1 className="font-bold text-center">วิทยาลัยอาชีวศึกษาชลบุรี</h1>
                <h1 className="font-bold">Chonburi Vocational College</h1>
            </div>
            
            {/* Tabs ด้านบน */}
                <div className="ml-50">
                        <div className="flex -z-10 mt-25">
                        <Link to = "/Login">
                        <div className="w-[230px] h-17 bg-blue-950 rounded-t-2xl pt-3.5 justify-center text-yellow-400 font-bold text-lg flex hover:bg-blue-900 text-[20px]">
                            เข้าสู่ระบบ
                        </div>
                        </Link>
                        <div className="w-[230px] h-17 bg-yellow-400 rounded-t-2xl pt-3.5 justify-center text-blue-950 font-bold text-lg flex text-[20px]">
                        สมัครสมาชิก
                        </div>
                        </div>
                
                {/* ฟอร์ม */}
                        <form onSubmit={handleSubmit}>
                            <div className="w-[460px] h-[490px] bg-yellow-400 rounded-b-3xl shadow-xl relative -mt-3">
                                <div className="p-6">
                                    <label className="block text-blue-950 font-bold mb-1">
                                        รหัสบัตรประชาชน
                                    </label>
                                    <input type="text" value={idCard} onChange={(e) => setIdCard(e.target.value)} placeholder={errors.idCard ? errors.idCard : ""} className={`w-full h-10 px-3 rounded-xl mb-2 outline-none bg-white
                                    ${errors.idCard ? "border-2 border-red-500 placeholder-red-500" : "border border-white"}`}/>

                                    <div className="flex gap-4">
                                        <div className="flex flex-col w-1/2">
                                            <label className="block text-blue-950 font-bold mb-1 ">
                                            ชื่อ
                                            </label>
                                            <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} placeholder={errors.fname ? errors.fname : ""} className={`w-full h-10 px-3 rounded-xl mb-2 outline-none  bg-white  
                                            ${errors.fname ? "border-2 border-red-500 placeholder-red-500" : "border border-white"}`}/>
                                        </div>
                                    
                                        <div className="flex flex-col w-1/2">
                                            <label className="block text-blue-950 font-bold mb-1 ">
                                            นามสกุล
                                            </label>
                                            <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} placeholder={errors.lname ? errors.lname : ""} className={`w-full h-10 px-3 rounded-xl mb-2 outline-none  bg-white  
                                            ${errors.lname ? "border-2 border-red-500 placeholder-red-500" : "border border-white"}`}/>
                                        </div>
                                    </div> 

                                    <div className="flex gap-4">
                                        <div className="flex flex-col w-1/2">
                                            <label className="block text-blue-950 font-bold mb-1 ">
                                            เบอร์โทร
                                            </label>
                                            <input type="tel" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder={errors.phonenumber ? errors.phonenumber : ""} className={`w-full h-10 px-3 rounded-xl mb-2 outline-none  bg-white  
                                            ${errors.phonenumber ? "border-2 border-red-500 placeholder-red-500" : "border border-white"}`}/>
                                        </div>
                                    
                                        <div className="flex flex-col w-1/2">
                                            <label className="block text-blue-950 font-bold mb-1 ">
                                            วัน/เดือน/ปีเกิด
                                            </label>
                                            <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} placeholder={errors.birthday ? errors.birthday : ""} className={`w-full h-10 px-3 rounded-xl mb-2 outline-none  bg-white  
                                            ${errors.birthday ? "border-2 border-red-500 placeholder-red-500" : "border border-white"}`}/>
                                        </div>
                                    </div>   

                                            <label className="block text-blue-950 font-bold mb-1">
                                            อีเมล
                                            </label>
                                            <input type="email" value={emails} onChange={(e) => setEmails(e.target.value)} placeholder={errors.emails ? errors.emails : ""} className={`w-full h-10 px-3 rounded-xl mb-2 outline-none bg-white
                                            ${errors.idCard ? "border-2 border-red-500 placeholder-red-500" : "border border-white"}`}/>

                                            <label className="block text-blue-950 font-bold mb-1 ">
                                            รหัสผ่าน
                                            </label>
                                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={errors.password ? errors.password : ""} className={`w-full h-10 px-3 rounded-xl mb-2 outline-none  bg-white  
                                            ${errors.password ? "border-2 border-red-500 placeholder-red-500" : "border border-gray-300"}`}/>


                                        <div className="flex justify-center mt-5">
                                            <button type="submit" className="bg-blue-950 text-white font-bold px-6 py-2 rounded-xl hover:bg-blue-900 text-[20px]">
                                            สมัครสมาชิก
                                            </button>
                                        </div>
                                </div>
                            </div>
                        </form>
                </div>
        </div>
         
      
    </>
  );
}

export default Member;