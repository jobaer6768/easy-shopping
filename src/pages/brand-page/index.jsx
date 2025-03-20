import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import BrandItem from "../../components/brandItem";
import Divider from "../../ui/divider";
import Title from "../../ui/title";

const BrandPage = ({ brands }) => {
  const [groupedBrands, setGroupedBrands] = useState({});

  useEffect(() => {
    const sortedBrands = [...brands].sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );

    const grouped = sortedBrands.reduce((acc, brand) => {
      const firstLetter = brand.name[0].toUpperCase();
      if (!acc[firstLetter]) acc[firstLetter] = [];

      acc[firstLetter].push(brand);

      return acc;
    }, {});

    setGroupedBrands(grouped);
  }, [brands]);

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* heading */}
      <Title className="text-center text-xl md:text-2xl font-bold">
        A-Z Men&apos;s Brands
      </Title>
      <Divider className="my-2 mb-4" />

      {/* A-Z Navigation */}
      <div className="text-[12px] md:text-sm flex justify-center space-x-2 md:space-x-6 mb-6">
        {Object.keys(groupedBrands).map((letter) => (
          <a
            key={letter}
            href={`#${letter}`}
            className="hover:underline hover:text-base cursor-pointer"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Brands List */}
      {Object.keys(groupedBrands).map((letter) => (
        <div key={letter} id={letter} className="mb-8">
          {/* Section Header */}
          <div className="bg-gray-100 text-lg font-medium py-2 px-4">
            {letter}
          </div>

          {/* Brand Items */}
          {groupedBrands[letter].map((brand) => (
            <BrandItem key={brand.id} id={brand.id} name={brand.name} />
          ))}
        </div>
      ))}
    </div>
  );
};

BrandPage.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BrandPage;
