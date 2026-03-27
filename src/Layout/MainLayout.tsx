import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./MainLayout.module.css";

import clsx from "clsx";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const MainLayout: React.FC = () => {
  return (
    <main className={clsx(classes.wrapper)}>
      <Navbar />
      <Outlet />

      <Footer />
    </main>
  );
};

export default MainLayout;
