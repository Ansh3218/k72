import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const PageRef = useRef(null);
  const currentPath = useLocation(null).pathname;
  const TransitionRef = useRef(null);

  useGSAP(() => {
    let transtionTimeline = gsap.timeline();
    transtionTimeline.to(TransitionRef.current, {
      display: "block",
    });
    transtionTimeline.from(".stairs", {
      height: "0%",
      stagger: {
        amount: -0.3,
      },
    });
    transtionTimeline.to(".stairs", {
      y: "100%",
      stagger: {
        amount: 0.3,
      },
    });
    transtionTimeline.to(TransitionRef.current, {
      display: "none",
    });
    transtionTimeline.to(".stairs", {
      y: "0%",
    });
    gsap.from(PageRef.current, {
      opacity: 0,
      delay: 1.3,
      scale: 1.3,
    });
  }, [currentPath]);
  return (
    <>
      <div className="">
        <div
          ref={TransitionRef}
          className="w-full h-screen fixed bottom-0 z-20"
        >
          <div className="h-full w-full flex">
            <div className="stairs w-1/2 h-full bg-gray-200"></div>
            <div className="stairs w-1/2 h-full bg-gray-200"></div>
            <div className="stairs w-1/2 h-full bg-gray-200"></div>
            <div className="stairs w-1/2 h-full bg-gray-200"></div>
            <div className="stairs w-1/2 h-full bg-gray-200"></div>
          </div>
        </div>
        <div ref={PageRef} className="">
          {children}
        </div>
      </div>
    </>
  );
};

export default PageTransition;
