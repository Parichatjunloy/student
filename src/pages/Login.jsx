import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/home.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("กรุณากรอกอีเมลและรหัสผ่าน");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ เก็บข้อมูลสำคัญ
        localStorage.setItem("user_id", data.user_id);
        localStorage.setItem("role", data.role);

        alert("เข้าสู่ระบบสำเร็จ 🎉");

        if (data.role === "admin") {
          navigate("/homeadmin");
        } else {
          navigate("/home");
        }

      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error(error);
      alert("เกิดข้อผิดพลาด");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      <img className="h-16 object-contain" src="./image/LOGO.png" alt="" />
      <p className="mt-3 text-3xl font-bold text-purple-900">
        Yuem Khuen Nangsue
      </p>

      <div className="bg-white w-full max-w-sm mt-6 p-6 rounded-2xl shadow-lg">
        <p className="text-xl font-bold text-purple-900 mb-4">เข้าสู่ระบบ</p>

        <p className="text-left pl-2 text-purple-900 font-bold">อีเมล</p>
        <input
          type="email"
          placeholder="กรอกอีเมล"
          className="w-full h-11 px-4 mt-2 border rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="text-left pl-2 mt-3 text-purple-900 font-bold">รหัสผ่าน</p>
        <input
          type="password"
          placeholder="กรอกรหัสผ่าน"
          className="w-full h-11 px-4 mt-2 border rounded-xl"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full h-11 px-4 mt-6 bg-purple-600 rounded-xl text-white font-bold"
        >
          เข้าสู่ระบบ
        </button>

        <p className="mt-3 font-bold text-purple-800 text-base">
          <Link to="/member">สมัครสมาชิก</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
