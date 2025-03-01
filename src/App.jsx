import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import BrandPage from "./pages/brand-page";
import HomePage from "./pages/home-page";

import { fetchData } from "./utils/utility";

const App = () => {
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
    <Routes>
      <Route path="/" element={<HomePage brands={brands} />} />
      <Route path="/brands" element={<BrandPage brands={brands} />} />
    </Routes>
  );
};

export default App;
