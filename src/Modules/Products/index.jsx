import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";
import Categories from "../../Components/Categories";

function Products() {
  // Initialize state to store the products, initially an empty array
  const [products, setProducts] = useState([]);
  // Use the useEffect hook to fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      // Fetch products from the API
      let response = await fetch("https://fakestoreapi.com/products/");
      // Parse the response as JSON
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []); // Dependency array is empty, so the effect only runs once on mount

  return (
    <div>
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 ">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          ALL PRODUCTS
        </h1>
      </div>
      {/* Conditionally render the ProductCard component or a loading message */}
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading.....</div>
      )}
    </div>
  );
}

export default Products;
