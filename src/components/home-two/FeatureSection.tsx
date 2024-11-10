import Link from "next/link";

import FeatureIconFour from "@/sheardComponent/elements/icons/feature-icon-four";
import FeatureIconOne from "@/sheardComponent/elements/icons/feature-icon-one";
import FeatureIconThree from "@/sheardComponent/elements/icons/feature-icon-three";

const FEATURES_LIST = [
  {
    title: `Livraison gratuite`,
    href: "/shop",
    description: `Sur toutes les commandes de plus de 100 DT`,
    icon: <FeatureIconOne />,
  },
  //   {
  //     title: `Easy Returns`,
  //     href: "/shop",
  //     description: `30 Day Returns Policy`,
  //     icon: <FeatureIconTwo />,
  //   },
  {
    title: `Inspirez-vous`,
    href: "/discover",
    description: `Astuces et idées créatives pour s'inspirer`,
    icon: <FeatureIconThree />,
  },
  {
    title: `Soutien spécial`,
    href: "/shop",
    description: `Assistance dédiée 24h/7j sur les guides pratiques`,
    icon: <FeatureIconFour />,
  },
];

const FeatureSection = () => {
  return (
    <section className="bd-features__area pt-70 pb-40">
      <div className="container">
        <div className="row justify-content-between">
          {FEATURES_LIST.map((feature, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="bd-features__item mb-30">
                <div className="bd-features__icon">{feature.icon}</div>
                <div className="bd-features__content">
                  <h4>
                    <Link href={feature.href}>{feature.title}</Link>
                  </h4>
                  <span>{feature.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
