import React from "react";
import Footer from "./footer";

const Contactus = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#DAFCFF] via-[#EFF2FF] to-[#F2D9E6] ">
      {/* Top Header Bar */}
      <div className="bg-[#183C8B] h-3 w-full"></div>

      {/* Page Title */}
      <div className="text-center  ">
        <div className="bg-white shadow-md py-4 px-6 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-[#2A66C4]">CONTACT US</h1>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-[1200px] mx-auto px-6 space-y-16 text-black mt-20 ">
        <section>
          <h2 className="text-[32px] font-semibold mb-3 flex justify-center items-center ">
            Get in Touch
          </h2>
          <p className="text-[18px] leading-[32px] flex  justify-center items-center">
            If you have any questions or need further assistance, please feel
            free to reach out to us.
          </p>
          <ol className="list-decimal pl-5 space-y-4 text-[18px] leading-8 pl-110 pt-10 pb-100" >
            <li>Phone: 0000000000</li>
            <li>Email: contact@VyralAI.com</li>
          </ol>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Contactus;
