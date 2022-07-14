import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Products } from "./pages";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:name" element={<Products />} />
    </Routes>
  );
};

export default MainRoutes;
