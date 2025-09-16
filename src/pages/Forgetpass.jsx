import Sidebar from "../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Forgetpass() {
  const navigate = useNavigate();
  const [idCard, setIdCard] = useState("");
  const [passwords, setPasswords] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

   const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!idCard.trim()) {
      newErrors.idCard = "กรุณากรอกรหัสบัตรประชาชน";
    }
    if (!password.trim()) {
      newErrors.password = "กรุณากรอกรหัสผ่านใหม่";
    }
    if (!passwords.trim()) {
      newErrors.passwords = "กรุณายืนยันรหัสผ่านใหม่";
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

            <div className="ml-115 ">
                {/* กล่องเหลือง */}
                <div className="bg-yellow-400 w-[690px] h-[510px] -mt-157 rounded-3xl relative z-10">
                    <div className="bg-blue-950 w-[490px] h-[90px] ml-25 rounded-b-2xl">
                        <p className="text-white text-[40px] font-bold text-center pt-4">ลืมรหัสผ่าน</p>
                    </div>
                    <div className="bg-amber-100 w-[400px] h-[70px] mt-5 mx-auto rounded-xl items-center">
                        <div className="ml-3 flex gap-5 items-center pt-3 text-blue-950">
                            <i class="fa-solid fa-circle-exclamation icon-warning"></i>
                            <h4 class="data11"><b>กรุณากรอกรหัสบัตรประชาชนที่ใช้ในการสมัคร<br/>เพื่อใช้สำหรับการตั้งรหัสผ่านใหม่</b></h4>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                    <div className="w-[450px] mx-auto mt-3">
                        <label className="block text-blue-950 font-bold mb-1">
                        รหัสบัตรประชาชน
                        </label>
                        <input type="text" value={idCard} onChange={(e) => setIdCard(e.target.value)} placeholder={errors.idCard ? errors.idCard : ""} className={`w-full h-10 px-3 rounded-xl mb-2 outline-none bg-white
                        ${errors.idCard ? "border-2 border-red-500 placeholder-red-500" : "border border-white"}`}/>

                        <label className="block text-blue-950 font-bold mb-1 ">
                        รหัสผ่านใหม่
                        </label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={errors.password ? errors.password : ""} className={`w-full h-10 px-3 rounded-xl mb-2 outline-none  bg-white  
                        ${errors.password ? "border-2 border-red-500 placeholder-red-500" : "border border-gray-300"}`}/>

                        <label className="block text-blue-950 font-bold mb-1 ">
                        ยืนยันรหัสผ่านใหม่
                        </label>
                        <input type="password" value={passwords} onChange={(e) => setPasswords(e.target.value)} placeholder={errors.passwords ? errors.passwords : ""} className={`w-full h-10 px-3 rounded-xl mb-2 outline-none  bg-white  
                        ${errors.password ? "border-2 border-red-500 placeholder-red-500" : "border border-gray-300"}`}/>

                        <div className="flex justify-center mt-5 gap-10">
                            <button type="submit" className="bg-blue-950 text-white font-bold px-6 py-2 rounded-xl w-[170px] hover:bg-blue-900 text-[20px]">
                            <Link to = "/Login">
                            ย้อนกลับ
                            </Link>
                            </button>
                            <button type="submit" className="bg-blue-950 text-white font-bold px-6 py-2 rounded-xl w-[170px] hover:bg-blue-900 text-[20px]">
                            สมัครสมาชิก
                            </button>
                        </div>
                    </div>
                    </form>
                </div>


            </div>
            
    </>
  );
}

export default Forgetpass;