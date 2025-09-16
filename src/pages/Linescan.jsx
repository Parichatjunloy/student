import Sidebar from "../components/Sidebar";

function Linescan() {
  const handleSaveImage = () => {
    const qrCodeImg = document.getElementById("qr-code-img");
    if (qrCodeImg) {
      const imageUrl = qrCodeImg.src;
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "qr-code.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <Sidebar />

      {/* Main content area - adjust as needed */}
      <div className="relative">
        {/* QR Code Section */}
        <div className="fixed top-85 ml-100 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <img 
            id="qr-code-img" // Add an ID here
            src="./image/qr.png" 
            alt="QR Code" 
            className="w-[350px] h-[350px] object-contain rounded-4xl" 
          />
        </div>

        <div className="fixed bottom-40 ml-100 transform -translate-x-1/2 z-10">
          <button 
            onClick={handleSaveImage} // Add the onClick event handler
            className="bg-yellow-400 px-8 py-3 rounded-lg text-black font-bold shadow-md hover:bg-yellow-500 transition duration-300"
          >
            บันทึกรูป
          </button>
        </div>

        {/* Text Section */}
        <div className="fixed top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10 text-left text-blue-950 font-bold">
          <p className="text-lg mb-2 text-[30px] ml-50">โปรดเข้ากลุ่ม LINE เพื่อใช้ในการติดต่อสื่อสารในการรับสมัคร</p>
          <p className="text-lg mb-4 text-[30px] ml-59 mt-5">ให้นักเรียน ตั้งชื่อกลุ่ม LINE โดยพิมพ์ชื่อ-นามสกุล จริง</p>
          <p className="text-sm mb-1 text-[15px] ml-70 mt-10">***กรุณาบัตรประจำตัวผู้สมัครแสดงตนและแต่งกายนักเรียนทุกครั้งที่ติดต่อต่อกับวิทยาลัย***</p>
          <p className="text-sm text-[15px] ml-85 mt-5">***หากไม่มาตามกำหนด ถือว่าสละสิทธิ์ และจะไม่นับเงิน ไม่ว่ากรณีใด***</p>
        </div>
        
      </div>

      {/* Background Elements */}
      {/* Bottom frame */}
      <div className="fixed bottom-0 left-0 w-full z-0">
        <img
          className="kroplang w-full"
          src="./image/กรอบล่าง.png"
          alt="กรอบล่าง"
        />
      </div>

      {/* Top frame */}
      <div className="fixed top-0 right-0 w-150 z-0">
        <img
          className="kropbon w-full"
          src="./image/กรอบบน.png"
          alt="กรอบบน"
        />
      </div>

      {/* Leaves */}
      <div className="fixed top-0 right-100 w-30 z-0">
        <img className="leaf w-full" src="./image/ใบไม้.png" alt="ใบไม้" />
      </div>

      <div className="fixed bottom-10 right-0 w-30 z-0">
        <img className="leaf1 w-full" src="./image/ใบไม้(1).png" alt="ใบไม้1" />
      </div>

      <div className="fixed bottom-0 left-40 w-30 z-0">
        <img className="leaf2 w-full" src="./image/ใบไม้(2).png" alt="ใบไม้2" />
      </div>
    </>
  );
}

export default Linescan;