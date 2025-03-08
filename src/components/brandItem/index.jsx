import PropTypes from "prop-types";

import Divider from "../../ui/divider";
import Title from "../../ui/title";

const BrandItem = ({ name }) => {
  return (
    <div className="flex flex-col gap-4 cursor-pointer hover:bg-[#f4f4f4] transition-all duration-200 ease-in-out rounded-md">
      <Title className="text-sm sm:text-base font-light mt-2 pl-2 sm:mt-3 lg:pl-4">
        {name}
      </Title>
      <Divider />
    </div>
  );
};

BrandItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BrandItem;
