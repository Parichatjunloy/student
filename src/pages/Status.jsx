import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function Status () {
    return (
        <>
        <Sidebar />
        <div className="bg-white w-[1250px] h-[698px] absolute top-0 mt-10 ml-45 rounded-2xl mx-auto">
            <div className="ml-10 mt-7">
                <p className="text-black text-[25px] font-bold">สถานะการสมัคร</p>
            </div>
            <div className="flex">
                <div className="flex gap-2 ml-10">
                    <p className="font-medium text-gray-500">ยินดีต้อนรับ</p>
                    <p className="font-medium text-purple-600">สมศรี ชายสมร</p>
                </div>
                <div className="flex gap-3 -mt-5 ml-200">
                    <p className="text-gray-600 font-medium pt-1.5">รหัสผู้สมัคร:</p>
                    <p className="w-[100px] h-[35px] bg-gray-200 text-center pt-1.5 font-medium text-gray-800 rounded-lg">กค-8390</p>
                </div>
            </div>
            <div className="ml-10 mt-6">
                <p className="font-medium">ความคืบหน้าการสมัคร</p>
            </div>
            <div className="flex gap-20">
                <div className="mt-2 ml-27 ">
                    <img className = "w-[70px] h-[70px]" src="/image/Group 170.png" alt="" />
                    <p className="text-[15px] text-center opacity-70 font-bold">ลงทะเบียน</p>
                    <p className="text-[12px] text-center opacity-50 font-medium">12 มิ.ย. 68</p>
                </div>
                <div className="mt-2 ml-20">
                    <img className = "w-[70px] h-[70px] ml-3.5" src="/image/Group 170.png" alt="" />
                    <p className="text-[15px] text-center opacity-70 font-bold">ตรวจสอบข้อมูล</p>
                    <p className="text-[12px] text-center opacity-50 font-medium">13 มิ.ย. 68</p>
                </div>
                <div className="mt-2 ml-20">
                    <img className = "w-[70px] h-[70px]" src="/image/Group 170.png" alt="" />
                    <p className="text-[15px] text-center opacity-70 font-bold">สัมภาษณ์</p>
                    <p className="text-[12px] text-center opacity-50 font-medium">16 มิ.ย. 68</p>
                </div>
                <div className="mt-2 ml-20">
                    <img className = "w-[70px] h-[70px]" src="/image/Group 170.png" alt="" />
                    <p className="text-[15px] text-center opacity-70 font-bold">ชำระเงิน</p>
                    <p className="text-[12px] text-center opacity-50 font-medium">19 มิ.ย. 68</p>
                </div>
                <div className="mt-2 ml-20">
                    <img className = "w-[70px] h-[70px]" src="/image/Group 170.png" alt="" />
                    <p className="text-[15px] text-center opacity-70 font-bold">อนุมัติ</p>
                    <p className="text-[12px] text-center opacity-50 font-medium">22 มิ.ย. 68</p>
                </div>
            </div>
            <div className="flex items-center w-[1170px] h-[50px] bg-[#FFFCDF] text-[#B17E00] gap-3 ml-10 mt-3 pl-4 rounded-md">
                <i class="fa-solid fa-circle-exclamation icon-warning"></i>
                <h4 class="data15"><b>สถานะปัจจุบัน :</b>  กรุณาชำระเงินค่าธรรมเนียมการสมัคร ภายในวันที่ 20 มี.ค. 2568</h4>
            </div>
            <div>
                <div className="flex gap-4">
                    <div className="bg-[#FFFCDF] w-[577px] h-[350px] ml-10 mt-5 rounded-xl border-1 border-[#FFD15F]">
                        <p className="bg-[#FFD15F] w-[100px] h-[35px] flex items-center justify-center font-bold rounded-tl-lg rounded-br-lg">ลงทะเบียน</p>
                        <div class="flex ml-10 mt-5 leading-10">
                            <div class="text-gray-600">
                                <p>ชื่อ-นามสกุล</p>
                                <p>เลขบัตรประชาชน</p>
                                <p>วันเกิด</p>
                                <p>อีเมล</p>
                                <p>เบอร์โทรศัพท์</p>
                            </div>
                            <div class="text-right ml-56">
                                <p>นายเจเจ ขี้เมา</p>
                                <p>1-2345-67890-12-3</p>
                                <p>31 มกราคม 3299</p>
                                <p>jjkheemao@gmail.com</p>
                                <p>088-9165631</p>
                            </div>
                        </div>
                        <Link to = "#">
                        <p className="bg-white w-[130px] h-[35px] border-[#FFD15F] border-1 flex items-center justify-center font-medium rounded-lg mt-6 ml-101">ดูรายละเอียด</p>
                        </Link>
                    </div>
                    <div className="bg-[#FFFCDF] w-[577px] h-[168px] mt-5 rounded-xl border-1 border-[#FFD15F]">
                        <p className="bg-[#FFD15F] w-[100px] h-[35px] flex items-center justify-center font-bold rounded-tl-lg rounded-br-lg">สัมภาษณ์</p>
                        <div class="flex mt-2.5 ml-10 leading-8">
                            <div class="text-gray-600">
                                <p>สถานะ</p>
                                <p>วันที่สัมภาษณ์</p>
                            </div>
                            <div class="text-right ml-65 ">
                                <p>สัมภาษณ์แล้วเรียบร้อย</p>
                                <p>16 มีนาคม 2568</p>
                            </div>
                        </div>
                        <Link to = "#">
                        <p className="bg-white w-[130px] h-[35px] border-[#FFD15F] border-1 flex items-center justify-center font-medium rounded-lg mt-2 ml-102">ดูรายละเอียด</p>
                        </Link>
                    </div>
                </div>
                    <div className="bg-[#FFFCDF] w-[577px] h-[168px] -mt-42 ml-158 rounded-xl border-1 border-[#FFD15F]">
                        <p className="bg-[#FFD15F] w-[100px] h-[35px] flex items-center justify-center font-bold rounded-tl-lg rounded-br-lg">ชำระเงิน</p>
                        <div class="flex mt-2.5 ml-10 leading-8">
                            <div class="text-gray-600">
                                <p>สถานะ</p>
                                <p>วันที่ชำระ</p>
                            </div>
                            <div class="text-right ml-87.5">
                                <p>รอดำเนินการ</p>
                                <p>-</p>
                            </div>
                        </div>
                        <Link to = "#">
                        <p className="bg-white w-[130px] h-[35px] border-[#FFD15F] border-1 flex items-center justify-center font-medium rounded-lg mt-2 ml-102">ดูรายละเอียด</p>
                        </Link>
                    </div>
                    
            </div>
        </div>
        
        </>
    )
}
export default Status;