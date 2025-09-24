import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <>
      <div className="leading-[6vw] text-center flex items-center justify-center gap-x-5 font-[arial] max-md:flex-col max-md:gap-y-5">
        <Link
          className="text-[6.5vw] uppercase border-[3px]  border-white pt-3 px-14 rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50] transition-all duration-200 max-md:py-3"
          to={"/projects"}
        >
          Project
        </Link>
        <Link
          className="text-[6.5vw] uppercase border-[3px] border-white pt-3 px-14 rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50] transition-all duration-200 max-md:py-3"
          to={"/agency"}
        >
          Agency
        </Link>
      </div>
    </>
  );
};

export default HomeBottomText;
