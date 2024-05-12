import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard";


function CategoryProducts () {
  // Use the useParams hook to get the category name from the URL
    const { name } = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
          // Fetch products from the fakestoreapi based on the category name
          let response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
          const data = await response.json();
          console.log(data);
          setProducts(data);
        };
        fetchProducts();
      }, []);

       // If there are no products, display a loading message
      if (products.length === 0) return
        <div>Loading.....</div>
      

    return (
        <ProductCard products={products}/>
    )
}

export default CategoryProducts;

