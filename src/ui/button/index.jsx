import PropTypes from "prop-types";

const variants = {
  outline: "px-4 py-2 border border-black hover:bg-black hover:text-white",
};

const Button = ({ variant, className, children }) => {
  return (
    <button
      className={`font-[inter] uppercase cursor-pointer ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
