import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Modules/Home";
import Footer from "./Components/Footer";
import { Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
