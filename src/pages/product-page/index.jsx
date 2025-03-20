import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import Header from "../../components/header";
import Product from "../../components/product";
import Button from "../../ui/button";
import { fetchData } from "../../utils/utility";

const ProductPage = () => {
  const { brandId } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await fetchData(`/api/v1/brands/${brandId}/products.json`);

    setProducts(data);
  };

  return (
    <>
      <Header />
      <div className="px-4 sm:px-6 lg:px-0">
        {products?.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <img
              src="/images/no-products.png"
              alt="No products available"
              className="w-48 h-48 object-contain lg:w-60"
            />
            <p className="text-lg font-semibold text-gray-700 mt-4">
              No Products Available
            </p>
            <p className="text-sm text-gray-500 max-w-md mt-2">
              We couldn’t find any products at the moment. Please check back
              later or explore other brands.
            </p>
            <Link to="/brands">
              <Button className="mt-4 px-6 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition">
                Explore Brands
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:mx-[115px] lg:my-12">
            {products?.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                image={product.image}
                original_price={product.original_price}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductPage;
