import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [idCard, setIdCard] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Check for specific ID and password
    if (idCard === "1234567890123" && password === "admin1234") {
      navigate("/Homeadmin"); 
    } else {
      // Check for empty fields if the login is incorrect
      if (!idCard.trim()) {
        newErrors.idCard = "กรุณากรอกรหัสบัตรประชาชน";
      }
      if (!password.trim()) {
        newErrors.password = "กรุณากรอกรหัสผ่าน";
      }
      setErrors(newErrors);

      // Navigate to the regular home page if the credentials don't match
      if (Object.keys(newErrors).length === 0) {
        navigate("/Home"); 
      }
    }
  };

  return (
    <>
      <Sidebar />
      {/* กรอบล่าง */}
      <div className="fixed bottom-0 left-0 w-full">
        <img className="kroplang w-full" src="./image/กรอบล่าง.png" alt="กรอบล่าง" />
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

      <div className="absolute -top-7 items-center flex">
        {/* ข้อความ */}
        <div className="text-[40px] text-blue-950 ml-60">
          <h1 className="font-bold text-center">วิทยาลัยอาชีวศึกษาชลบุรี</h1>
          <h1 className="font-bold">Chonburi Vocational College</h1>
        </div>

        {/* กรอบสีน้ำเงิน */}
        <div className="justify-center items-center min-h-screen">
          {/* Tabs ด้านบน */}
          <div className="ml-50">
            <div className="flex -z-10 mt-55">
              <div className="w-[230px] h-17 bg-blue-950 rounded-t-2xl pt-3.5 justify-center text-yellow-400 font-bold text-lg flex text-[20px]">
                เข้าสู่ระบบ
              </div>
              <Link to="/Member">
                <div className="w-[230px] h-17 bg-yellow-400 rounded-t-2xl pt-3.5 justify-center text-blue-950 font-bold text-lg hover:bg-yellow-200 flex text-[20px]">
                  สมัครสมาชิก
                </div>
              </Link>
            </div>

            {/* ฟอร์ม */}
            <form onSubmit={handleSubmit}>
              <div className="w-[460px] bg-blue-950 rounded-b-2xl shadow-xl relative -mt-3">
                <div className="p-6">
                  <label className="block text-yellow-400 font-bold mb-1">
                    รหัสบัตรประชาชน
                  </label>
                  <input
                    type="text"
                    value={idCard}
                    onChange={(e) => setIdCard(e.target.value)}
                    placeholder={errors.idCard ? errors.idCard : ""}
                    className={`w-full h-10 px-3 rounded-xl mb-2 outline-none bg-white
                        ${errors.idCard ? "border-2 border-red-500 placeholder-red-500" : "border border-gray-300"}`}
                  />

                  <label className="block text-yellow-400 font-bold mb-1 ">
                    รหัสผ่าน
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={errors.password ? errors.password : ""}
                    className={`w-full h-10 px-3 rounded-xl mb-2 outline-none bg-white  
                        ${errors.password ? "border-2 border-red-500 placeholder-red-500" : "border border-gray-300"}`}
                  />

                  <Link to="/Forgetpass">
                    <div className="text-yellow-400 font-bold text-right text-sm mb-4 cursor-pointer hover:text-yellow-200">
                      ลืมรหัสผ่าน
                    </div>
                  </Link>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-yellow-400 text-blue-950 font-bold px-6 py-2 rounded-xl hover:bg-yellow-200"
                    >
                      เข้าสู่ระบบ
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;