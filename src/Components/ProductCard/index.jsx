import React from "react";
import { Link } from "react-router-dom";

// Functional component that accepts a 'products' prop, defaulting to an empty array if not provided
function ProductCard({ products = [] }) {
  return (
    <section className="text-gray-600 body-font"> 
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap -m-4">
        {/* Map through the products array and render a Link component for each product */}
          {products.map((product) => {
            console.log(product, "product");
            const { id, title, price, description, category, image } = product;
            return (
              // Link component that wraps the product details, using the product ID in the route
              <Link to={`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={title}
                    className=" object-contain   object-center w-full h-full block"
                    src={image}
                  />
                </a>
                <div className="mt-4 text-start">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {title}
                  </h2>
                  <p className="mt-1 text-md font-semibold">${price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
