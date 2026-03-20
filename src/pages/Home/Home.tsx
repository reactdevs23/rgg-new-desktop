import HeroSection from "@/components/Home/HeroSection/HeroSection";
import React from "react";
import classes from "./Home.module.css";
import Navbar from "@/components/Home/Navbar/Navbar";
import WhyRgg from "@/components/Home/WhyRgg/WhyRgg";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";
import JoinRgg from "@/components/Home/JoinRgg/JoinRgg";
import OurExpertise from "@/components/Home/OurExpertise/OurExpertise";
import Ecosystem from "@/components/Home/Ecosystem/Ecosystem";

const Home: React.FC = () => {
  return (
    <main className={classes.wrapper}>
      <Navbar />
      <HeroSection />
      <WhyRgg />
      <OurExpertise />
      <Ecosystem />
      <JoinRgg />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Home;
