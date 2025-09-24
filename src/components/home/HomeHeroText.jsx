import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <>
      <div className="">
        <div className="text-[9.5vw] uppercase text-center leading-[8vw] pt-16 font-[arial] max-md:text-[15vw] max-md:leading-[15vw]">
          <div>The spark</div>
          <div className="flex text-center justify-center gap-x-2.5">
            Who{" "}
            <div className="w-[15vw] h-[7vw] overflow-hidden rounded-full">
              <div className="w-full h-full">
                <Video />
              </div>
            </div>{" "}
          </div>
          <div>generates</div>
          <div>
            there <br /> creativity
          </div>
        </div>
        <div className="w-full h-auto flex justify-end font-[arial] leading-5 p-10">
          <p className="w-1/4 text-end text-[14px] font-bold max-md:w-1/2 max-sm:w-full max-sm:text-center">
            K72 is an agency that thinks through every action to nurture the
            brand. Tomorrow, in 5 months, and in 5 years. We seek the friction
            that creates the spark to generate emotion. To ensure an honest
            relationship, we are unfiltered, we say what needs to be said, we do
            what needs to be done.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeHeroText;
