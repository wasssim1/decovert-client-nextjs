import Link from "next/link";
import productList from "../../data/products";

const BANNER_PRODUCTS_CATEGORIES = [
  {
    id: 21,
    productImg: "/assets/img/categories/home-banner/categ-1.jpg",
    productTag: "Éco-",
    productTitle: "Plantes d'intérieur",
    productDesc: "🪴 Mini-plantes, Succulentes & Cactus",
    productBtn: "Voir Plus",
    bannerClass: "bd-product__banner-content banner-meat",
  },
  {
    id: 22,
    productImg: "/assets/img/categories/home-banner/categ-2.jpg",
    productTag: "Éco-",
    productTitle: "Plantes Médicales",
    productDesc: "🪻 Avoir votre propre coin pharmaceutique à domicile",
    productBtn: "Voir Plus",
    bannerClass: "bd-product__banner-content banner-vegetable",
  },
  {
    id: 23,
    productImg: "/assets/img/product/banner/product-banner-03.jpg",
    productTag: "Éco-",
    productTitle: "Fruitiers",
    productDesc:
      "C'est un choix de vie qui enrichit votre bien-être",
    productBtn: "Voir Plus",
    bannerClass: "bd-product__banner-content banner-fruits",
  },
];

const BannerSection = () => {
  return (
    <section className="bd-product-banner-area mb-40">
      <div className="container">
        {productList && (
          <div className="row">
            {BANNER_PRODUCTS_CATEGORIES.map((item, num) => (
              <div className="col-xl-4 col-lg-6 col-md-6" key={num}>
                <div
                  className="bd-singel__product-banner product-thumb-bg mb-30"
                  style={{ backgroundImage: `url(${item.productImg})` }}
                >
                  <div className="bd-product__banner-inner">
                    <div className={item.bannerClass}>
                      <span>{item.productTag}</span>
                      <h3>
                        <Link href="/shop">{item.productTitle}</Link>
                      </h3>
                      <p>{item.productDesc}</p>
                      <Link className="bd-bn__btn-3" href="/shop">
                        {item.productBtn}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BannerSection;
