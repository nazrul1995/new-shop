import React from "react";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="bg-black py-4 text-white">
        <div className="w-11/12 mx-auto flex justify-between items-center">
          <div></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, iure.</p>
          <div className="flex gap-5">
            <span>English</span>
            <select className="select select-xs select-bordered bg-white text-black">
              <option>EN</option>
              <option>BN</option>
            </select>
          </div>
        </div>

      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
