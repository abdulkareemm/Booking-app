import React from "react";
import { Logo, MenuIcon, Search, UserIcon } from "../../Assets";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="p-4 flex justify-between">
      {/* Logo */}
      <div className="">
        <a href="/" className="flex items-center gap-1 ">
          <Logo />
          <span className="font-bold text-xl">airbnb</span>
        </a>
      </div>
      {/* Add Guest */}
      <div className="flex border gap-2  border-gray-300 py-2 px-4 rounded-full shadow-md shadow-gray-300">
        <div className="">Any where</div>
        <div className="border-l border-gray-300 "></div>
        <div className="">Any week</div>
        <div className="border-l border-gray-300 "></div>

        <div className="">Add guests</div>
        <button className="bg-primary text-white p-1 rounded-full">
          <Search />
        </button>
      </div>
      {/* Add Guest */}
      <div className="flex items-center border gap-2 border-gray-300 py-2 px-4 rounded-full">
        <MenuIcon />
        <Link to = "/login" className="bg-gray-500 text-white p-1 border border-gray-500 rounded-full overflow-hidden w-6 h-6 ">
          <UserIcon />
        </Link>
      </div>
    </header>
  );
};

export default Header;
