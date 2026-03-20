import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";

import clsx from "clsx";

import MainLayout from "./Layout/MainLayout";

import NotFound from "./components/common/NotFound/NotFound";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <main className={clsx(classes.mainWrapper, "myBody")}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;
