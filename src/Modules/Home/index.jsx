import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import Product from "../../Components/ProductCard";
import StatCard from "../../Components/Statstics";
import ProductCard from "../../Components/ProductCard";  
import Categories from "../../Components/Categories";

function Home() {
  // Initialize an empty array to store products
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      // Fetch products from API with a limit of 12
      let response = await fetch("https://fakestoreapi.com/products?limit=12");
      const data = await response.json();
      console.log(data);
      // Update the products state with the fetched data
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <Categories />  
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 ">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      {/* Conditionally render ProductCard or a loading message */}
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading.....</div>
      )}
      <StatCard />
      <Product />
    </>
  );
}

export default Home;
