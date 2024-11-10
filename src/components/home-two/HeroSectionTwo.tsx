import Image from "next/image";
import Link from "next/link";

import bannerFive from "../../../public/assets/img/banner/banner-5.jpg";
import bannerOne from "../../../public/assets/img/banner/banner-shape-2.png";
import bannerThree from "../../../public/assets/img/banner/banner-shape-2.png";
import bannerFour from "../../../public/assets/img/banner/curved-arrow.png";
import bannerTwo from "../../../public/assets/img/banner/discount-shape.png";

const HERO_H2_TEXT = `Éco Plantes & Décos`;
const HERO_BANNER_TEXT = `🌿 Plantes & déco éco-responsables pour vos espaces. Inspirez-vous pour un intérieur sain et vert 🌱`;

const BTN_SHOP_NOW = `Shopper`;

const HeroSectionTwo = () => {
  return (
    <section className="bd-banner__area grey-bg banner-height-2 d-flex align-items-center p-relative">
      <div className="bd-banner__shape-1">
        <Image
          src={bannerOne}
          style={{ width: "100%", height: "auto" }}
          alt="banner-shape"
        />
      </div>
      {/* <div className="bd-banner__discount-shape">
        <Image
          src={bannerTwo}
          style={{ width: "100%", height: "auto" }}
          alt="discount-shape"
        />
        <div className="discount-text">
          <span>50%</span>off
        </div>
      </div> */}
      <div className="container">
        <div className="row align-items-center">
          <div className="bd-singel__banner mt-70 d-flex align-items-center">
            <div className="col-xl-7 col-lg-6 col-md-6 col-12">
              <div className="bd-banner__content__wrapper p-relative">
                <div className="bd-banner__text-shape">
                  <Image
                    src={bannerThree}
                    style={{ width: "100%", height: "auto" }}
                    alt="banner-shape"
                  />
                </div>
                <div className="bd-banner__btn-shape">
                  <Image
                    src={bannerFour}
                    style={{ width: "100%", height: "auto" }}
                    alt="curved-arrow"
                  />
                </div>
                <div className="bd-banner__content-2">
                  <h2>
                    {HERO_H2_TEXT}
                  </h2>
                  <p>
                    {HERO_BANNER_TEXT}
                  </p>
                  <div className="bd-banner__btn">
                    <Link className="bd-bn__btn-1" href="/shop">
                      {BTN_SHOP_NOW}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="bd-banner__thumb">
                <Image
                  src={bannerFive}
                  style={{ width: "100%", height: "auto" }}
                  alt="banner-3.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTwo;
