import React from "react";
import HeroVideo from "../../../src/assets/Video/83c745cf.mp4";
const Video = () => {
  return (
    <>
      <div className="w-full h-full">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src={HeroVideo}
        ></video>
      </div>
    </>
  );
};

export default Video;
