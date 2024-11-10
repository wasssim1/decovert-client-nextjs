import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

import thumb1 from "../../../public/assets/img/banner/banner-1.jpg";
import thumb2 from "../../../public/assets/img/banner/banner-line.png";
import HeroSlider from "./HeroSlider";

const HERO_H2_TEXT = `Plantes & Décos éco-responsables`;
const HERO_BANNER_TEXT = `Des plantes d'intérieur à des prix abordables, des ornements uniques, des assiettes élégantes, des plantes exotiques, des paniers tressés et des imprimés d'art du patrimoine. Avec des articles faits main, colorés et issus du commerce équitable qui rendront votre intérieur excentrique, il est difficile de partir sans avoir trouvé quelque chose de spécial.`;

const BTN_SHOP_NOW = `Shopper`;
const BTN_WATCH_VIDEO = `Voir Vidéo`;

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);

  return (
    <section className="bd-banner__area grey-bg banner__overlay banner__height-1 p-relative">
      <div className="bd-banner__image-1">
        <Image
          style={{ width: "100%", height: "auto" }}
          src={thumb1}
          alt="banner-img"
        />
      </div>
      <div className="bd-banner__line">
        <Image src={thumb2} alt="banner-line" />
      </div>
      <div className="container">
        <div className="row g-0 align-items-center">
          <div className="col-xxl-7 col-xl-6 col-lg-6">
            <div className="bd-banner__content-box mb-60">
              <div className="bd-banner__text">
                <h2>{HERO_H2_TEXT}</h2>
              </div>
              <div className="row">
                <div className="col-xxl-5"></div>
                <div className="col-xxl-6">
                  <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="vWLcyFtni6U"
                    onClose={() => {
                      openVideoModal();
                    }}
                  />
                  <div className="bd-banner__content__wrap">
                    <div className="bd-banner__content">
                      <p>{HERO_BANNER_TEXT}</p>
                      <div className="bd-banner__button">
                        <div className="bd-button__inner">
                          <Link className="bd-bn__btn-1" href="/shop">
                            {BTN_SHOP_NOW}
                          </Link>
                        </div>
                        <div className="bd-banner__link">
                          <span
                            className="banner-video__btn popup-video"
                            onClick={() => {
                              openVideoModal();
                            }}
                          >
                            <i className="fa-solid fa-play"></i>
                            <span>{BTN_WATCH_VIDEO}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
