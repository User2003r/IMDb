import React, { useState } from "react";

const MovieCard = ({
  movieObj,
  handleWatchList,
  removeMovie,
  id,
  watchList,
}) => {
  const doesContain = (movieObj) => {
    for (let i = 0; i < watchList.length; i++) {
      if (movieObj.id == watchList[i].id) return true;
    }
    return false;
  };

  return (
    <>
      <div
        className="w-[230px] h-[50vh] rounded-xl bg-cover bg-center flex items-end hover:scale-110 duration-300 hover:cursor-pointer relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original//${movieObj.poster_path})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-[40px] bg-gray-900/60 rounded-b-xl">
          <p className="text-white ">{movieObj.title}</p>
        </div>
        <div className="h-[30px] w-[30px] rounded-lg bg-gray-900 absolute top-3 right-3 text-lg flex items-center justify-center">
          {doesContain(movieObj) ? (
            <p onClick={() => removeMovie(movieObj)}>&#10060;</p>
          ) : (
            <p onClick={() => handleWatchList(movieObj)}>&#128525;</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
