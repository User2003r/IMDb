import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="h-[55vh] bg-cover bg-no-repeat flex items-end"
        style={{
          backgroundImage: `url(https://i.pinimg.com/originals/79/f4/b0/79f4b088ef0bc9f96574de8f0cfc26aa.jpg)`,
        }}
      >
        <div className="text-xl  w-full text-white bg-gray-900/60 h-[40px] flex items-center justify-center">
          <h1>Avengers</h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
