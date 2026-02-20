import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
