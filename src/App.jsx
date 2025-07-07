import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import BrandPage from "./pages/brand-page";
import HomePage from "./pages/home-page";

import GenderProductPage from "./pages/gender-product-page";
import ProductPage from "./pages/product-page";
import { fetchData } from "./utils/utility";
import ProductDetailPage from "./pages/product-page/ProductDetail";
import RegisterPage from "./pages/RegiterPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const [menBrands, setMenBrands] = useState([]);
  const [womenBrands, setWomenBrands] = useState([]);

  useEffect(() => {
    getBrands();
  }, []);

  const getBrands = async () => {
    const men = await fetchData("/api/v1/men/brands.json");
    const women = await fetchData("/api/v1/women/brands.json");

    setMenBrands(men);
    setWomenBrands(women);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage menBrands={menBrands} womenBrands={womenBrands} />}
      />
      <Route path="/men/products" element={<GenderProductPage type="Men" />} />
      <Route
        path="/women/products"
        element={<GenderProductPage type="Women" />}
      />
      <Route
        path="/men/brands"
        element={<BrandPage brands={menBrands} type="Men" />}
      />
      <Route
        path="/women/brands"
        element={<BrandPage brands={womenBrands} type="Women" />}
      />
      <Route
        path="/men/brands/:brandId/products"
        element={<ProductPage type="men" />}
      />
      <Route
        path="/women/brands/:brandId/products"
        element={<ProductPage type="women" />}
      />
      <Route path="/products/:productId" element={<ProductDetailPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
