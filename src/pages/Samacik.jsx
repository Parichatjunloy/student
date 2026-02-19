import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/home.css";

function Samacik() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col pb-24 m-0 p-0">

      {/* ===== Header ===== */}
      <div className="w-full bg-purple-600 shadow-md">
        <div className="max-w-1xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="h-10 sm:h-12 md:h-14 object-contain"
              src="./image/LOGO.png"
              alt="Logo"
            />
            <p className="text-white font-bold text-lg sm:text-xl md:text-2xl">
              Yuem Khuen Nangsue
            </p>
          </div>

          <Link to="/Login">
            <img
              className="h-7 md:h-8 object-contain cursor-pointer"
              src="./image/logout.png"
              alt="Logout"
            />
          </Link>
        </div>
      </div>

      {/* ===== Content ===== */}
      <div className="flex-1 max-w-1xl mx-auto w-full px-4">

        <p className="flex items-center gap-3 mt-5 text-lg sm:text-xl font-bold text-purple-900">
          <img
            className="h-7 sm:h-9 object-contain"
            src="./image/user.png"
            alt=""
          />
          รายชื่อสมาชิกในระบบ
        </p>

        {/* ===== Search ===== */}
        <div className="bg-white w-full h-11 rounded-2xl mt-5 flex items-center shadow-md px-4">
          <img
            className="h-5 object-contain mr-3"
            src="./image/search.png"
            alt=""
          />
          <input
            type="text"
            placeholder="ค้นหาชื่อหรืออีเมล..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-gray-600"
          />
        </div>

        {/* ===== User List ===== */}
        <div className="mt-6 space-y-4">
          {filteredUsers.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              ไม่พบสมาชิก
            </div>
          ) : (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-2xl shadow-md p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-bold text-purple-900 text-lg">
                    {user.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {user.email}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    user.role === "admin"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {user.role}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ===== Bottom Bar (NavLink Version) ===== */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md h-20 z-40">
        <ul className="flex justify-around items-center h-full text-center">

          <li className="w-full h-full">
            <NavLink
              to="/Adminhome"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full ${
                  isActive ? "bg-purple-200" : "hover:bg-purple-200"
                }`
              }
            >
              <img className="h-7 sm:h-8 md:h-10 object-contain" src="./image/book.png" alt="" />
              <p className="text-xs sm:text-sm mt-1 text-purple-800">
                หนังสือ
              </p>
            </NavLink>
          </li>

          <li className="w-full h-full">
            <NavLink
              to="/Adminphawad"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full ${
                  isActive ? "bg-purple-200" : "hover:bg-purple-200"
                }`
              }
            >
              <img className="h-7 sm:h-8 md:h-10 object-contain" src="./image/pawat.png" alt="" />
              <p className="text-xs sm:text-sm mt-1 text-purple-800">
                ประวัติการยืม
              </p>
            </NavLink>
          </li>

          <li className="w-full h-full">
            <NavLink
              to="/Samacik"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full ${
                  isActive ? "bg-purple-200" : "hover:bg-purple-200"
                }`
              }
            >
              <img className="h-7 sm:h-8 md:h-10 object-contain" src="./image/member.png" alt="" />
              <p className="text-xs sm:text-sm mt-1 text-purple-800">
                สมาชิก
              </p>
            </NavLink>
          </li>

        </ul>
      </div>

    </div>
  );
}

export default Samacik;
