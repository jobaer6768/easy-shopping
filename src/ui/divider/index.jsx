import PropTypes from "prop-types";

const Divider = ({ className }) => {
  return <div className={`w-full border border-[#f4f4f4] ${className}`}></div>;
};

Divider.propTypes = {
  className: PropTypes.string,
};

export default Divider;
