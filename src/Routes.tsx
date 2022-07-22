import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Products, Login, Signup, Orders, Order } from "./pages";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/:orderId" element={<Order />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default MainRoutes;
