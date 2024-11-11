"use client";

import { ALL_BLOGS_DATA } from "@/data/blog-data";

import BlogSection from "../home-three/BlogSection";
import AboutSection from "./AboutSection";
import ChooseSection from "./ChooseSection";
import FactSection from "./FactSection";
import HeroSection from "./HeroSection";
import ProductSlider from "./ProductSlider";
import ServiceSection from "./ServiceSection";

const HomeMain = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <ProductSlider />
      <ChooseSection />
      <FactSection />
      <BlogSection blogsList={ALL_BLOGS_DATA} />
    </>
  );
};

export default HomeMain;
