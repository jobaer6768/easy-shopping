import { useState } from "react";
import { Link } from "react-router";

import InputField from "../../ui/input-field";
import NavLink from "../../ui/nav-link";
import Title from "../../ui/title";

// Import icons
import { FaRegHeart, FaRegUser, FaShoppingCart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full bg-[#2d2d2d] text-white font-[inter]">
      {/* Navbar Container */}
      <div className="flex items-center justify-between py-4 px-4 lg:py-0 lg:px-24 lg:h-[72px]">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold cursor-pointer">
          <Title>Easy</Title>
        </Link>

        {/* divider */}
        <div className="lg:h-full lg:w-[2px] bg-[#4d4b4b] lg:ml-3"></div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <Link
            to="/women/products"
            className="font-medium cursor-pointer hover:bg-[#4d4b4b] px-4 py-4"
          >
            Women
          </Link>
          <Link
            to="/men/products"
            className="font-medium cursor-pointer hover:bg-[#4d4b4b] px-4 py-4"
          >
            Men
          </Link>
        </nav>

        {/* Desktop Search Bar */}
        <div className="hidden lg:flex flex-1 justify-center">
          <InputField
            type="text"
            placeholder="Search for items and brands"
            className="bg-white text-[#757575] rounded-[50px] transition-all lg:w-[795px] lg:px-3 lg:py-2"
          />
        </div>

        {/* Icons */}
        <div className="hidden lg:flex items-center space-x-4 text-xl">
          <Link to="/register">
            <span className="cursor-pointer">
              <FaRegUser />
            </span>
          </Link>
          <span className="cursor-pointer">
            <FaRegHeart />
          </span>
          <span className="cursor-pointer">
            <FaShoppingCart />
          </span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-2xl focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#2d2d2d] py-4 space-y-2">
          <NavLink
            className="block text-center text-lg hover:bg-[#4d4b4b] py-2 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Women
          </NavLink>
          <NavLink
            className="block text-center text-lg hover:bg-[#4d4b4b] py-2 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Men
          </NavLink>

          {/* Mobile Search Bar Toggle */}
          <button
            className="block w-full text-center py-2 text-lg text-white hover:bg-[#4d4b4b] mt-2 cursor-pointer"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            {searchOpen ? "Close Search" : "Search"}
          </button>

          {searchOpen && (
            <div className="flex justify-center px-4 mt-2">
              <InputField
                type="text"
                placeholder="Search..."
                className="w-full bg-white text-[#757575] rounded-[50px] px-3 py-2"
              />
            </div>
          )}

          {/* Mobile Icons */}
          <div className="flex justify-center space-x-6 mt-4 text-xl">
            <span className="cursor-pointer">
              <FaRegUser />
            </span>
            <span className="cursor-pointer">
              <FaRegHeart />
            </span>
            <span className="cursor-pointer">
              <FaShoppingCart />
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
