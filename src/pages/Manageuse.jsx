import Sidebaradmin from "../components/Sidebaradmin";
import { useState } from "react";
import { Link } from "react-router-dom";

// *** แก้ไขคอมโพเนนต์ Pagination ตรงนี้ ***
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  // กำหนดให้แสดงแค่ 5 หน้าแรก หรือจนถึงหน้าสุดท้ายหากน้อยกว่า 5
  const pagesToShow = [...Array(totalPages).keys()]
    .map((num) => num + 1)
    .slice(0, 5); // *** ส่วนที่ตัดให้แสดงแค่ 5 หน้า ***

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {pagesToShow.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            currentPage === page
              ? "bg-[#FFD15F] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {page}
        </button>
      ))}
      {/* หากมีหน้ามากกว่า 5 อาจจะเพิ่มปุ่ม ... หรือปุ่มต่อไป/ก่อนหน้า ได้ */}
    </div>
  );
};
// *** จบการแก้ไขคอมโพเนนต์ Pagination ***

function Manageuse() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalUsers = 1250;
  const usersPerPage = 10;
  // คำนวณ totalPages ตามปกติ
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const sampleUsers = [
    {
      id: "1-2345-67890-12-3",
      name: "กิตติศักดิ์ สมานคุณณารักษา",
      dateCreated: "31/12/2568",
      email: "kodtepinchonvc@gmail.com",
      lastLogin: "กำลังใช้งาน",
    },
    {
      id: "1-2345-67890-12-3",
      name: "สมใจ สมานคุณณารักษา",
      dateCreated: "31/12/2568",
      email: "kodtepinchonvc@gmail.com",
      lastLogin: "กำลังใช้งาน",
    },
    {
      id: "1-2345-67890-12-4",
      name: "มานะ พอเพียง",
      dateCreated: "01/01/2569",
      email: "mana.p@gmail.com",
      lastLogin: "กำลังใช้งาน",
    },
    {
      id: "1-2345-67890-12-5",
      name: "ปรีดา อารี",
      dateCreated: "02/01/2569",
      email: "preeda.a@gmail.com",
      lastLogin: "กำลังใช้งาน",
    },
    {
      id: "1-2345-67890-12-6",
      name: "สมศรี มั่นคง",
      dateCreated: "03/01/2569",
      email: "somsri.m@gmail.com",
      lastLogin: "กำลังใช้งาน",
    },
    // เพิ่มข้อมูลเพิ่มเติมเพื่อทดสอบ หากต้องการให้เห็นผลเมื่อกดหน้า
    {
      id: "1-2345-67890-12-7",
      name: "อรุณ เช้าตรู่",
      dateCreated: "04/01/2569",
      email: "arun.c@gmail.com",
      lastLogin: "กำลังใช้งาน",
    },
    {
      id: "1-2345-67890-12-8",
      name: "วีระชัย ชัยชนะ",
      dateCreated: "05/01/2569",
      email: "veerachai.c@gmail.com",
      lastLogin: "กำลังใช้งาน",
    },
  ];

  // ส่วนนี้ใช้เพื่อแสดงข้อมูลในตารางตามหน้าปัจจุบัน (หากต้องการให้ Pagination ทำงานจริง)
  // แต่ถ้าต้องการแค่แสดง 1-5 คงที่ ก็ไม่ต้องใช้ส่วนนี้
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sampleUsers.slice(indexOfFirstUser, indexOfLastUser);


  return (
    <>
      <Sidebaradmin />
      <div className="flex">
        <div className="bg-blue-950 w-[1410px] h-[90px] absolute top-0 left-25 xl:left-[100px] rounded-b-[24px]">
          <p className="text-white text-[45px] font-bold text-center mt-3">จัดการผู้ใช้งาน</p>
        </div>
        <div className="bg-[#FFD15F] w-[1310px] h-[634px] absolute top-[104px] left-40 rounded-3xl">
          <div className="bg-white w-[1230px] h-[600px] ml-10 mt-[18px] rounded-xl relative">
            <div className="flex">
              <div className="">
                <p className="font-bold text-[20px] ml-6 pt-5 text-blue-950">รายชื่อผู้ใช้งาน</p>
              </div>
              <div className="flex items-center bg-gray-100 rounded-xl w-[300px] ml-[750px] mt-4 px-3 py-2">
                <input
                  type="text"
                  placeholder="ค้นหา..."
                  className="bg-gray-100 ml-2 outline-none w-full text-sm"
                />
                <i className="fa-solid fa-magnifying_glass text-gray-500" style={{ fontSize: "15px" }}></i>
              </div>
            </div>
            <div className="overflow-y-auto max-h-[480px]">
              <table className="mt-4" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr className="bg-[#ededed] text-[#454545] " style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                    <th className="pt-[10px] pb-[10px] pl-7 text-left">เลขบัตรประชาชน</th>
                    <th className="pr-[40px] pl-[60px] text-left">ชื่อผู้ใช้งาน</th>
                    <th className="pl-[17px] text-left">วันที่สร้าง</th>
                    <th className="pl-[85px] text-left">อีเมล</th>
                    <th className="pl-[0px] pr-[18px] text-left">เข้าสู่ระบบล่าสุด</th>
                    <th className="pr-[0px] text-left">การดำเนินการ</th>
                  </tr>
                </thead>
                <tbody>
                  {/* ใช้ currentUsers เพื่อแสดงข้อมูลตามหน้าปัจจุบัน */}
                  {currentUsers.map((user, index) => (
                    <tr key={index}>
                      <td className="pl-7 pt-2 pb-2 border-b text-[#0F2C59]" style={{ borderColor: "rgba(0,0,0,0.2)" }}>{user.id}</td>
                      <td className="pl-2 border-b text-[#0F2C59]" style={{ borderColor: "rgba(0,0,0,0.2)" }}>{user.name}</td>
                      <td className="pl-2 border-b text-[#0F2C59]" style={{ borderColor: "rgba(0,0,0,0.2)" }}>{user.dateCreated}</td>
                      <td className="pl-2 border-b text-[#0F2C59]" style={{ borderColor: "rgba(0,0,0,0.2)" }}>{user.email}</td>
                      <td className="pl-2 border-b text-[#0F2C59]" style={{ borderColor: "rgba(0,0,0,0.2)" }}>{user.lastLogin}</td>
                      <td className="pl-8 border-b" style={{ borderColor: "rgba(0,0,0,0.2)" }}><Link to="/Dmanageu"><i className="fa-solid fa-trash-can text-red-600" style={{ fontSize: "20px" }}></i></Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="absolute bottom-4 left-0 right-0 pr-10 pl-17 flex justify-between items-center">
              <p className="text-[#828282] text-[14px] mt-5">แสดงจาก {indexOfFirstUser + 1}-{indexOfLastUser} จาก {totalUsers} รายการ</p>
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Manageuse;