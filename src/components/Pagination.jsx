import React from "react";

const Pagination = ({ next, prev, page }) => {
  return (
    <>
      <div className="bg-gray-900/60 h-[50px] mx-5 my-5 flex items-center justify-center">
        <div className="flex h=full items-center gap-x-5">
          <i
            onClick={prev}
            className="fa-solid fa-arrow-left hover:text-white text-xl"
          ></i>
          <p className="hover:cursor-pointer text-xl">{page}</p>
          <i
            onClick={next}
            className="fa-solid fa-arrow-right hover:cursor-pointer hover:text-white text-xl"
          ></i>
        </div>
      </div>
    </>
  );
};

export default Pagination;
