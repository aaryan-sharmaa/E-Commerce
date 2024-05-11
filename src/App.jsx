import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Modules/Home";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./Components/Products";
import ProductView from "./Modules/Product";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductView/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
