import PropTypes from "prop-types";

const InputField = ({ type, placeholder, className }) => {
  return (
    <input type={type} placeholder={placeholder} className={`${className}`} />
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default InputField;
