import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Notification from "../components/Home/Notification";
import MainBanner from "../components/Home/MainBanner";
import ServiceCard from "../components/Home/ServiceCard";
import AboutUS from "../components/Home/AboutUS";
import OurServices from "../components/Home/OurServices";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Footer from "../components/Home/Footer";
import FooterSection from "../components/Home/FooterSection";
import AreasWeServe from "../components/Home/AreasWeServe";
import Committed from "../components/Home/Committed";
import Reviews from "../components/Home/Reviews";
import Formulario from "../components/Home/Formulario";

// ..
AOS.init();

function Home() {
  return (
    <div>
      <Notification />
      <NavBar />
      <MainBanner />
      <ServiceCard />
      <AboutUS />
      <OurServices />
      <Reviews />

      <Committed />
      <AreasWeServe />
      <FooterSection />
      <Footer />
    </div>
  );
}

export default Home;
