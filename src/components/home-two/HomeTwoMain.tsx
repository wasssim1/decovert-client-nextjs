import { ALL_BLOGS_DATA } from "@/data/blog-data";

import BlogSection from "../home-three/BlogSection";
import BannerSection from "./BannerSection";
import FeatureSection from "./FeatureSection";
import HeroSectionTwo from "./HeroSectionTwo";

const HomeTwoMain = () => {
  return (
    <>
      <HeroSectionTwo />
      <FeatureSection />
      <BannerSection />
      {/* <ProductSliderTwo/> */}
      {/* <CategorySection/> */}
      {/* <TrendingProducts/> */}
      {/* <BrandSlider/> */}
      <BlogSection blogsList={ALL_BLOGS_DATA} />
    </>
  );
};

export default HomeTwoMain;
