import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./MainLayout.module.css";

import clsx from "clsx";

const MainLayout: React.FC = () => {
  return (
    <main className={clsx(classes.wrapper)}>
      <Outlet />
    </main>
  );
};

export default MainLayout;
