import Sidebaradmin from "../components/Sidebaradmin";
import { Link } from "react-router-dom";

function Courseadmin() {
  return (
    <>
    <Sidebaradmin />
        <div className="bg-blue-950 w-[1428px] h-[150px] absolute top-0 left-25 rounded-b-4xl">
            <p className="text-white text-[45px] font-bold text-center mt-3.5">หลักสูตร</p>
        </div>
        <div className="bg-[#FFD15F] w-[1330px] h-[1650px] absolute top-26 left-37 rounded-xl">
            <div className="table-section mt-8 w-[1230px] ml-10 bg-white rounded-xl">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div className="bg-blue-950 w-[1350px] h-[50px] rounded-t-xl">
                <div className="flex">
                    <h2 className="text-white font-bold pl-10 pt-3">หลักสูตรที่เปิดรับสมัคร ระดับ ปวช.</h2>
                    <button className="text-blue-950 font-bold bg-white rounded-xl w-[150px] h-[35px] flex gap-2 pt-1.5 mt-2 ml-195 "><Link to = "/Pluscourse"><i className="fa-solid fa-plus ml-3 -mt-1 mr-2"style={{ fontSize: "20px" }}></i>เพิ่มหลักสูตร</Link></button>
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
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}><Link to= "/Pvccaha">แก้ไข</Link></td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาแฟชั่นและสิ่งทอ</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}><Link to="/Pvcfear">แก้ไข</Link></td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาอาหารและโภชนาการ</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}><Link to="/Pvcaahan">แก้ไข</Link></td>
              </tr>
              <tr className="font-bold">
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาวิจิตรศิลป์</td>
                <td className = "pl-21 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-12 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className = "p-1 border-b-1 text-[#519DD8]"style={{ borderColor: "rgba(0,0,0,0.2)" }}><Link to="/Pvcvichit">แก้ไข</Link></td>
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
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาการธุรกิจค้าปลึก</td>
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
                <td className="pl-3 border-b-1" style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาคหกรรมศาสตร์</td>
                <td className="pl-21 border-b-1" style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className="pl-12 border-b-1" style={{ borderColor: "rgba(0,0,0,0.2)" }}>25</td>
                <td className="pl-15 border-b-1" style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className="p-1 border-b-1" style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                    <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
                <td className="p-1 border-b-1 text-[#519DD8] cursor-pointer" style={{ borderColor: "rgba(0,0,0,0.2)" }}>แก้ไข</td>
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
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาการธุรกิจค้าปลึก</td>
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
                <td className = "pl-3 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาเทคโนโลยีธุรกิโจดิจิทัล</td>
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
export default Courseadmin;