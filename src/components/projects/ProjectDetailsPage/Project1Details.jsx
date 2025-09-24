import React from "react";
import projectData from "./ProjectData";
import { useParams } from "react-router-dom";
const Project1Details = () => {
  const { id } = useParams();
  const data = projectData.find((p) => p.id === parseInt(id));

  if (!data) {
    return <h1 className="text-white text-2xl">Project not found</h1>;
  }
  return (
    <>
      <div className="w-full h-auto font-[arial] relative">
        <div className="pt-[25vh] w-full flex items-start justify-center gap-x-[20vw]">
          <div className="text-lg flex items-center font-bold font-[poppins] gap-x-2">
            <span className="w-3 h-3 rounded-full bg-white"></span>
            <p> {data.date}</p>
          </div>
          <div className="text-[9vw] font-bold uppercase w-[60vw] leading-[8vw]">
            <p>{data.title}</p>
            <button className="text-[5.5vw] uppercase border-2 border-white rounded-full px-7 leading-[6.5vw] cursor-pointer hover:bg-white hover:text-black">
              {data.btn}
            </button>
          </div>
        </div>
        <div className="w-full h-full pt-11">
          <div className="flex justify-between w-full h-screen relative p-4 max-md:h-[50vh]">
            <h1 className="text-[10vw] leading-[9vw] w-[50%] uppercase pt-[8rem] max-md:text-[16vw] max-md:leading-[15vw] max-md:pt-0">
              {data.secondTitle}
            </h1>
            <div className="absolute right-0 top-0 -z-10  w-[60%] h-full max-md:w-[100%] max-md:h-[50vh]">
              <img
                className="rounded-4xl h-full w-full object-cover"
                src={data.image}
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center max-md:h-1/2 py-11">
            <h1 className="text-[3vw] w-[70%] leading-[4vw] pt-4 max-md:w-full max-md:text-[7vw] max-md:leading-[8vw] max-md:p-2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {data.desc}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project1Details;
