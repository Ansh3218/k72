import React from "react";
import BlogData from "./BlogData";

const BlogStructure = () => {
  return (
    <>
      <div className="blog w-full h-auto font-[arial]">
        {/* Header */}
        <div className="flex items-center gap-x-2 py-[25vh] w-full pl-[20vw] max-sm:pl-[5vw] max-sm:py-[10vh]">
          <span className="w-3 h-3 flex items-center bg-white rounded-full"></span>
          <h2 className="text-xl max-sm:text-lg">Blog</h2>
        </div>

        {/* Blog Content */}
        <div className="w-full h-full text-white">
          <div className="flex h-full justify-between border-t pt-10 max-sm:flex-col max-sm:gap-y-10">
            {BlogData.map((data, index) => (
              <div key={index} className="max-sm:w-full">
                {/* Image */}
                <div className="w-full h-[65%] overflow-hidden rounded-4xl p-2 max-sm:h-[200px]">
                  <img
                    src={data.video}
                    className="w-full h-full object-cover transition-transform duration-500 cursor-pointer hover:scale-110"
                  />
                </div>

                {/* Date */}
                <div className="pl-5 flex items-center gap-x-2 max-sm:pl-2">
                  <span className="w-3 h-3 flex items-center bg-white rounded-full"></span>
                  {data.date}
                </div>

                {/* Title */}
                <div className="pl-5 py-5 text-3xl w-[60%] uppercase max-sm:w-full max-sm:text-xl max-sm:py-3 max-sm:pl-2">
                  {data.title}
                </div>

                {/* Button */}
                <div className="pl-6 ml-5 mb-32 p-3 border-2 border-white rounded-[5px] w-1/5 hover:bg-white hover:text-black cursor-pointer max-sm:w-1/2 max-sm:ml-2 max-sm:mb-10">
                  {data.btn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogStructure;
