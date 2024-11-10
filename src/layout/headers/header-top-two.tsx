import Link from "next/link";

const ADDRESS = `Tunis, Tunisie`;
const PHONE = `+216 98 123 456`;

const HeaderTopTwo = () => {
  return (
    <div className="bd-top__bar-area-3 topbar-padding d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-md-8">
            <div className="bd-topbar__contact">
              <ul>
                <li>
                  <Link href="tel:+(02)587-898-250">
                    <i className="fa-regular fa-phone-flip"></i>
                    {PHONE}
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa-solid fa-location-dot"></i>
                    {ADDRESS}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-md-4">
            <div className="bd-top__bar-social">
              <ul>
                <li>
                  <Link
                    href="https://www.facebook.com/decoverttn"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/decovertstore/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopTwo;
