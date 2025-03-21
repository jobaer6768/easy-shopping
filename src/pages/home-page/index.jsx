import PropTypes from "prop-types";

import Brand from "../../components/brand";
import Header from "../../components/header";

const HomePage = ({ brands }) => {
  return (
    <div>
      <Header />
      <Brand brands={brands} />
    </div>
  );
};

HomePage.propTypes = {
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

export default HomePage;
