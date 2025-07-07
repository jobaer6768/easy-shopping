import { useState } from "react";
import PropTypes from "prop-types";

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 order-2 md:order-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
        {images.map((img, index) => (
          <button
            key={index}
            className={`w-16 h-16 flex-shrink-0 border ${
              selectedImage === img ? "border-black" : "border-transparent"
            }`}
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="order-1 md:order-2 flex-1">
        <img
          src={selectedImage}
          alt="Main product view"
          className="w-full h-auto max-h-[600px] object-contain"
        />
      </div>
    </div>
  );
};

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductGallery;
