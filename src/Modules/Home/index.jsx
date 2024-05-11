import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import Product from "../../Components/Products";
import StatCard from "../../Components/Statstics";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 ">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <Product products={products} />
      ) : (
        <div>Loading.....</div>
      )}
      <Product />
      <StatCard />
    </>
  );
}

export default Home;
