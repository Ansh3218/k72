import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <>
      <div className="w-screen h-full fixed top-0">
        <Video />
      </div>
      <div className="w-screen h-screen relative flex flex-col justify-between overflow-hidden overflow-y-scroll gap-y-11">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </>
  );
};

export default Home;
