//@refresh
"use client";
import { animationCreate } from "@/utils/utils";
import { useEffect } from "react";
// import Footer from './footer/Footer';
import BackToTop from "@/components/common/backToTop/BacktoTop";
import OrderTrackModal from "@/components/profile/studentProfile/OrderTrackModal";
import { childrenType } from "@/interFace/interFace";
import { usePathname } from "next/navigation";
import FooterThree from "./footers/footer-three";
import HeaderTwo from "./headers/header-two";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

// import HeaderTwo from './header/HeaderTwo';

const Wrapper = ({ children }: childrenType) => {
  const pathName = usePathname();
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 200);
  }, []);

  return (
    <>
      <BackToTop />

      <HeaderTwo />

      {children}

      <OrderTrackModal />

      <FooterThree />
    </>
  );
};

export default Wrapper;
