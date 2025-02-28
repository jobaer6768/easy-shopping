import PropTypes from "prop-types";

const NavLink = ({ children, className }) => {
  // TODO: This should Link
  return <div className={`${className}`}>{children}</div>;
};

NavLink.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default NavLink;
