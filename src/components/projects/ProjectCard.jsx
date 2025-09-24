import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="flex gap-4 w-full justify-between font-[arial]">
      <Link
        to={props.url1}
        className="w-1/2 relative duration-200 transition-all hover:rounded-[30px] overflow-hidden h-full group cursor-pointer"
      >
        <img
          src={props.image1}
          className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute left-0 top-0 w-full h-full hover:bg-black/50 flex items-center justify-center transition-all duration-300">
          <p className="uppercase text-[3vw] font-bold border-[3px] border-white rounded-full px-[2vw] leading-[3.5vw] font-[arial] opacity-0 group-hover:opacity-100 transition-all text-gray-100 duration-300">
            SEE PROJECT
          </p>
        </div>
      </Link>
      <Link
        to={props.url2}
        className="w-1/2 relative duration-200 transition-all hover:rounded-[30px] overflow-hidden h-full group cursor-pointer"
      >
        <img
          src={props.image2}
          className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500"
          alt=""
        />
        <div className="absolute left-0 top-0 w-full h-full hover:bg-black/50 flex items-center justify-center transition-all duration-300">
          <p className="uppercase text-[3vw] font-bold border-[3px] border-white rounded-full px-[2vw] leading-[3.5vw] font-[arial] opacity-0 group-hover:opacity-100 transition-all text-gray-100 duration-300">
            SEE PROJECT
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
