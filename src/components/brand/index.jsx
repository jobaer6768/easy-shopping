import PropTypes from "prop-types";
import { Link } from "react-router";

import Button from "../../ui/button";

const Brand = ({ brands }) => {
  return (
    <>
      {/* Brand Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4 lg:my-10 px-4 sm:px-6 lg:px-0">
        {brands?.slice(0, 4).map((brand) => (
          <img
            key={brand.id}
            src={brand.logo}
            alt={brand.name}
            className="w-full h-auto object-contain mx-auto cursor-pointer"
          />
        ))}
      </div>

      {/* Shop Button */}
      <div className="flex justify-center mt-6">
        <Link to="/brands">
          <Button
            variant="outline"
            className="w-[180px] sm:w-[200px] md:w-[220px] font-medium"
          >
            Shop Men&apos;s Brands
          </Button>
        </Link>
      </div>
    </>
  );
};

Brand.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      description: PropTypes.string,
      date_added: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Brand;
