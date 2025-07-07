import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/utility";
import Header from "../../components/header";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchData(`/api/v1/products/${productId}.json`);
        console.log("API Response:", data);

        if (!data) {
          throw new Error("Product data not found");
        }

        // Transform API data to match component expectations
        const transformedProduct = {
          ...data,
          brand: data.brand.name, // Extract brand name from object
          price: data.sale_price, // Map sale_price to price
          originalPrice: data.original_price,
          images: [data.image], // Create array from single image
          colors: [], // Add empty array if your API doesn't provide colors
          sizes: ["XS", "S", "M", "L", "XL"], // Default sizes
          description: "No description available", // Default description
        };

        setProduct(transformedProduct);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [productId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductGallery images={product.images} />
          <ProductInfo
            brand={product.brand}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            colors={product.colors}
            sizes={product.sizes}
            description={product.description}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
