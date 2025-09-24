import React from "react";

const ContactHeading = () => {
  return (
    <>
      <div className="">
        <div className="w-full h-auto font-[arial] text-white flex items-end px-10 pb-16 max-sm:px-2 max-sm:h-[100vh]">
          <div className="w-1/6 text-center max-sm:text-xs max-sm:w-1/3">
            On a screen or an office. At home. At ours. Everywhere.
          </div>
          <div className="uppercase text-[10vw] text-center w-[80%] leading-[10vw] max-sm:pb-[20vh] max-sm:text-[15vw] max-sm:leading-[15vw] max-sm:absolute max-sm:left-[10vw]">
            for <br /> talk about your project
          </div>
          <div className="w-1/6 max-sm:absolute  max-sm:right-0  max-sm:w-1/3 max-sm:text-xs">
            525 Av. Viger O-Suite 400 Montreal, QC H2Z 1G6
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 5s linear infinite;
        }
      `}</style>
    </>
  );
};

export default ContactHeading;
