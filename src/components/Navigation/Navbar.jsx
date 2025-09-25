import React, { useContext, useRef } from "react";
import LogoSvg from "../../assets/Svg/logo";
import { NavbarContext } from "../context/NavContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const GreenDivRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);

  const GreenOpen = () => {
    GreenDivRef.current.style.height = "100%";
  };
  const GreenClose = () => {
    GreenDivRef.current.style.height = "0%";
  };
  const NavOpen = () => {
    setNavOpen(true);
  };

  return (
    <>
      <div className="w-full flex justify-between fixed z-10 top-0 items-start">
        <div className="w-[7vw] max-md:w-[4rem]">
          <div className="logo w-full h-full m-3">
            <Link to={"/"}>
              <LogoSvg />
            </Link>
          </div>
        </div>
        <div
          onClick={NavOpen}
          onMouseEnter={GreenOpen}
          onMouseLeave={GreenClose}
          className="w-[16vw] bg-black relative h-[3.3vw] max-md:w-[25vw] max-md:h-[6vw] max-sm:w-[30vw] max-sm:h-[8vw]"
        >
          <div className="absolute flex flex-col justify-center gap-y-1.5 items-end w-full h-full pr-10 top-0 right-0 z-50 group cursor-pointer max-md:pr-3 max-sm:pr-2">
            <span className="group-hover:bg-[black] w-14 h-[1.5px] bg-[#F0FF7C] max-md:w-16 max-sm:w-10"></span>
            <span className="group-hover:bg-[black] w-8 h-[1.5px] bg-[#F0FF7C] max-md:w-8 max-sm:w-6"></span>
          </div>
          <div
            ref={GreenDivRef}
            className="bg-[#F0FF7C] w-full h-0 transition-all duration-150 absolute top-0"
          ></div>
          <div className="w-full h-full relative"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
