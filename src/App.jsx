import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Modules/Home";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import ProductView from "./Modules/Product";
import Products from "./Modules/Products";
import CategoryProducts from "./Modules/CategoryProducts";
import Cart from "./Modules/Cart";

function App() {
  return (
    <>
      <Header />
       <Routes>  {/* Define routes for the application */}
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductView />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="*" element={<div>404</div>} />  {/* Define route for 404 error page */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
