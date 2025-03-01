import PropTypes from "prop-types";

import Divider from "../../ui/divider";
import Title from "../../ui/title";

// TODO: Responsive for mobile and tablet
const BrandItem = ({ name }) => {
  return (
    <div className="lg:px-[346px]">
      <div className=" flex flex-col gap-4 cursor-pointer hover:bg-[#f4f4f4]">
        <Title className="text-[14px] font-light mt-3 lg:pl-4">{name}</Title>
        <Divider />
      </div>
    </div>
  );
};

BrandItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BrandItem;
