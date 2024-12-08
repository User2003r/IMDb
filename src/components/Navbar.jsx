import React from "react";
import Logo from "../logo.png";
import { Link } from "react-router-dom";
import Watchlist from "./Watchlist";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center px-5 gap-10 border">
        <div className="icon">
          <img className="w-[60px]" src={Logo} alt="" />
        </div>
        <div className="links space-x-8">
          <Link to="/" className="text-blue-700 text-xl">
            Movies
          </Link>
          <Link to="/watchlist" className="text-blue-700 text-xl">
            WatchList
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
