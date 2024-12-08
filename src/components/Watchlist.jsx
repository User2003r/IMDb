import React, { useEffect, useState } from "react";
import generes from "../utility/generes";

const Watchlist = ({ watchlist, setWatchList }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const sortIncOrder = () => {
    let sortIn = watchlist.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    setWatchList([...sortIn]);
  };

  const sortDecOrder = () => {
    let sortDec = watchlist.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    setWatchList([...sortDec]);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-y-10 items-center px-5 py-7">
        <div>
          <input
            type="text"
            placeholder="Search movie"
            onChange={handleChange}
            className="outline-none border px-1 py-1 bg-gray-300 w-[15rem] text-black"
          />
        </div>
        <div className="flex justify-center items-center w-[100%]">
          <table className="border w-[70%] text-center bg-gray-100">
            <thead>
              <tr className="border h-[30px]">
                <th className="w-[20rem]">Name</th>
                <th className="flex gap-x-2 justify-center items-center">
                  <i
                    className="fa-solid fa-arrow-up hover:cursor-pointer"
                    onClick={sortDecOrder}
                  ></i>
                  <p>Ratings</p>
                  <i
                    className="fa-solid fa-arrow-down hover:cursor-pointer"
                    onClick={sortIncOrder}
                  ></i>
                </th>
                <th>Popularity</th>
                <th>Genere</th>
              </tr>
            </thead>
            <tbody>
              {watchlist
                .filter((movieObj) => {
                  return movieObj.title
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase());
                })
                .map((data) => {
                  return (
                    <tr className="border" key={data.id}>
                      <td className="text-center flex items-center h-[8rem]">
                        <div className="w-[100px] h-[100px] ml-10">
                          <img
                            className="h-[100%] rounded-lg"
                            src={`https://image.tmdb.org/t/p/original//${data.poster_path}`}
                            alt="Poster"
                          />
                        </div>
                        <p>{data.title}</p>
                      </td>
                      <td>{data.vote_average}</td>
                      <td>{data.popularity}</td>
                      <td>
                        {data.genre_ids.map((id) => {
                          return <p className="my-2">{generes[id]}</p>;
                        })}
                      </td>
                      <td className="text-red-500 hover:cursor-pointer">
                        Delete
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Watchlist;
