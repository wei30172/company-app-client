import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Products, NotFound } from "./pages";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:name" element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
