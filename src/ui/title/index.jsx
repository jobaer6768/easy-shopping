import PropTypes from "prop-types";

const Title = ({ children, className }) => {
  return <p className={`font-[inter] ${className}`}>{children}</p>;
};

Title.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
