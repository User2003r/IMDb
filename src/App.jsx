import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

function App() {
  let [watchList, setWatchList] = useState([]);

  const handleWatchList = (movieObj) => {
    let newWathcList = [...watchList, movieObj];
    localStorage.setItem("movie", JSON.stringify(newWathcList));
    setWatchList(newWathcList);
  };

  const handleRemoveMovie = (movieObj) => {
    let filterWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("movie", JSON.stringify(filterWatchList));
    setWatchList(filterWatchList);
  };

  useEffect(() => {
    let dataFromLocalStorage = localStorage.getItem("movie");
    if (!dataFromLocalStorage) return;
    setWatchList(JSON.parse(dataFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleWatchList={handleWatchList}
                  removeMovie={handleRemoveMovie}
                  watchList={watchList}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist watchlist={watchList} setWatchList={setWatchList} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
