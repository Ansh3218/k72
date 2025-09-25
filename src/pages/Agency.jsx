import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

import ScrollImg1 from "../../assets/Images/imgi_1_Carl_480x640-480x640.jpg";
import ScrollImg2 from "../../assets/Images/imgi_2_Olivier_480x640-480x640.jpg";
import ScrollImg3 from "../../assets/Images/imgi_3_Lawrence_480x640-480x640.jpg";
import ScrollImg4 from "../../assets/Images/imgi_4_HugoJoseph_480x640-480x640.jpg";
import ScrollImg5 from "../../assets/Images/imgi_5_ChantalG_480x640-480x640.jpg";
import ScrollImg6 from "../../assets/Images/imgi_6_MyleneS_480x640-480x640.jpg";
import ScrollImg7 from "../../assets/Images/imgi_7_SophieA_480x640-480x640.jpg";
import ScrollImg8 from "../../assets/Images/imgi_8_Claire_480x640-480x640.jpg";
import ScrollImg9 from "../../assets/Images/imgi_9_Michele_480X640-480x640.jpg";
import ScrollImg10 from "../../assets/Images/imgi_10_MEL_480X640-480x640.jpg";
import ScrollImg11 from "../../assets/Images/imgi_11_CAMILLE_480X640_2-480x640.jpg";
import ScrollImg12 from "../../assets/Images/imgi_12_MAXIME_480X640_2-480x640.jpg";
import ScrollImg13 from "../../assets/Images/imgi_13_MEGGIE_480X640_2-480x640.jpg";
import ScrollImg14 from "../../assets/Images/imgi_14_joel_480X640_3-480x640.jpg";

const Agency = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const cardSticky = useRef(null);
  const ScrollingImgChange = [
    ScrollImg1,
    ScrollImg2,
    ScrollImg3,
    ScrollImg4,
    ScrollImg5,
    ScrollImg6,
    ScrollImg7,
    ScrollImg8,
    ScrollImg9,
    ScrollImg10,
    ScrollImg11,
    ScrollImg12,
    ScrollImg13,
    ScrollImg14,
  ];

  useEffect(() => {
    let el = sectionRef.current;
    gsap.to(el, {
      backgroundColor: "white",
      color: "black",
      duration: 10,
      ease: "back.in",
      scrollTrigger: {
        trigger: el,
        start: "top 100%",
        end: "top -50%",
        scrub: true,
      },
    });
    return () => ScrollTrigger.killAll();
  }, []);

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      // ✅ Desktop screens
      "(min-width: 1024px)": function () {
        // Image change
        ScrollTrigger.create({
          trigger: imageDivRef.current,
          start: "top 25%",
          end: "top -153%",
          scrub: 1,
          onUpdate: (self) => {
            let progress = self.progress;
            let index = Math.floor(progress * (ScrollingImgChange.length - 1));
            imageRef.current.src = ScrollingImgChange[index];
          },
        });

        // Pin main image section
        ScrollTrigger.create({
          trigger: imageDivRef.current,
          start: "top -20%",
          end: "top -153%",
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          pinType: "transform",
          anticipatePin: 1,
        });

        // Pin sticky card
        gsap.to(cardSticky.current, {
          scrollTrigger: {
            trigger: cardSticky.current,
            start: "top 20%",
            end: "top 100%",
            scrub: true,
            pin: true,
          },
        });
      },

      // ✅ Mobile screens
      "(max-width: 768px)": function () {
        // Image change (mobile ke liye chhoti values)
        ScrollTrigger.create({
          trigger: imageDivRef.current,
          start: "top 10%",
          end: "top -40%",
          scrub: 1,
          onUpdate: (self) => {
            let progress = self.progress;
            let index = Math.floor(progress * (ScrollingImgChange.length - 1));
            imageRef.current.src = ScrollingImgChange[index];
          },
        });

        // Pin main image section
        ScrollTrigger.create({
          trigger: imageDivRef.current,
          start: "top 0%",
          end: "top -40%",
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          pinType: "transform",
          anticipatePin: 1,
        });

        // Pin sticky card (mobile ke liye adjust)
        gsap.to(cardSticky.current, {
          scrollTrigger: {
            trigger: cardSticky.current,
            start: "top 10%",
            end: "top 80%",
            scrub: true,
            pin: true,
          },
        });
      },
    });
  });

  return (
    <>
      <div className="parent font-[arial]">
        <div className="w-full pt-[30vh] pl-[15vw]">
          <p className="text-lg flex items-center gap-x-2 uppercase">
            <span className="w-3 h-3 bg-white rounded-full"></span> Agency
          </p>
        </div>
        <div id="page1" className="">
          <div
            ref={imageDivRef}
            className="absolute overflow-hidden h-[18vw] rounded-xl w-[16vw] top-96 left-[23vw]"
          >
            <img
              ref={imageRef}
              className="w-full h-full object-cover"
              src={ScrollingImgChange[0]}
              alt=""
            />
          </div>
          <div className="relative">
            <div className="mt-[30vh]">
              <h1 className="text-[20vw] uppercase leading-[18vw] text-center">
                Sixty- <br /> seventh <br /> Twelve
              </h1>
            </div>
            <div className="pl-[40%] text-[2.8vw] leading-[2.8vw]">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our
                curiosity fuels our creativity. We remain humble and say no to
                big egos, even yours. A brand is alive. It has values, a
                personality, a story. If we forget that, we may make good
                numbers in the short term, but we'll kill it in the long term.
                That's why we're committed to providing perspective, to building
                influential brands.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto relative">
          <div className="w-full h-auto py-32 flex flex-col justify-center items-center space-y-10 border-b-2 border-black relative">
            {/* Marquee Top Layer - Left to Right */}
            <div className="absolute top-[140vh] left-0 w-full overflow-hidden z-50">
              <p className="whitespace-nowrap text-[10vw] font-bold animate-marquee-ltr uppercase max-sm:text-[25vw]">
                Joel{" "}
              </p>
            </div>
            <div className="absolute top-[180vh] left-0 w-full overflow-hidden z-0">
              <p className="whitespace-nowrap text-8xl font-bold animate-marquee-rtl z-30 uppercase text-[10vw] max-sm:text-[25vw]">
                letarte{" "}
                <sub className="text-lg uppercase">
                  Deputy Creative Director
                </sub>
              </p>
            </div>

            {/* Marquee Top Layer - Right to Left */}
            {/* Red Card */}
            <div className="h-[100vh] w-[35%] rounded-3xl sticky top-0 z-10 max-sm:w-full">
              <img
                className="object-cover w-full h-full rounded-3xl"
                src={ScrollImg2}
                alt=""
              />
            </div>

            {/* Blue Card */}
            <div className="h-[100vh] w-[35%] rounded-3xl sticky top-0 z-20 max-sm:w-full">
              <img
                className="object-cover w-full h-full rounded-3xl"
                src={ScrollImg4}
                alt=""
              />
            </div>
            <div className="absolute top-72 left-0 w-full overflow-hidden z-50">
              <p className="whitespace-nowrap text-[10vw] font-bold animate-marquee-ltr uppercase max-sm:text-[25vw]">
                Joel{" "}
              </p>
            </div>
            <div className="absolute top-[80vh] left-0 w-full overflow-hidden z-0">
              <p className="whitespace-nowrap text-8xl font-bold animate-marquee-rtl z-30 uppercase text-[10vw] max-sm:text-[25vw]">
                letarte{" "}
                <sub className="text-lg uppercase">
                  Deputy Creative Director
                </sub>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes marquee-ltr {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes marquee-rtl {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.animate-marquee-ltr {
  display: inline-block;
  animation: marquee-ltr 3s linear infinite;
}

.animate-marquee-rtl {
  display: inline-block;
  animation: marquee-rtl 8s linear infinite;
}
`}
      </style>
    </>
  );
};

export default Agency;
