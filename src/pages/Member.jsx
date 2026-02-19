import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/home.css";

function Member() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async () => {
    setErrorMessage("");

    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage("กรอกข้อมูลให้ครบ");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("รหัสผ่านไม่ตรงกัน");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert("สมัครสมาชิกสำเร็จ 🎉");
        navigate("/login");
      } else {
        setErrorMessage(data.message);
      }

    } catch (error) {
      console.error(error);
      setErrorMessage("เกิดข้อผิดพลาด กรุณาลองใหม่");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">

      <Link to="/login" className="absolute top-6 left-6">
        <img className="h-6 object-contain" src="./image/left.png" alt="ย้อนกลับ" />
      </Link>

      <img className="h-20 object-contain" src="./image/LOGO.png" alt="" />
      <p className="mt-3 text-3xl font-bold text-purple-900">สมัครสมาชิก</p>
      <p className="mt-2 text-purple-700 text-sm">สร้างบัญชีเพื่อใช้งานระบบ</p>

      <div className="bg-white w-full max-w-sm mt-6 p-6 rounded-2xl shadow-lg">

        <p className="text-left pl-2 text-purple-900 font-bold">ชื่อ-นามสกุล</p>
        <input
          type="text"
          placeholder="กรอกชื่อ-นามสกุล"
          className="w-full h-11 px-4 mt-2 border rounded-xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p className="text-left pl-2 mt-3 text-purple-900 font-bold">อีเมล</p>
        <input
          type="email"
          placeholder="กรอกอีเมล"
          className={`w-full h-11 px-4 mt-2 border rounded-xl ${
            errorMessage.includes("อีเมล") ? "border-red-500" : ""
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* 🔴 แจ้งเตือน */}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2 text-left">
            {errorMessage}
          </p>
        )}

        <p className="text-left pl-2 mt-3 text-purple-900 font-bold">รหัสผ่าน</p>
        <input
          type="password"
          placeholder="กรอกรหัสผ่าน"
          className="w-full h-11 px-4 mt-2 border rounded-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="text-left pl-2 mt-3 text-purple-900 font-bold">ยืนยันรหัสผ่าน</p>
        <input
          type="password"
          placeholder="กรอกรหัสผ่าน"
          className="w-full h-11 px-4 mt-2 border rounded-xl"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full h-11 px-4 mt-6 bg-purple-600 rounded-xl text-white font-bold hover:bg-purple-700 transition"
        >
          สมัครสมาชิก
        </button>

      </div>
    </div>
  );
}

export default Member;
