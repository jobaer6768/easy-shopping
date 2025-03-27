import PropTypes from "prop-types";

import Brand from "../../components/brand";
import Header from "../../components/header";

const HomePage = ({ menBrands, womenBrands }) => {
  return (
    <div>
      <Header />
      <Brand brands={womenBrands} type="women" />
      <Brand brands={menBrands} type="men" />
    </div>
  );
};

HomePage.propTypes = {
  menBrands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      description: PropTypes.string,
      date_added: PropTypes.string.isRequired,
    })
  ).isRequired,
  womenBrands: PropTypes.arrayOf(
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
