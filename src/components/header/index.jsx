import { Link } from "react-router";
import InputField from "../../ui/input-field";
import NavLink from "../../ui/nav-link";
import Title from "../../ui/title";

// import icons
import { FaRegHeart, FaRegUser, FaShoppingCart } from "react-icons/fa";

// TODO: make responsive for mobile and tablet devices
const Header = () => {
  return (
    <>
      {/* Top Part */}
      <div className="w-full bg-[#2d2d2d] font-[inter] text-white flex items-center lg:h-[72px] lg:px-24">
        <Link to="/">
          <Title className="text-2xl font-bold cursor-pointer">Easy</Title>
        </Link>

        {/* divider */}
        <div className="lg:h-full lg:w-[2px] bg-[#4d4b4b] lg:ml-3"></div>

        {/* Nav-links */}
        <div className="lg:flex lg:items-center lg:h-full">
          <NavLink className="font-medium cursor-pointer lg:hover:bg-[#4d4b4b] lg:px-4 lg:py-4">
            Women
          </NavLink>
          <NavLink className="font-medium cursor-pointer lg:hover:bg-[#4d4b4b] lg:pl-3 lg:pr-4 lg:py-4">
            Men
          </NavLink>
        </div>

        {/* input-field */}
        <InputField
          type="text"
          placeholder="Search for items and brands"
          className=" bg-white text-[#757575] rounded-[50px] transition-all  lg:w-[795px] lg:mx-3 lg:px-3 lg:py-2"
        />

        {/* icons */}
        <div className="flex items-center lg:ml-2 lg:text-xl lg:gap-4 lg:h-full">
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
    </>
  );
};

export default Header;
