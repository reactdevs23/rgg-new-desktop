import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";

import clsx from "clsx";

import MainLayout from "./Layout/MainLayout";

import NotFound from "./components/common/NotFound/NotFound";
import Home from "./pages/Home/Home";
import AdsPage from "./pages/AdsPage/AdsPage";
import BuiltForPeople from "./pages/BuiltForPeople/BuiltForPeople";
import CasinoPlatform from "./pages/CasinoPlatform/CasinoPlatform";
import Web3DevelopmentService from "./pages/Web3DevelopmentService/Web3DevelopmentService";
import Web3MarketingAgency from "./pages/Web3MarketingAgency/Web3MarketingAgency";
import RggPay from "./pages/RggPay/RggPay";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/ad-system" element={<AdsPage />} />
          <Route path="/casino-platform" element={<CasinoPlatform />} />
          <Route path="/mini-app" element={<BuiltForPeople />} />
          <Route
            path="/web3-development"
            element={<Web3DevelopmentService />}
          />
          <Route
            path="/web3-marketing-agency"
            element={<Web3MarketingAgency />}
          />{" "}
          <Route path="/rgg-pay" element={<RggPay />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
