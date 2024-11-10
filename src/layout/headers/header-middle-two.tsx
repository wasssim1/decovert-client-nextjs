import Link from "next/link";

const ABOUT_US = "Qui sommes-nous?";
const CONTACT_US = "Contact";
// Linear gradient 90°: #0097b2, #7ed957

const HeaderMiddleTwo = () => {
  return (
    <div className="bd-header__middle theme-bg d-none d-sm-block">
      <div className="bd-header__middle-area-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="bd-header__top-link">
                <Link href="/about-us">{ABOUT_US}</Link>
                <Link href="/contact-us">{CONTACT_US}</Link>
              </div>
            </div>
            {/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="style-2">
                <div className="bd-treak__right">
                  <div className="border-lefts">
                    <select
                      name="lan-select"
                      id="lan-select"
                      className="language-select"
                    >
                      <option defaultValue="1">Français</option>
                    </select>
                  </div>
                  <div className="border-left">
                    <select
                      name="currency-select"
                      id="currency-select"
                      className="currency-select border-left"
                    >
                      <option defaultValue="1">DT</option>
                    </select>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddleTwo;
