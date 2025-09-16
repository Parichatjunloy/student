import Sidebaradmin from "../components/Sidebaradmin";
import { Link } from "react-router-dom";

function Pvcaahan() {
  return (
    <>
    <Sidebaradmin />
      <div className="w-[800px] h-[613px] bg-white absolute inset-0 z-20 mt-25 ml-100 rounded-2xl">
        <div className="flex h-[70px] border-b-2 border-gray-300"><p className="font-bold text-[20px] ml-10 mt-5">รายละเอียดหลักสูตร</p><Link to= "/Courseadmin"><i className="fa-solid fa-xmark text-[#FFD15F] mt-4.5 ml-130"></i></Link></div>
        <div className="bg-[#F2F2F2] w-[750px] h-[360px] mt-6 ml-6 rounded-xl">
          <p className="font-bold pt-3 pl-8">ข้อมูลหลักสูตร</p>
          <div className="flex">
            <div>
              <p className="text-[#767676] pl-8 pt-3">ชื่อหลักสูตร (ภาษาไทย)</p>
              <input type="text" className="ml-8 mt-2 w-[325px] h-[30px] bg-white border-1 border-gray-300 pl-1 text-[15px]" value="อาหารและโภชนาการ"/>
            </div>
            <div>
              <p className="text-[#767676] pl-8 pt-3">ชื่อย่อ</p>
              <input type="text" className="ml-8 mt-2 w-[325px] h-[30px] bg-white border-1 border-gray-300 pl-1 text-[15px]" value="อห."/>
            </div>
          </div>
          <div className="flex">
            <div>
              <p className="text-[#767676] pl-8 pt-3">ชื่อหลักสูตร (ภาษาอังกฤษ)</p>
              <input type="text" className="ml-8 mt-2 w-[325px] h-[30px] bg-white border-1 border-gray-300 pl-1 text-[15px]" value="Food and Nutrition"/>
            </div>
            <div>
              <p className="text-[#767676] pl-8 pt-3">ประเภทวิชา</p>
              <input type="text" className="ml-8 mt-2 w-[325px] h-[30px] bg-white border-1 border-gray-300 pl-1 text-[15px]" value="คหกรรม"/>
            </div>
          </div>
          <div className="flex">
            <div>
              <p className="text-[#767676] pl-8 pt-3">ภาคการศึกษา</p>
              <input type="text" className="ml-8 mt-2 w-[325px] h-[30px] bg-white border-1 border-gray-300 pl-1 text-[15px]" value="ภาคปกติ"/>
            </div>
            <div>
              <p className="text-[#767676] pl-8 pt-3">ระดับการศึกษา</p>
              <input type="text" className="ml-8 mt-2 w-[325px] h-[30px] bg-white border-1 border-gray-300 pl-1 text-[15px]" value="ปวช."/>
            </div>
          </div>
          <div className="flex">
            <div>
              <p className="text-[#767676] pl-8 pt-3">ระยะเวลาที่เรียน</p>
              <input type="text" className="ml-8 mt-2 w-[325px] h-[30px] bg-white border-1 border-gray-300 pl-1 text-[15px]" value="4 ปี"/>
            </div>
            <div>
              <p className="text-[#767676] pl-8 pt-3">จำนวนหน่วยกิต</p>
              <input type="text" className="ml-8 mt-2 w-[325px] h-[30px] bg-white border-1 border-gray-300 pl-1 text-[15px]" value="128 หน่วยกิต"/>
            </div>
          </div>
          <div className="mt-10 text-right">
            <Link to= "/Delete"><i className="fa-solid fa-trash-can text-red-600"style={{ fontSize: "25px" }}></i></Link>
          </div>
          <div className="border-b-2 border-gray-300 -ml-6 w-[800px] mt-3"></div>
          <div className="flex gap-5 ml-54 mt-7">
            <Link to= "/Courseadmin"><button className="border-[#FFD15F] border-2 w-[150px] h-[40px] rounded-xl font-bold cursor-pointer">ย้อนกลับ</button></Link>
            <Link to= "/Courseadmin"><button className="bg-[#FFD15F] w-[150px] h-[40px] rounded-xl font-bold cursor-pointer text-white">บันทึกการแก้ไข</button></Link>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black/40 z-10"></div>
        <div className="bg-blue-950 w-[1412px] h-[150px] absolute top-0 left-25 rounded-b-4xl">
            <p className="text-white text-[45px] font-bold text-center mt-3.5">หลักสูตร</p>
        </div>
        <div className="bg-[#FFD15F] w-[1330px] h-[1650px] absolute top-26 left-37 rounded-xl">
            <div className="table-section mt-8 w-[1230px] ml-10 bg-white rounded-xl">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div className="bg-blue-950 w-[1350px] h-[50px] rounded-t-xl">
                <div className="flex">
                    <h2 className="text-white font-bold pl-10 pt-3">หลักสูตรที่เปิดรับสมัคร ระดับ ปวช.</h2>
                    <Link to = "/Pluscourse"><button className="text-blue-950 font-bold bg-white rounded-xl w-[150px] h-[35px] flex gap-2 pt-1.5 mt-2 ml-195 "><i className="fa-solid fa-plus ml-3 -mt-1 "style={{ fontSize: "20px" }}></i>เพิ่มหลักสูตร</button></Link>
                </div>
            </div>
          </div>
          <table className="-mt-5" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr className="bg-[#E6E6E6] text-[#454545] border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                <th className="p-[12px] text-left">ชื่อสาขาวิชา</th>
                <th className="pl-[70px] text-left">ระดับชั้น</th>
                <th className="pl-[10px] text-left">จำนวนผู้สมัคร</th>
                <th className="pl-[10px] text-left">จำนวนที่รับสมัคร</th>
                <th className="pl-[30px] text-left">สถานะ</th>
                <th className="pr-[30px] text-left">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาคหกรรมศาสตร์</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาแฟชั่นและสิ่งทอ</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาอาหารและโภชนาการ</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาวิจิตรศิลป์</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาการออกแบบ</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาดิจิทัลกราฟิก</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาบัญชี</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาการตลาด</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาการจัดการธุรกิจ</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาการธุรกิจค้าปลีก</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาการโรงแรม</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาการท่องเที่ยว</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 ">สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล</td>
                <td className = "pl-21 ">ปวช.</td>
                <td className = "pl-12 ">25</td>
                <td className = "pl-15 ">40</td>
                <td className = "p-1 ">
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 text-[#519DD8]">แก้ไข</td>
              </tr>
            </tbody>
          </table>
        </div>
{/* หลักสูตรของปวส. */}
        <div className="table-section mt-8 w-[1230px] ml-10 bg-white rounded-xl">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div className="bg-blue-950 w-[1350px] h-[50px] rounded-t-xl">
                <div className="flex">
                    <h2 className="text-white font-bold pl-10 pt-3">หลักสูตรที่เปิดรับสมัคร ระดับ ปวส.</h2>
                    <button className="text-blue-950 font-bold bg-white rounded-xl w-[150px] h-[35px] flex gap-2 pt-1.5 mt-2 ml-195 "><i className="fa-solid fa-plus ml-3 -mt-1 "style={{ fontSize: "20px" }}></i>เพิ่มหลักสูตร</button>
                </div>
            </div>
          </div>
          <table className="-mt-5" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr className="bg-[#E6E6E6] text-[#454545] border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                <th className="p-[12px] text-left">ชื่อสาขาวิชา</th>
                <th className="pl-[70px] text-left">ระดับชั้น</th>
                <th className="pl-[10px] text-left">จำนวนผู้สมัคร</th>
                <th className="pl-[10px] text-left">จำนวนที่รับสมัคร</th>
                <th className="pl-[30px] text-left">สถานะ</th>
                <th className="pr-[30px] text-left">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาคหกรรมศาสตร์</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาแฟชั่นและสิ่งทอ</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาอาหารและโภชนาการ</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาวิจิตรศิลป์</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาดิจิทัลกราฟิก</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาบัญชี</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาการตลาด</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาการจัดการธุรกิจ</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาการธุรกิจค้าปลีก</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาการจัดการโลจิสติกส์</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาการโรงแรม</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาการท่องเที่ยว</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาไมซ์และอีเว้นท์</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาดทคโนโลยีธุรกิจดิจิทัล</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 ">สาขาวิชาเทคโนโลยีสารสนเทศ</td>
                <td className = "pl-21 ">ปวส.</td>
                <td className = "pl-12 ">25</td>
                <td className = "pl-15 ">40</td>
                <td className = "p-1 ">
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 text-[#519DD8]">แก้ไข</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      
    </>
  )
}
export default Pvcaahan;