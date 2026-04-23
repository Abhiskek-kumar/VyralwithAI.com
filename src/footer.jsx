import footerimage from "./assets/footerimage.png"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full min-h-[600px] absolute left-0  ">
      <div className="bg-[#474747] w-full h-full absolute left-0 top-0"></div>
      <Link to="/">
      <img
        src={footerimage}
        className="w-[164px] h-[73px] absolute left-[124px] top-[59px] max-w-none"
        alt="image 39"
      />
      </Link>
      <p className="text-[#FFF] font-inter text-xl font-bold leading-[35px] w-[655px] h-[70px] absolute left-[161px] top-[161px]">
      VYRALWITHAI DIGITAL SOLUTIONS PVT LTD
      </p>
      {/* <svg
        width=" "
        height="2"
        viewBox="0 0 1445 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[1445px] absolute left-[146px] top-[485px] "
      >
        <path d="M0 1H1444.93" stroke="white" strokeWidth="2" />
      </svg> */}
      <p className="text-[#FFF] font-inter text-[24px] font-bold leading-[35px] w-[212px] h-14 absolute left-[960px] top-[143px]">
        Useful links
      </p>
      <p className="text-[#FFF] font-inter text-[71px] font-medium leading-[35px] w-5 h-[62px] absolute left-[1000px] top-[196px] text-center">
        .
      </p>
      <p className="text-[#FFF] font-inter text-[71px] font-medium leading-[35px] w-5 h-[49px] absolute left-[1000px] top-[250px] text-center">
        .
      </p>
      <p className="text-[#FFF] font-inter text-[71px] font-medium leading-[35px] w-5 h-[49px] absolute left-[1000px] top-[299px] text-center">
        .
      </p>
      <p className="text-[#FFF] font-inter text-[71px] font-medium leading-[35px] w-5 h-[49px] absolute left-[1000px] top-[348px] text-center">
        .
      </p>
      <Link
      to="/contact-us"
      className="text-[#FFF] font-inter text-2xl font-medium leading-[25px] w-56 h-[25px] absolute left-[980px] top-[369px]">
        Contact Us
      </Link>
      <Link
        to="/terms-conditions"
        className="text-[#FFF] font-inter text-2xl font-medium absolute left-[1025px] top-[320px]"
      >
        Terms &amp; Conditions
      </Link>
      <Link
        to="/privacy-policy"
        className="text-[#FFF] font-inter text-2xl font-medium absolute left-[1025px] top-[272px]"
      >
        Privacy Policy
      </Link>
      <Link
      to="/about"
      className="text-[#FFF] font-inter text-2xl font-medium leading-[35px] w-[134px] h-[30px] absolute left-[1010px] top-[217px]">
        About us
      </Link>
      <p className="text-[#FFF] font-inter text-2xl leading-[35px] w-[539px] h-[35px] absolute left-[141px] top-[514px]">
        © 2026  VYRALWITHAI. All rights reserved.
      </p>
    </div>
  );
}
