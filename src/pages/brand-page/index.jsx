import PropTypes from "prop-types";

import BrandItem from "../../components/brandItem";

const BrandPage = ({ brands }) => {
  return (
    <div>
      {brands?.map((brand) => {
        return <BrandItem key={brand.id} name={brand.name} />;
      })}
    </div>
  );
};

BrandPage.propTypes = {
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

export default BrandPage;
