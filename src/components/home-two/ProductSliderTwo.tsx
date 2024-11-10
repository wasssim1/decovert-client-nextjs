import TrendingProductSlider from "../elements/product/TrendingProductSlider";
import TrendingProductHighlightBanner from "../home-three/sub-component/MasalaProductBanner";

import thumb from "../../../public/assets/img/trending/flash/trending-banner.jpg";

const TRENDING_HIGHLIGHTED_PRODUCT = {
  thumbImg: thumb,
  title: "Trending Product",
  subTitle: "Special Offer",
};

const ProductSliderTwo = () => {
  return (
    <section className="bd-trending__area pb-10">
      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
            <TrendingProductHighlightBanner
              thumbImg={TRENDING_HIGHLIGHTED_PRODUCT.thumbImg}
              title={TRENDING_HIGHLIGHTED_PRODUCT.title}
              subTitle={TRENDING_HIGHLIGHTED_PRODUCT.subTitle}
            />
          </div>
          <div className="col-xxl-9 col-xl-8 col-lg-8">
            <TrendingProductSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSliderTwo;
