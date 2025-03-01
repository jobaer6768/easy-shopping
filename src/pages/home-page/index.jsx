import { useEffect, useState } from "react";

import Brand from "../../components/brand";
import Header from "../../components/header";

import { fetchData } from "../../utils/utility";

const HomePage = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getBrands();
  }, []);

  const getBrands = async () => {
    const data = await fetchData("/api/v1/brands.json");

    console.log(data);

    setBrands(data);
  };

  return (
    <div>
      <Header />
      <Brand brands={brands} />
    </div>
  );
};

export default HomePage;
