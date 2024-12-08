import React from "react";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({ handleWatchList, removeMovie, watchList }) => {
  const [page, setPage] = useState(1);
  let URL = `https://api.themoviedb.org/3/movie/popular?api_key=26ba010f951fed034fdd42b56253239c&language=en-US&page=${page}
`;

  const next = () => {
    setPage(page + 1);
  };

  const prev = () => {
    if (page == 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setMovies(response.data.results);
        setPage(response.data.page);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <>
      <div>
        <h1 className="font-bold text-center mt-10">Trending Movies</h1>
        <div className="px-5 py-5 flex gap-x-5 flex-wrap gap-y-5">
          {movies.map((movieObj) => {
            return (
              <MovieCard
                key={movieObj.id}
                movieObj={movieObj}
                handleWatchList={handleWatchList}
                removeMovie={removeMovie}
                watchList={watchList}
              />
            );
          })}
        </div>
      </div>
      <Pagination next={next} prev={prev} page={page} />
    </>
  );
};

export default Movies;
