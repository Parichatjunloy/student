import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/home.css";

function Phawad() {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const userId = localStorage.getItem("user_id");

        if (!userId) {
          console.log("ไม่พบ user_id");
          return;
        }

        const res = await fetch(
          `http://localhost:5000/user-borrow/${userId}`
        );

        if (!res.ok) {
          console.log("โหลดข้อมูลไม่สำเร็จ");
          return;
        }

        const data = await res.json();
        setHistory(data);

      } catch (error) {
        console.error("Error loading history:", error);
      }
    };

    loadHistory();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const filteredHistory = history.filter((book) =>
    book.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col pb-20">

      {/* ===== Header ===== */}
      <div className="w-full bg-purple-600 shadow-md">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="h-10 object-contain"
              src="/image/LOGO.png"
              alt="Logo"
            />
            <p className="text-white font-bold text-xl">
              Yuem Khuen Nangsue
            </p>
          </div>
          <Link to="/Login">
            <img
              className="h-8 object-contain cursor-pointer"
              src="/image/logout.png"
              alt="Logout"
            />
          </Link>
        </div>
      </div>

      {/* ===== Content ===== */}
      <div className="flex-1 px-4">

        <p className="flex items-center gap-3 mt-5 text-lg font-bold text-purple-900">
          <img className="h-8 object-contain" src="/image/pawat.png" alt="" />
          ประวัติการยืม - คืน
        </p>

        {/* ===== Search ===== */}
        <div className="bg-white w-full h-11 rounded-2xl mt-5 flex items-center shadow-md px-4">
          <img
            className="h-5 object-contain mr-3"
            src="/image/search.png"
            alt=""
          />
          <input
            type="text"
            placeholder="ค้นหาหนังสือในประวัติ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-gray-600"
          />
        </div>

        {/* ===== History List ===== */}
        {filteredHistory.length === 0 && (
          <p className="mt-10 text-center text-gray-500">
            ไม่พบข้อมูล
          </p>
        )}

        <div className="mt-5 space-y-5">
          {filteredHistory.map((book) => (
            <div
              key={book.id}
              className="bg-white w-full rounded-2xl flex items-center shadow-md p-3"
            >
              <img
                className="h-24 object-contain"
                src={book.image}
                alt=""
              />

              <div className="flex flex-col ml-5 w-full">
                <p className="font-medium">{book.title}</p>

                <p className="text-xs pt-1.5">
                  วันที่ยืม: {formatDate(book.borrow_date)}
                </p>

                {book.return_date ? (
                  <p className="text-xs text-green-600">
                    วันที่คืน: {formatDate(book.return_date)}
                  </p>
                ) : (
                  <p className="text-xs text-red-600">
                    สถานะ: ยังไม่คืน
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md h-20 z-40">
        <ul className="flex justify-around items-center h-full text-center">

          <li className="w-full h-full">
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full ${
                  isActive ? "bg-purple-200" : "hover:bg-purple-200"
                }`
              }
            >
              <img className="h-8 object-contain" src="/image/book.png" alt="" />
              <p className="text-xs mt-1 text-purple-800">
                หนังสือ
              </p>
            </NavLink>
          </li>

          <li className="w-full h-full">
            <NavLink
              to="/Yuem"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full ${
                  isActive ? "bg-purple-200" : "hover:bg-purple-200"
                }`
              }
            >
              <img className="h-8 object-contain" src="/image/yuem.png" alt="" />
              <p className="text-xs mt-1 text-purple-800">
                ยืมหนังสือ
              </p>
            </NavLink>
          </li>

          <li className="w-full h-full">
            <NavLink
              to="/Khuen"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full ${
                  isActive ? "bg-purple-200" : "hover:bg-purple-200"
                }`
              }
            >
              <img className="h-8 object-contain" src="/image/khuen.png" alt="" />
              <p className="text-xs mt-1 text-purple-800">
                คืนหนังสือ
              </p>
            </NavLink>
          </li>

          <li className="w-full h-full">
            <NavLink
              to="/Phawad"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full ${
                  isActive ? "bg-purple-200" : "hover:bg-purple-200"
                }`
              }
            >
              <img className="h-8 object-contain" src="/image/pawat.png" alt="" />
              <p className="text-xs mt-1 text-purple-800">
                ประวัติ
              </p>
            </NavLink>
          </li>

        </ul>
      </div>

    </div>
  );
}

export default Phawad;
