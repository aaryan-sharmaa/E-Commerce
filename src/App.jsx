import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Modules/Home";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import ProductView from "./Modules/Product";
import Products from "./Modules/Products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductView/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="*" element={<div>404</div>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
