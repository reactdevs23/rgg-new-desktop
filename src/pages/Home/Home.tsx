import HeroSection from "@/components/Home/HeroSection/HeroSection";
import React from "react";
import classes from "./Home.module.css";
import Navbar from "@/components/Navbar/Navbar";
import WhyRgg from "@/components/Home/WhyRgg/WhyRgg";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";
import JoinRgg from "@/components/Home/JoinRgg/JoinRgg";
import OurExpertise from "@/components/Home/OurExpertise/OurExpertise";
import Ecosystem from "@/components/Home/Ecosystem/Ecosystem";
import OverlappingCards from "@/components/Home/WhyRgg/OverlappingCards/OverlappingCards";
import HoverStack from "@/components/Home/OurExpertise/HoverStack/HoverStack";

const Home: React.FC = () => {
  return (
    <main className={classes.wrapper}>
      <HeroSection />
      <WhyRgg />
      <OurExpertise />
      <Ecosystem />
      <JoinRgg />
      <ContactUs />
      <Footer />
      {/* <OverlappingCards /> */}
    </main>
  );
};

export default Home;
