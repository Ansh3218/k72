import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = hours % 12 || 12;
    return `${String(hours).padStart(2, "0")}: ${String(minutes).padStart(
      2,
      "0"
    )}: ${String(seconds).padStart(2, "0")}`;
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="w-full h-96 p-5 uppercase text-6xl font-medium bg-white text-black flex flex-col justify-between max-sm:p-2">
        <div className="flex justify-between">
          <div className="flex gap-x-2 max-[900px]:flex-col max-[900px]:gap-y-2">
            <p className="rounded-full border-2 border-black px-8 py-1 hover:text-[white] hover:bg-black cursor-pointer transition-all duration-200 max-sm:px-5 max-sm:py-0 max-sm:text-4xl">
              fb
            </p>
            <p className="rounded-full border-2 border-black px-8 py-1 hover:text-[white] hover:bg-black cursor-pointer transition-all duration-200 max-sm:px-5 max-sm:py-0 max-sm:text-4xl">
              ig
            </p>
            <p className="rounded-full border-2 border-black px-8 py-1 hover:text-[white] hover:bg-black cursor-pointer transition-all duration-200 max-sm:px-5 max-sm:py-0 max-sm:text-4xl">
              in
            </p>
            <p className="rounded-full border-2 border-black px-8 py-1 hover:text-[white] hover:bg-black cursor-pointer transition-all duration-200 max-sm:px-5 max-sm:py-0 max-sm:text-4xl">
              be
            </p>
          </div>
          <div className="">
            <Link to={"/contact"}>
              <p className="rounded-full border-2 border-black px-[3vw] py-1 hover:text-[white] hover:bg-black cursor-pointer transition-all duration-200 max-sm:px-5 max-sm:py-0 max-sm:text-4xl">
                contact
              </p>
            </Link>
          </div>
        </div>
        <div className="w-full text-[15px] flex justify-between items-center font-[poppins] font-bold max-sm:items-end">
          <div className="">
            <p className="hover:scale-95 transition-all duration-150 text-xl cursor-pointe max-sm:text-xs">
              MONTREAL_{formatTime(time)}{" "}
            </p>
          </div>
          <div className="flex gap-x-8 max-sm:flex-col max-sm:gap-y-3 max-sm:text-center max-sm:text-xs">
            <p className="hover:scale-105 transition-all duration-150 cursor-pointer">
              Privacy policy
            </p>
            <p className="hover:scale-105 transition-all duration-150 cursor-pointer">
              privacy notice
            </p>
            <p className="hover:scale-105 transition-all duration-150 cursor-pointer">
              ethics report
            </p>
            <p className="hover:scale-105 transition-all duration-150 cursor-pointer">
              consent choices
            </p>
          </div>
          <div className="">
            <p
              className="hover:scale-95 transition-all duration-150 text-xl cursor-pointer max-sm:text-xs"
              onClick={scrollToTop}
            >
              Back to top
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
