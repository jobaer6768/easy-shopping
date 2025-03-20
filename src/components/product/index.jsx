import PropTypes from "prop-types";

const Product = ({ name, image, original_price }) => {
  return (
    <div className="cursor-pointer py-4 flex flex-col gap-2 w-full sm:max-w-[250px] md:max-w-[280px] lg:max-w-[315px]">
      <img
        src={image}
        alt={name}
        className="w-full h-auto object-cover sm:h-[350px] md:h-[380px] lg:h-[405px]"
      />
      <p className="text-[14px] sm:text-[15px] font-[inter]">{name}</p>
      <p className="text-[15px] sm:text-[16px] font-[inter] font-medium">
        $ {original_price.toFixed(2)}
      </p>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  original_price: PropTypes.number.isRequired,
};

export default Product;
