import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/home.css";

function Yuem() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [search, setSearch] = useState("");

  // ✅ โหลดจาก database
  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (!userId) return;

    fetch(`http://127.0.0.1:5000/user-borrow/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        const activeBooks = data.filter(
          (book) => book.status === "borrowed"
        );
        setBorrowedBooks(activeBooks);
      })
      .catch((err) => console.error(err));
  }, []);

  // คำนวณวันครบกำหนด (14 วัน)
  const getDueDate = (borrowDate) => {
    const date = new Date(borrowDate);
    date.setDate(date.getDate() + 14);
    return date;
  };

  // คำนวณวันคงเหลือ
  const getDaysLeft = (borrowDate) => {
    const due = getDueDate(borrowDate);
    const today = new Date();
    const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
    return diff;
  };

  const filteredBooks = borrowedBooks.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
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
            src="./image/yuem.png"
            alt=""
          />
          รายการหนังสือที่ยืม
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
            placeholder="ค้นหาหนังสือ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-gray-600"
          />
        </div>

        {/* ===== Book List ===== */}
        <div className="mt-6 space-y-5">
          {filteredBooks.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              ยังไม่มีหนังสือที่กำลังยืม
            </div>
          ) : (
            filteredBooks.map((book) => {
              const daysLeft = getDaysLeft(book.borrow_date);
              const percent = Math.max(
                0,
                Math.min(100, (daysLeft / 14) * 100)
              );

              let barColor = "bg-green-500";
              if (daysLeft <= 7) barColor = "bg-yellow-500";
              if (daysLeft <= 3) barColor = "bg-orange-500";
              if (daysLeft <= 0) barColor = "bg-red-600";

              return (
                <div
                  key={book.id}
                  className="bg-white rounded-2xl shadow-md p-4 flex gap-4"
                >
                  {/* ===== รูปหนังสือ ===== */}
                  <img
                    src={
                      book.image
                        ? `http://127.0.0.1:5000${
                            book.image.startsWith("/")
                              ? book.image
                              : "/" + book.image
                          }`
                        : "/image/noimage.png"
                    }
                    alt={book.title}
                    className="w-20 h-28 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <p className="font-bold text-purple-900 text-lg">
                      {book.title}
                    </p>

                    <p className="text-sm mt-2">
                      วันที่ยืม:{" "}
                      {new Date(book.borrow_date).toLocaleDateString("th-TH")}
                    </p>

                    <p className="text-sm font-semibold">
                      ครบกำหนดคืน:{" "}
                      {getDueDate(book.borrow_date).toLocaleDateString("th-TH")}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 h-3 rounded-full">
                        <div
                          className={`${barColor} h-3 rounded-full transition-all duration-500`}
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>

                      <p
                        className={`text-xs mt-1 ${
                          daysLeft <= 0
                            ? "text-red-600 font-bold"
                            : "text-gray-600"
                        }`}
                      >
                        {daysLeft > 0
                          ? `เหลืออีก ${daysLeft} วัน`
                          : `เกินกำหนด ${Math.abs(daysLeft)} วัน`}
                      </p>
                    </div>

                    <span className="inline-block mt-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">
                      กำลังยืมอยู่
                    </span>
                  </div>
                </div>
              );
            })
          )}
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
              <img className="h-8 object-contain" src="./image/book.png" alt="" />
              <p className="text-xs mt-1 text-purple-800">หนังสือ</p>
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
              <img className="h-8 object-contain" src="./image/yuem.png" alt="" />
              <p className="text-xs mt-1 text-purple-800">ยืมหนังสือ</p>
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
              <img className="h-8 object-contain" src="./image/khuen.png" alt="" />
              <p className="text-xs mt-1 text-purple-800">คืนหนังสือ</p>
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
              <img className="h-8 object-contain" src="./image/pawat.png" alt="" />
              <p className="text-xs mt-1 text-purple-800">ประวัติ</p>
            </NavLink>
          </li>

        </ul>
      </div>

    </div>
  );
}

export default Yuem;
