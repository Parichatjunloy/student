import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Adminphawad() {

  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    const res = await fetch("http://localhost:5000/borrow-history");
    const data = await res.json();
    setHistory(data);
  };

  const filteredHistory = history.filter(item =>
    item.user_name.toLowerCase().includes(search.toLowerCase()) ||
    item.book_title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col pb-24 bg-gray-50">

      {/* ===== HEADER ===== */}
      <div className="w-full bg-purple-600 shadow-md">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="h-10" src="./image/LOGO.png" alt="" />
            <p className="text-white font-bold text-xl">Yuem Khuen Nangsue</p>
          </div>
          <Link to="/Login">
            <img className="h-8" src="./image/logout.png" alt="" />
          </Link>
        </div>
      </div>

      <div className="flex-1 px-4">

        <p className="flex items-center gap-3 mt-5 text-lg font-bold text-purple-900">
          <img className="h-8" src="./image/pawat.png" alt="" />
          ประวัติการยืม
        </p>

        {/* SEARCH */}
        <div className="bg-white w-full h-11 rounded-2xl mt-5 flex items-center shadow-md px-4">
          <img className="h-5 mr-3" src="./image/search.png" alt="" />
          <input
            type="text"
            placeholder="ค้นหาชื่อสมาชิก หรือ หนังสือ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        {/* HISTORY LIST */}
        <div className="mt-5 space-y-4">

          {filteredHistory.length === 0 && (
            <p className="text-center text-gray-500">ไม่มีข้อมูล</p>
          )}

          {filteredHistory.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-4"
            >
              <p className="font-bold text-purple-900">
                📚 หนังสือ: {item.title}
              </p>

              <p className="text-sm">
                👤 สมาชิก: {item.user_name}
              </p>

              <p className="text-sm">
                📧 {item.email}
              </p>

              <p className="text-sm">
                📅 วันที่ยืม: {new Date(item.borrow_date).toLocaleDateString()}
              </p>

              <p className="text-sm">
                📅 วันที่คืน: {
                  item.return_date
                    ? new Date(item.return_date).toLocaleDateString()
                    : "ยังไม่คืน"
                }
              </p>

              <p className={`text-sm font-bold ${
                item.status === "returned"
                  ? "text-green-600"
                  : "text-red-500"
              }`}>
                สถานะ: {item.status === "returned" ? "คืนแล้ว" : "กำลังยืม"}
              </p>
            </div>
          ))}

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

export default Adminphawad;
