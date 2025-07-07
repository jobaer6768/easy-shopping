import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../../ui/button";

const ProductInfo = ({
  brand,
  name,
  price,
  originalPrice,
  colors,
  sizes,
  description,
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="space-y-6">
      {/* Brand & Name */}
      <div>
        <h1 className="text-2xl font-bold">{brand}</h1>
        <h2 className="text-xl">{name}</h2>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold">${price.toFixed(2)}</span>
        {originalPrice && (
          <span className="text-gray-500 line-through">
            ${originalPrice.toFixed(2)}
          </span>
        )}
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="font-medium mb-2">Color: {selectedColor.name}</h3>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color.id}
              className={`w-8 h-8 rounded-full border ${
                selectedColor.id === color.id
                  ? "border-black"
                  : "border-transparent"
              }`}
              style={{ backgroundColor: color.value }}
              onClick={() => setSelectedColor(color)}
              aria-label={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <h3 className="font-medium mb-2">Size: {selectedSize}</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`px-4 py-2 border ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <button className="mt-2 text-sm underline">Size Guide</button>
      </div>

      {/* Add to Bag */}
      <Button className="w-full py-3 bg-black text-white hover:bg-gray-800">
        Add to Bag
      </Button>

      {/* Description */}
      <div className="pt-4 border-t">
        <h3 className="font-medium mb-2">Product Details</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductInfo;
