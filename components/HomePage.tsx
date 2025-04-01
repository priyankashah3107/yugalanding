import React from "react";
import Navbar from "./Navbar";
import HomePageDesing from "./HomePageDesing";
import HerpPage from "./HerpPage";
import SuccessStory from "./SuccessStory";
import WhyChooseus from "./WhyChooseus";
import WhyChooseUs from "./WhyChooseus";
import Footer from "./Footer";
import { Testimonials } from "./Testimonials";

const HomePage = () => {
  return (
    <>
      <div
        className="h-full w-screen bg-cover bg-center m-0 p-0 absolute overflow-x-hidden"
        style={{
          backgroundImage: `url("/home.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Navbar />
        <HerpPage />
        <HomePageDesing />
        <div className="bg-white w-full">
          <SuccessStory />
        </div>
        <WhyChooseUs />
        <Testimonials />
        <Footer />
      </div>

      {/* <WhyChooseUs />
      <Testimonials />
      <Footer /> */}
    </>
  );
};

export default HomePage;
