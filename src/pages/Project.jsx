import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Outlet } from "react-router-dom";

const images = [
  {
    image1:
      "../../src/assets/Images/100temps_Thumbnail-1280x960.jpg",
    url1: "1",
    image2:
      "../../src/assets/Images/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png",
    url2: "2",
  },
  {
    image1:
      "../../src/assets/Images/BEST_site_menu_Thumbnail-1280x960.jpg",
    url1: "3",
    image2: "../../src/assets/Images/CF_thumbnail-1280x960.jpg",
    url2: "4",
  },
  {
    image1:
      "../../src/assets/Images/chalaxeur-thumbnail_img-1280x960.jpg",
    url1: "5",
    image2:
      "../../src/assets/Images/crisis24_behance_1920X1200_cartes-1280x960.jpg",
    url2: "6",
  },
];

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.from(".hero", {
      height: "60px",
      stagger: { amount: 0.5 },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 90%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <div className="px-[2vw] bg-black">
      {/* Heading */}
      <div className="pt-[20vh] md:pt-[30vh] lg:pt-[45vh]">
        <h2 className="font-[arial] text-[10vw] md:text-[8vw] lg:text-[9.5vw] uppercase leading-[1.1] text-white">
          Projets
        </h2>
      </div>

      {/* Project List */}
      <div className="lol mt-[5vh]">
        {images.map((elem, idx) => (
          <div
            key={idx}
            className="hero w-full mb-[2vh] flex flex-row gap-[2vw] h-[75vh] max-sm:h-[45vh]"
          >
            <ProjectCard
              image1={elem.image1}
              image2={elem.image2}
              url1={elem.url1}
              url2={elem.url2}
            />
          </div>
        ))}
      </div>

      {/* Nested route */}
      <Outlet />
    </div>
  );
};

export default Project;
