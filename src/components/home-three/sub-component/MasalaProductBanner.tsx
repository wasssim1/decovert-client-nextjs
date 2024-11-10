import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type TrendingProductHighlightType = {
  thumbImg: StaticImageData;
  title: string;
  subTitle: string;
};

const TrendingProductHighlightBanner = ({
  thumbImg,
  title,
  subTitle,
}: TrendingProductHighlightType) => {
  return (
    <>
      <Link href="/shop-details">
        <div className="bd-trending__banner p-relative mb-50">
          <div className="bd-trending__banner-thumb w-img">
            <Image
              src={thumbImg}
              alt="trending-banner"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="bd-td__banner-text">
            <span>{subTitle}</span>
            <h3>{title}</h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TrendingProductHighlightBanner;
