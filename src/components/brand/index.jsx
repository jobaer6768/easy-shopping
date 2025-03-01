import PropTypes from "prop-types";
import { Link } from "react-router";
import Button from "../../ui/button";

// TODO: make responsive for mobile and tablet
const Brand = ({ brands }) => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-4 lg:gap-2 lg:my-10">
        {brands?.slice(0, 4).map((brand) => {
          return <img key={brand.id} src={brand.logo} alt={brand.name} />;
        })}
      </div>
      <div className="flex justify-center">
        <Link to="/brands">
          <Button variant="outline" className="lg:w-[220px] font-medium">
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
