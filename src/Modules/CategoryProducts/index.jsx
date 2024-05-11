import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard";


function CategoryProducts () {
    const { name } = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
          let response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
          const data = await response.json();
          console.log(data);
          setProducts(data);
        };
        fetchProducts();
      }, []);

      if (products.length === 0) return
        <div>Loading.....</div>
      

    return (
        <ProductCard products={products}/>
    )
}

export default CategoryProducts;

