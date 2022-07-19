import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Products, Orders } from "./pages";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default MainRoutes;
