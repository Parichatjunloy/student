import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/home.css";

function Khuen() {
  const [search, setSearch] = useState("");
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const userId = localStorage.getItem("user_id");

  /* ================= LOAD BORROWED BOOKS ================= */
  const loadBorrowedBooks = () => {
    if (!userId) return;

    fetch(`http://localhost:5000/user-borrow/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        const activeBooks = data.filter(
          (book) => book.status === "borrowed"
        );
        setBorrowedBooks(activeBooks);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadBorrowedBooks();
  }, []);

  /* ================= OPEN POPUP ================= */
  const handleOpenPopup = (book) => {
    setSelectedBook(book);
    setShowPopup(true);
  };

  /* ================= CONFIRM RETURN ================= */
  const handleConfirmReturn = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/return/${selectedBook.id}`,
        {
          method: "PUT",
        }
      );

      if (response.ok) {
        setShowPopup(false);
        loadBorrowedBooks(); // โหลดใหม่
      } else {
        alert("คืนไม่สำเร็จ");
      }
    } catch (error) {
      console.error(error);
      alert("เกิดข้อผิดพลาด");
    }
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
            src="./image/khuen.png"
            alt=""
          />
          รายการที่ต้องคืน
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

        {/* ===== List ===== */}
        <div className="mt-6 space-y-4">
          {filteredBooks.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              ไม่มีหนังสือที่ต้องคืน
            </div>
          ) : (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-2xl shadow-md p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-bold text-purple-900">
                    {book.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    วันที่ยืม:{" "}
                    {new Date(book.borrow_date).toLocaleDateString("th-TH")}
                  </p>
                </div>

                <button
                  onClick={() => handleOpenPopup(book)}
                  className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                >
                  คืนหนังสือ
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ===== Popup ===== */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-80 shadow-lg text-center">
            <p className="font-bold text-lg text-purple-900">
              ยืนยันการคืนหนังสือ
            </p>
            <p className="mt-3 text-gray-600">
              ต้องการคืน "{selectedBook?.title}" ใช่หรือไม่?
            </p>

            <div className="flex justify-center gap-4 mt-5">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-300 rounded-xl"
              >
                ยกเลิก
              </button>

              <button
                onClick={handleConfirmReturn}
                className="px-4 py-2 bg-purple-600 text-white rounded-xl"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== Bottom Bar ===== */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md h-20 z-40">
        <ul className="flex justify-around items-center h-full text-center">

          <li className="w-full h-full">
            <NavLink to="/Home"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full ${
                  isActive ? "bg-purple-200" : "hover:bg-purple-200"
                }`
              }>
              <img className="h-8" src="./image/book.png" alt="" />
              <p className="text-xs mt-1 text-purple-800">หนังสือ</p>
            </NavLink>
          </li>

          <li className="w-full h-full">
            <NavLink to="/Yuem"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full ${
                  isActive ? "bg-purple-200" : "hover:bg-purple-200"
                }`
              }>
              <img className="h-8" src="./image/yuem.png" alt="" />
              <p className="text-xs mt-1 text-purple-800">ยืมหนังสือ</p>
            </NavLink>
          </li>

          <li className="w-full h-full">
            <NavLink to="/Khuen"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full ${
                  isActive ? "bg-purple-200" : "hover:bg-purple-200"
                }`
              }>
              <img className="h-8" src="./image/khuen.png" alt="" />
              <p className="text-xs mt-1 text-purple-800">คืนหนังสือ</p>
            </NavLink>
          </li>

          <li className="w-full h-full">
            <NavLink to="/Phawad"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full ${
                  isActive ? "bg-purple-200" : "hover:bg-purple-200"
                }`
              }>
              <img className="h-8" src="./image/pawat.png" alt="" />
              <p className="text-xs mt-1 text-purple-800">ประวัติ</p>
            </NavLink>
          </li>

        </ul>
      </div>

    </div>
  );
}

export default Khuen;
