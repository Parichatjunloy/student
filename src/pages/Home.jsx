import { Link, useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [modal, setModal] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [books, setBooks] = useState([]);

  /* ================= LOAD BOOKS ================= */
  const loadBooks = async () => {
    try {
      const booksRes = await fetch("http://localhost:5000/books");
      const booksData = await booksRes.json();

      let borrowedBookIds = [];

      try {
        const borrowRes = await fetch("http://localhost:5000/borrowed");
        const borrowData = await borrowRes.json();
        borrowedBookIds = borrowData.map((b) => b.book_id);
      } catch {
        // ถ้า route ไม่มี จะไม่พัง
      }

      const formatted = booksData.map((book) => ({
        ...book,
        status:
          borrowedBookIds.length > 0
            ? borrowedBookIds.includes(book.id)
              ? "borrowed"
              : "available"
            : book.quantity > 0
            ? "available"
            : "borrowed",
      }));

      setBooks(formatted);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadBooks();
    const handleFocus = () => loadBooks();
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  /* ================= CLICK BOOK ================= */
  const handleBookClick = (book) => {
    if (book.status === "available") {
      setSelectedBook(book);
      setModal("confirm");
    } else {
      setSelectedBook(book);
      setModal("already");
    }
  };

  /* ================= BORROW ================= */
  const confirmBorrow = async () => {
    try {
      const userId = localStorage.getItem("user_id");
      if (!userId) {
        alert("กรุณาเข้าสู่ระบบใหม่");
        return;
      }

      const response = await fetch("http://localhost:5000/borrow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          book_id: selectedBook.id,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        await loadBooks();
        setModal("success");
        setTimeout(() => navigate("/Yuem"), 1200);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("เกิดข้อผิดพลาด");
    }
  };

  /* ================= FILTER ================= */
  const filteredBooks = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "all" ||
      (filter === "available" && book.status === "available") ||
      (filter === "borrowed" && book.status === "borrowed");

    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen flex flex-col pb-24 bg-gray-50">

      {/* ===== HEADER ===== */}
      <div className="w-full bg-purple-600 shadow-md">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="h-10" src="./image/LOGO.png" alt="Logo" />
            <p className="text-white font-bold text-xl">
              Yuem Khuen Nangsue
            </p>
          </div>
          <Link to="/Login">
            <img className="h-8" src="./image/logout.png" alt="Logout" />
          </Link>
        </div>
      </div>

      <div className="flex-1 px-4">

        <p className="flex items-center gap-3 mt-5 text-lg font-bold text-purple-900">
          <img className="h-8" src="./image/books.png" alt="" />
          รายการหนังสือ
        </p>

        {/* ===== SEARCH ===== */}
        <div className="bg-white w-full h-11 rounded-2xl mt-5 flex items-center shadow-md px-4">
          <img className="h-5 mr-3" src="./image/search.png" alt="" />
          <input
            type="text"
            placeholder="ค้นหาหนังสือ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-gray-700"
          />
        </div>

        {/* ===== FILTER (สีเดิม) ===== */}
        <div className="mt-5 flex gap-2">
          {["all", "available", "borrowed"].map((type) => (
            <div
              key={type}
              onClick={() => setFilter(type)}
              className={`h-8 w-24 rounded-2xl flex justify-center items-center cursor-pointer ${
                filter === type
                  ? "bg-purple-700 text-purple-200"
                  : "bg-purple-200 text-purple-800"
              }`}
            >
              <p className="text-sm font-bold">
                {type === "all"
                  ? "ทั้งหมด"
                  : type === "available"
                  ? "ว่างอยู่"
                  : "ถูกยืม"}
              </p>
            </div>
          ))}
        </div>

        {/* ===== BOOK LIST ===== */}
        <div className="mt-5 space-y-5">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              onClick={() => handleBookClick(book)}
              className="bg-white rounded-2xl flex items-center shadow-md p-3 cursor-pointer"
            >
              <img
                className="h-24 w-20 object-cover rounded"
                src={book.image}
                alt=""
              />

              <div className="ml-5">
                <p className="font-semibold">{book.title}</p>
                <p className="text-xs pt-1.5">
                  ผู้เขียน: {book.author}
                </p>

                {book.status === "available" ? (
                  <p className="bg-green-300 text-green-800 text-sm w-20 h-6 rounded-2xl flex items-center justify-center font-bold mt-2">
                    ว่าง
                  </p>
                ) : (
                  <p className="bg-red-400 text-red-800 text-sm w-20 h-6 rounded-2xl flex items-center justify-center font-bold mt-2">
                    ถูกยืม
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== BOTTOM BAR (ครบ 4 ปุ่ม) ===== */}
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

      {/* ===== MODAL ===== */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white w-80 p-6 rounded-2xl text-center">

            {modal === "confirm" && (
              <>
                <p className="font-bold mb-4">
                  ต้องการยืม "{selectedBook?.title}" ใช่ไหม?
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setModal(null)}
                    className="px-4 py-2 bg-gray-300 rounded-xl"
                  >
                    ยกเลิก
                  </button>
                  <button
                    onClick={confirmBorrow}
                    className="px-4 py-2 bg-purple-600 text-white rounded-xl"
                  >
                    ยืนยัน
                  </button>
                </div>
              </>
            )}

            {modal === "already" && (
              <>
                <p className="font-bold mb-4 text-red-600">
                  หนังสือเล่มนี้ถูกยืมแล้ว
                </p>
                <button
                  onClick={() => setModal(null)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-xl"
                >
                  ปิด
                </button>
              </>
            )}

            {modal === "success" && (
              <p className="font-bold text-green-600">
                ยืมหนังสือสำเร็จ 🎉
              </p>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

export default Home;
