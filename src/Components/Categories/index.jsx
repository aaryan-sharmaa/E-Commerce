import React, { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard";

function Categories() {
  // Initialize a state variable called categories with an empty array as its initial value
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Define an async function called fetchCategories that fetches the categories from the API
    const fetchCategories = async () => {
      let response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      console.log(data);
      setCategories(data);
    };
    fetchCategories();
  }, []);

  if (categories.length === 0) {
    return <div>Loading.....</div>;
  }

  return <FeatureCard cards={categories} />;
}

export default Categories;
