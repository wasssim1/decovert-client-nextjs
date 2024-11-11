import Image from "next/image";
import Link from "next/link";

import logo from "../../public/assets/img/logo/decovert-footer-logo-sm.jpg";
import useGlobalContext from "../hooks/use-context";
import CartIcon from "../sheardComponent/elements/icons/cart-icon";
import WishlistIcon from "../sheardComponent/elements/icons/wishlist-icon";
import MobileMenu from "./elements/MobileMenu";
import SidebarSearchContent from "./elements/SidebarSearchContent";

const MOBILE_SIDEBAR_CONTACT_INFO = "Coordonnées";
const MOBILE_SIDEBAR_ADDRESS = "Tunis, Tunisia";
const MOBILE_SIDEBAR_PHONE = "(+216) 20 678 882";
const MOBILE_SIDEBAR_EMAIL = "contact@decovert.store";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const safeSetShowSidebar = setShowSidebar || (() => {});

  return (
    <>
      <div className="fix">
        <div className={`side-info ${showSidebar ? "info-open" : ""}`}>
          <div className="side-info-content">
            <div className="modals-content">
              <div className="offcanvas__wrapper">
                <div className="offcanvas__content">
                  <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                    <div className="offcanvas__logo logo">
                      <Link href="/">
                        <Image
                          src={logo}
                          alt="logo"
                          style={{ maxWidth: "70px", maxHeight: "70px" }}
                        />
                      </Link>
                    </div>
                    <div className="offcanvas__close">
                      <button
                        className="offcanvas__close-btn"
                        onClick={() => safeSetShowSidebar(false)}
                      >
                        <i className="fal fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div className="bd-utilize__buttons mb-25 d-none">
                    <div className="bd-action__item">
                      <div className="bd-action__cart d-none">
                        <div className="bd-action__cart-icon">
                          <span className="bd-cart-mini-btn">
                            <CartIcon />
                          </span>
                          <span className="bd-action__item-number cart-count">
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bd-action__item d-none">
                      <div className="bd-action__wishlist">
                        <div className="bd-action__wistlist-icon">
                          <span className="bd-cart-mini-btn">
                            <WishlistIcon />
                          </span>
                          <span className="bd-action__item-number wishlist-count">
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="offcanvas__search mb-25">
                    <SidebarSearchContent />
                  </div>
                  <nav className="side-mobile-menu d-block d-xl-none mm-menu">
                    <MobileMenu />
                  </nav>
                  <div className="offcanvas__contact mt-30 mb-20">
                    <h4>{MOBILE_SIDEBAR_CONTACT_INFO}</h4>
                    <ul>
                      <li className="d-flex align-items-center">
                        <div className="offcanvas__contact-icon mr-15">
                          <i className="fal fa-map-marker-alt"></i>
                        </div>
                        <div className="offcanvas__contact-text">
                          {/* <Link target="_blank" href="#"> */}
                          {MOBILE_SIDEBAR_ADDRESS}
                          {/* </Link> */}
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="offcanvas__contact-icon mr-15">
                          <i className="far fa-phone"></i>
                        </div>
                        <div className="offcanvas__contact-text">
                          {/* <Link href={`tel:${MOBILE_SIDEBAR_PHONE}`}> */}
                          {MOBILE_SIDEBAR_PHONE}
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="offcanvas__contact-icon mr-15">
                          <i className="fal fa-envelope"></i>
                        </div>
                        <div className="offcanvas__contact-text">
                          <Link href={`mailto:${MOBILE_SIDEBAR_EMAIL}`}>
                            <span className="mailto:support@mail.com">
                              {MOBILE_SIDEBAR_EMAIL}
                            </span>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="offcanvas__social">
                    <ul>
                      <li>
                        <Link
                          href="https://www.facebook.com/decoverttn"
                          target="_blank"
                          title="Facebook"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.instagram.com/decovertstore"
                          target="_blank"
                          title="Instagram"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => safeSetShowSidebar(false)}
        className={`offcanvas-overlay ${showSidebar ? "overlay-open" : ""}`}
      ></div>
    </>
  );
};

export default Sidebar;
