import Image from "next/image";

const thumbOne = "https://i.ibb.co/7pVfLqf/decovert-442404.jpg";
const thumbTwo = "https://i.ibb.co/xStDYM0/decovert-4503261.jpg";
const thumbThree = "https://i.ibb.co/dBKDN70/decovert-9710608.jpg";

const PAGE_SPAN_ABOUT_US_TITLE = "Qui sommes-nous?";
const PAGE_SPAN_ABOUT_US_SLOGAN_1 = "Nous croyons en";
const PAGE_SPAN_ABOUT_US_SLOGAN_2 = "la qualité pure et biologique";
const PAGE_ABOUT_US_CONTENT_1 = `Bienvenue chez DécoVert ! 🌱 Nous sommes passionnés par l'art de créer des espaces de vie sains, verts et inspirants, même dans les plus petits recoins de votre maison. Notre mission est de vous proposer des plantes, des accessoires de jardin et des décorations écologiques qui transforment vos intérieurs et vos balcons en véritables oasis de bien-être.`;
const PAGE_ABOUT_US_CONTENT_2 = `Chaque produit que nous sélectionnons incarne notre engagement envers la durabilité et le respect de l'environnement. Notre équipe est dédiée à fournir des conseils, des guides pratiques, et de l'inspiration pour faire de votre espace un lieu de paix et de beauté naturelle. Merci de faire partie de notre communauté verte ! 🌿`;

const AboutSectionTwo = () => {
  return (
    <section className="bd-about__area pt-130 pb-65">
      <div className="container">
        <div className="row g-0">
          <div className="col-xxl-5 col-xl-5 col-lg-6">
            <div className="bd-about__wrapper mb-60">
              <div className="bd-about__image-1 m-img mb-60">
                <Image
                  src={thumbOne}
                  width={610}
                  height={407}
                  style={{ width: "100%", height: "auto" }}
                  alt="about-image"
                />
              </div>
              <div className="bd-about__image-2 m-img">
                <Image
                  src={thumbTwo}
                  width={300}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                  alt="about-image"
                />
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-6">
            <div className="bd-about__content-box mb-60">
              <div className="bd-section__title-wrapper mb-50">
                <span className="bd-sub__title">
                  {PAGE_SPAN_ABOUT_US_TITLE}
                </span>
                <h2 className="bd-section__title mb-30">
                  {PAGE_SPAN_ABOUT_US_SLOGAN_1} <br />{" "}
                  {PAGE_SPAN_ABOUT_US_SLOGAN_2}
                </h2>
              </div>
              <div className="bd-about__inner">
                <div className="bd-about__info">
                  <p>{PAGE_ABOUT_US_CONTENT_1}</p>
                  <p>{PAGE_ABOUT_US_CONTENT_2}</p>
                </div>
                <div className="bd-about__image-3">
                  <Image
                    src={thumbThree}
                    width={270}
                    height={407}
                    alt="about-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
