import React, { useContext, useRef, useEffect } from "react";
import Img1 from "../../../public/assets/Images/imgi_21_PJC_SiteK72_Thumbnail_640x290-640x290.jpg";
import Img2 from "../../../public/assets/Images/imgi_22_WS---K72.ca---MenuThumbnail-640x290.jpg";
import LogoSvg from "../../../public/assets/Svg/logo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavbarContext } from "../context/NavContext";
import { Link } from "react-router-dom";

const FullScreenNav = () => {
  const fullNavLinkRef = useRef(null);
  const fullScreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  // Prevent body scroll when nav is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navOpen]);

  const gsapAnimation = () => {
    let mm = gsap.matchMedia();
    let transtionTimeline = gsap.timeline();

    gsap.set(".fullscreennav", {
      display: "block",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
    });

    mm.add("(max-width: 768px)", () => {
      transtionTimeline.to(".stairing", {
        delay: 0.3, // Reduced delay for faster mobile animation
        height: "100%",
        stagger: {
          amount: -0.2, // Faster stagger for mobile
        },
      });
      transtionTimeline.to(".link", {
        opacity: 1,
        rotateX: 0,
        stagger: {
          amount: 0.2,
        },
      });
      transtionTimeline.to(".navlink", {
        opacity: 1,
      });
    });

    mm.add("(min-width: 769px)", () => {
      transtionTimeline.to(".stairing", {
        delay: 0.5,
        height: "100%",
        stagger: {
          amount: -0.3,
        },
      });
      transtionTimeline.to(".link", {
        opacity: 1,
        rotateX: 0,
        stagger: {
          amount: 0.3,
        },
      });
      transtionTimeline.to(".navlink", {
        opacity: 1,
      });
    });
  };

  const gsapAnimationReverse = () => {
    let mm = gsap.matchMedia();
    let transtionTimeline = gsap.timeline();

    mm.add("(max-width: 768px)", () => {
      transtionTimeline.to(".link", {
        opacity: 0,
        rotateX: 90,
        stagger: {
          amount: 0.15, // Faster for mobile
        },
      });
      transtionTimeline.to(".stairing", {
        delay: 0.3,
        height: 0,
        stagger: {
          amount: 0.1,
        },
      });
      transtionTimeline.to(".navlink", {
        opacity: 0,
      });
      transtionTimeline.to(".fullscreennav", {
        display: "none",
      });
    });

    mm.add("(min-width: 769px)", () => {
      transtionTimeline.to(".link", {
        opacity: 0,
        rotateX: 90,
        stagger: {
          amount: 0.2,
        },
      });
      transtionTimeline.to(".stairing", {
        delay: 0.5,
        height: 0,
        stagger: {
          amount: 0.1,
        },
      });
      transtionTimeline.to(".navlink", {
        opacity: 0,
      });
      transtionTimeline.to(".fullscreennav", {
        display: "none",
      });
    });
  };

  useGSAP(() => {
    if (navOpen) {
      gsapAnimation();
    } else {
      gsapAnimationReverse();
    }
  }, [navOpen]);

  const NavLinkClose = () => {
    if (fullScreenRef.current) {
      setNavOpen(false);
    }
  };

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden h-screen w-full fixed top-0 left-0 z-[50] font-[500] text-black font-[arial]"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinkRef} className="relative">
        <div className="navlink flex w-full justify-between p-2 sm:p-3 items-start">
          <div className="w-[20vw] sm:w-[7vw]">
            <div className="logo w-full h-full m-2 sm:m-3 text-white">
              <LogoSvg />
            </div>
          </div>
          <div
            onClick={() => setNavOpen(false)}
            className="relative w-12 h-12 sm:w-20 sm:h-20 group cursor-pointer"
          >
            <div className="absolute w-[2px] h-[60px] sm:w-[3px] sm:h-[110px] origin-top -rotate-45 bg-white group-hover:bg-[#F0FF7C] transition-all duration-200"></div>
            <div className="absolute w-[2px] h-[60px] sm:w-[3px] sm:h-[110px] origin-top right-0 rotate-45 bg-white group-hover:bg-[#F0FF7C] transition-all duration-200"></div>
          </div>
        </div>
        <div className="all-links py-2 sm:py-4">
          <Link onClick={NavLinkClose} to={"/projects"}>
            <div className="link origin-top relative text-center uppercase border-t-1 border-white overflow-hidden group cursor-pointer">
              <h1 className="leading-[4rem] sm:leading-[7rem] text-white text-[10vw] sm:text-[8vw] pt-2 sm:pt-4 py-1 sm:py-2 transition-colors duration-300 group-hover:text-black">
                Projects
              </h1>
              <div className="absolute top-0 left-0 w-full h-full bg-[#F0FF7C] transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                <div className="MarqX flex items-center leading-[5rem] sm:leading-[9rem] animate-marquee">
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img1}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img2}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                </div>
                <div className="MarqX flex items-center leading-[5rem] sm:leading-[9rem] animate-marquee">
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img1}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img2}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link onClick={NavLinkClose} to={"/agency"}>
            <div className="link origin-top relative text-center uppercase border-t-1 border-white overflow-hidden group cursor-pointer">
              <h1 className="leading-[4rem] sm:leading-[7rem] text-white text-[10vw] sm:text-[8vw] pt-2 sm:pt-4 py-1 sm:py-2 transition-colors duration-300 group-hover:text-black">
                Agency
              </h1>
              <div className="absolute top-0 left-0 w-full h-full bg-[#F0FF7C] transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                <div className="MarqX flex items-center leading-[5rem] sm:leading-[9rem] animate-marquee">
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img1}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img2}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                </div>
                <div className="MarqX flex items-center leading-[5rem] sm:leading-[9rem] animate-marquee">
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img1}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img2}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link onClick={NavLinkClose} to={"/contact"}>
            <div className="link origin-top relative text-center uppercase overflow-hidden border-t-1 border-white group cursor-pointer">
              <h1 className="leading-[4rem] sm:leading-[7rem] text-white text-[10vw] sm:text-[8vw] pt-2 sm:pt-4 py-1 sm:py-2 transition-colors duration-300 group-hover:text-black">
                Contact
              </h1>
              <div className="absolute top-0 left-0 w-full h-full bg-[#F0FF7C] transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                <div className="MarqX flex items-center leading-[5rem] sm:leading-[9rem] animate-marquee">
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img1}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img2}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                </div>
                <div className="MarqX flex items-center leading-[5rem] sm:leading-[9rem] animate-marquee">
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img1}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img2}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link onClick={NavLinkClose} to={"/blog"}>
            <div className="link origin-top relative text-center uppercase border-y-1 border-white overflow-hidden group cursor-pointer">
              <h1 className="leading-[4rem] sm:leading-[7rem] text-white text-[10vw] sm:text-[8vw] pt-2 sm:pt-4 py-1 sm:py-2 transition-colors duration-300 group-hover:text-black">
                Blog
              </h1>
              <div className="absolute top-0 left-0 w-full h-full bg-[#F0FF7C] transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                <div className="MarqX flex items-center leading-[5rem] sm:leading-[9rem] animate-marquee">
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img1}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img2}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                </div>
                <div className="MarqX flex items-center leading-[5rem] sm:leading-[9rem] animate-marquee">
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img1}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                  <h1 className="whitespace-nowrap text-[10vw] sm:text-[8vw]">
                    To see everything
                  </h1>
                  <img
                    src={Img2}
                    alt=""
                    className="w-[25vw] sm:w-[15vw] h-16 sm:h-24 rounded-full shrink-0 object-cover mx-4 sm:mx-8"
                  />
                </div>
              </div>
            </div>
          </Link>
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

        .fullscreennav {
          overflow: hidden; /* Prevent internal scrolling */
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 4s linear infinite; /* Faster marquee on mobile */
          }
          .navlink {
            padding: 0.5rem; /* Reduce padding on mobile */
          }
          .all-links {
            padding-top: 0.5rem; /* Reduce top padding */
          }
        }
      `}</style>
    </div>
  );
};

export default FullScreenNav;
