import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <>
      <Sidebar />

      <div className="fixed inset-0 flex items-center justify-center px-10">

        <div className="fixed flex top-30 right-20 items-center justify-center"> 
            <img className="pic" src="./image/logo.png" alt="pic" /> 
        </div> 
        <div className="fixed top-60 left-55 text-blue-950 items-center justify-center">
            <div className="text-[40px]">
                <h1><b>วิทยาลัยอาชีวศึกษาชลบุรี</b></h1> 
                <h1><b>Chonburi Vocational College</b></h1> 
                <div className="text-[30px] mt-2">
                    <h5>รับสมัครนักเรียน นักศึกษา</h5>
                </div>
                    <div className="text-[25px] bg-yellow-400 w-100 h-13 text-center p-2 text-white rounded-xl mt-4 hover:bg-yellow-200">
                        <div className="box">
                          <Link to = "/Datastu">
                          <b>สมัครเรียน ปีการศึกษา 2569</b>
                          </Link>
                          </div> 
                    </div>
            </div>
        </div>

        </div>

      {/* กรอบล่าง */}
      <div className="fixed bottom-0 left-0 w-full">
        <img
          className="kroplang w-full"
          src="./image/กรอบล่าง.png"
          alt="กรอบล่าง"
        />
      </div>

      {/* กรอบบน */}
      <div className="fixed top-0 right-0 w-150 ">
        <img
          className="kropbon w-full"
          src="./image/กรอบบน.png"
          alt="กรอบบน"
        />
      </div>

      {/* ใบไม้ต่างๆ */}
      <div className="fixed top-0 right-100 w-30">
        <img className="leaf w-full" src="./image/ใบไม้.png" alt="ใบไม้" />
      </div>

      <div className="fixed bottom-10 right-0 w-30">
        <img className="leaf1 w-full" src="./image/ใบไม้(1).png" alt="ใบไม้1" />
      </div>

      <div className="fixed bottom-0 left-40 w-30 ">
        <img className="leaf2 w-full" src="./image/ใบไม้(2).png" alt="ใบไม้2" />
      </div>
    </>
  );
}

export default Home;