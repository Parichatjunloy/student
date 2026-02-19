import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Adminhome() {

  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [books, setBooks] = useState([
    { id: 1, title: "ความสุขของกะทิ ฉบับครบรอบ20ปี", author: "งามพรรณ เวชชาชีวะ", category: "วรรณกรรม", image: "./image/khati.png" },
    { id: 2, title: "ความเบาหวิวเหลือทนของชีวิต", author: "มิลาน คุนเดอรา", category: "วรรณกรรม", image: "./image/cheevit.png" },
    { id: 3, title: "ความทรงจำสลับรูป", author: "สึจิมุระ มิซึกิ", category: "นิยายแปล", image: "./image/sangjam.png" },
    { id: 4, title: "ขณะหนึ่งชั่วนิรันดร์", author: "ไมเคิล คันนิงแฮม", category: "วรรณกรรม", image: "./image/niran.png" },
    { id: 5, title: "ตัวตนที่เท็จจริง", author: "ชองฮันอา", category: "วรรณกรรม", image: "./image/taoton.png" },
    { id: 6, title: "จอมโจรขโมยหนังสือ", author: "มาร์กัส ซูซัก", category: "วรรณกรรม , เรื่องสั้น", image: "./image/jomjon.png" },
    { id: 7, title: "จิตวิทยาสายดาร์ก", author: "Dr.Hiro", category: "จิตวิทยา", image: "./image/jidvitya.png" },
    { id: 8, title: "ทำงานฉลาดใน 100 ภาพ", author: "โคโมริ ยู", category: "จิตวิทยา", image: "./image/pap.png" },
    { id: 9, title: "พัสดุจากดาวหมา", author: "นทธี ศศิวิมล", category: "จิตวิทยา", image: "./image/patsadu.png" },
  ]);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = () => {
    setBooks(books.filter(b => b.id !== selectedBook.id));
    setModal(null);
  };

  const handleEditSave = () => {
    setBooks(books.map(b =>
      b.id === selectedBook.id
        ? { ...selectedBook, image: previewImage || selectedBook.image }
        : b
    ));
    setModal(null);
    setPreviewImage(null);
  };

  const handleAdd = () => {
    const newBook = {
      id: Date.now(),
      title: selectedBook.title,
      author: selectedBook.author,
      category: selectedBook.category,
      image: previewImage || "./image/default.png"
    };

    setBooks([...books, newBook]);
    setModal(null);
    setPreviewImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
          <img className="h-8" src="./image/books.png" alt="" />
          รายการหนังสือ
        </p>

        {/* SEARCH */}
        <div className="bg-white w-full h-11 rounded-2xl mt-4 flex items-center shadow-md px-4">
          <img className="h-5 mr-3" src="./image/search.png" alt="" />
          <input
            type="text"
            placeholder="ค้นหาหนังสือ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        {/* ADD BUTTON */}
        <button
          onClick={() => {
            setSelectedBook({ title: "", author: "", category: "", image: "" });
            setPreviewImage(null);
            setModal("add");
          }}
          className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-xl font-bold"
        >
          + เพิ่มหนังสือ
        </button>

        {/* BOOK LIST */}
        <div className="mt-5 space-y-5">
          {filteredBooks.map(book => (
            <div key={book.id} className="bg-white rounded-2xl flex items-center shadow-md p-3">
              <img className="h-24" src={book.image} alt="" />
              <div className="ml-5 flex-1">
                <p className="font-medium">{book.title}</p>
                <p className="text-xs">ผู้เขียน: {book.author}</p>
                <p className="text-xs">หมวดหมู่: {book.category}</p>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => {
                      setSelectedBook(book);
                      setPreviewImage(null);
                      setModal("edit");
                    }}
                    className="bg-yellow-300 text-yellow-800 text-xs px-3 py-1 rounded-xl font-bold"
                  >
                    แก้ไข
                  </button>
                  <button
                    onClick={() => {
                      setSelectedBook(book);
                      setModal("delete");
                    }}
                    className="bg-red-300 text-red-800 text-xs px-3 py-1 rounded-xl font-bold"
                  >
                    ลบ
                  </button>
                </div>
              </div>
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

      {/* ===== MODAL ===== */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white w-80 p-6 rounded-2xl text-center">

            {modal === "delete" && (
              <>
                <p className="mb-4 font-bold text-red-600">
                  ต้องการลบ "{selectedBook.title}" 
                </p>
                <div className="flex justify-center gap-4">
                  <button onClick={() => setModal(null)} className="px-4 py-2 bg-gray-300 rounded-xl">
                    ยกเลิก
                  </button>
                  <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-xl">
                    ลบ
                  </button>
                </div>
              </>
            )}

            {(modal === "edit" || modal === "add") && (
              <>
                <input
                  type="text"
                  placeholder="ชื่อหนังสือ"
                  value={selectedBook.title}
                  onChange={(e) => setSelectedBook({ ...selectedBook, title: e.target.value })}
                  className="border w-full mb-2 p-2 rounded"
                />

                <input
                  type="text"
                  placeholder="ผู้เขียน"
                  value={selectedBook.author}
                  onChange={(e) => setSelectedBook({ ...selectedBook, author: e.target.value })}
                  className="border w-full mb-2 p-2 rounded"
                />

                <input
                  type="text"
                  placeholder="หมวดหมู่"
                  value={selectedBook.category}
                  onChange={(e) => setSelectedBook({ ...selectedBook, category: e.target.value })}
                  className="border w-full mb-2 p-2 rounded"
                />

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mb-2"
                />

                {previewImage && (
                  <img src={previewImage} alt="preview" className="h-24 mx-auto mb-3 rounded" />
                )}

                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => {
                      setModal(null);
                      setPreviewImage(null);
                    }}
                    className="px-4 py-2 bg-gray-300 rounded-xl"
                  >
                    ยกเลิก
                  </button>

                  <button
                    onClick={modal === "edit" ? handleEditSave : handleAdd}
                    className="px-4 py-2 bg-purple-600 text-white rounded-xl"
                  >
                    บันทึก
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

export default Adminhome;
