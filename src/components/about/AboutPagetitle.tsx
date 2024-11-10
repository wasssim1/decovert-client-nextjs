import React from "react";

const bgImage = "https://i.ibb.co/m0TdPFp/aboutus-banner-1118154.jpg";

const PAGE_BANNER_TITLE = "À props de DécoVert";
const PAGE_BANNER_SUBTITLE =
  "Boutique de Plantes & déco éco-responsables pour vos espaces";
const AboutPagetitle = () => {
  return (
    <section
      className="bd-page__banner-area include-bg page-overlay"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="bd-page__banner-content text-center">
              <h2>{PAGE_BANNER_TITLE}</h2>
              <span>{PAGE_BANNER_SUBTITLE}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPagetitle;
