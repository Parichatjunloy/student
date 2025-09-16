import Sidebaradmin from "../components/Sidebaradmin";

function Homeadmin() {
  return (
    <>
    <Sidebaradmin />

    <div className="flex">
        <div className="bg-blue-950 w-[1410px] h-[90px] absolute top-0 left-25 rounded-b-4xl">
            <p className="text-white text-[45px] font-bold text-center mt-3">แดชบอร์ด</p>
        </div>
        <div className="bg-[#FFD15F] w-[1310px] h-[634px] absolute top-26 left-40 rounded-3xl">
            <div className="relative">
                <div className="flex">
                    <div className="bg-[#3ADF4D] w-[615px] h-[100px] ml-10 mt-4 rounded-l-xl flex items-center">
                        <i className="fa-solid fa-user-group text-white ml-18"style={{ fontSize: "40px" }}></i>
                    </div>
                    <div className="bg-[#4835B0] w-[615px] h-[100px] mt-4 rounded-r-xl flex items-center">
                        <i className="fa-solid fa-file-pen text-white ml-125"style={{ fontSize: "40px" }}></i>
                    </div>
                </div>
                <div className="absolute top-5.5 left-1/2 -translate-x-1/2 bg-white w-[850px] h-[90px] rounded-xl shadow-lg z-10">
                <div className="flex">
                    <div>
                        <p className="opacity-50 ml-40 mt-3">จำนวนผู้สมัคร</p>
                        <p className="font-bold text-[35px] ml-44 -mt-1">693</p>
                    </div>
                    <div className="bg-[#838383] w-[3px] h-[75px] mt-2 ml-43 "></div>
                    <div>
                        <p className="opacity-50 ml-40 mt-3">จำนวนเปิดรับสมัคร</p>
                        <p className="font-bold text-[35px] ml-46 -mt-1">1000</p>
                    </div>
                </div>
            </div>
            <div className="bg-white w-[1230px] h-[100px] ml-10 mt-3 rounded-xl shadow-md">
                <div className="flex ml-35"> 
                    <div className="">
                        <p className="opacity-50 text-[20px] pt-3">จำนวนผู้สมัครวันนี้</p>
                        <p className="text-[40px] font-bold -mt-2 ml-13">42</p>
                    </div>
                    <div className="bg-[#838383] w-[2px] h-[85px] mt-2 ml-30 "></div>
                    <div className="ml-25">
                        <p className="opacity-50 text-[20px] pt-3">จำนวนผู้สมัครสัปดาห์นี้</p>
                        <p className="text-[40px] font-bold -mt-2 ml-17">201</p>
                    </div>
                    <div className="bg-[#838383] w-[1px] h-[85px] mt-2 ml-30 "></div>
                    <div className="ml-25">
                        <p className="opacity-50 text-[20px] pt-3">จำนวนผู้สมัครเดือนนี้</p>
                        <p className="text-[40px] font-bold -mt-2 ml-15">693</p>
                    </div>
                </div>
            </div>

        <div className="table-section mt-3 w-[1230px] ml-10 bg-white pl-10 pt-3 pr-10" style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 className="text-blue-950 font-bold">รายชื่อหลักสูตรสาขาวิชา</h2>
            <button className="text-blue-950 font-medium underline ">ดูทั้งหมด</button>
          </div>
          <table className="-mt-3" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr className="bg-[#E6E6E6] text-[#454545]">
                <th style={{ padding: '12px', textAlign: 'left' }}>ชื่อหลักสูตรสาขาวิชา</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>ระดับชั้น</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>จำนวนผู้สมัคร</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>จำนวนที่รับสมัคร</th>
                <th className="pl-[32px] text-left">สถานะ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-bold">
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาบัญชี</td>
                <td className = "pl-6 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-13 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "pl-1.5 pt-1 pb-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#F5B7B7', color: '#6C1414', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>ปิดรับสมัคร</button>
                </td>
              </tr>
              <tr className="font-bold">
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาบัญชี</td>
                <td className = "pl-6 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวส.</td>
                <td className = "pl-13 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>23</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
              </tr>
              <tr className="font-bold">
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล</td>
                <td className = "pl-6 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-13 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>23</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
              </tr>
              <tr className="font-bold">
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาอาหารและโภชนาการ</td>
                <td className = "pl-6 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-13 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>23</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
              </tr>
              <tr className="font-bold">
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>สาขาวิชาดิจิทัลกราฟิก</td>
                <td className = "pl-6 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>ปวช.</td>
                <td className = "pl-13 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "pl-15 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>40</td>
                <td className = "p-1 border-b-1"style={{ borderColor: "rgba(0,0,0,0.2)" }}>
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
              </tr>
              <tr className="font-bold">
                <td className = "p-1 ">สาขาวิชาการตลาด</td>
                <td className = "pl-6 ">ปวช.</td>
                <td className = "pl-13 ">40</td>
                <td className = "pl-15 ">40</td>
                <td className = "p-1">
                  <button style={{ backgroundColor: '#A5D6A7', color: '#33691E', padding: '8px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>เปิดรับสมัคร</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

            </div>
        {/* กล่องเหลือง */}
        </div>
    {/* แท็กใหญ่ */}
    </div>
      
      
    </>
  );
}
export default Homeadmin;
