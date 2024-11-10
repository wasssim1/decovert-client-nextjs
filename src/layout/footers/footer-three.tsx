import Image from "next/image";
import Link from "next/link";

import footerlogo from "../../../public/assets/img/logo/decovert-footer-logo-sm.jpg";

const FOOTER_ABOUT_US = "Qui sommes-nous?";
const FOOTER_CONTACT_US = "Contact";
const FOOTER_HELP_AND_FAG = "Aide & FAQ";
const FOOTER_PRIVACY_POLICY = "politique de confidentialité";
const FOOTER_CONTRIBUTE = "Contribuer";
const FOOTER_DISCOVER = "Découvrir";
const FOOTER_ALL_RIGHTS_RESERVED = "Tous droits réservés";

const FooterThree = () => {
  return (
    <footer>
      <div className="bd-footer__area grey-bg pt-100 pb-60">
        <div className="bd-footer__style-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="bd-footer__widget text-center mb-40">
                  <div className="bd-footer__logo">
                    <Link href="/">
                      <Image
                        src={footerlogo}
                        alt="footer-logo"
                        style={{ maxWidth: "70px", maxHeight: "70px" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="bd-footer__widget text-center mb-40">
                  <div className="bd-footer__link">
                    <ul>
                      <li>
                        <Link href="/about-us">{FOOTER_ABOUT_US}</Link>
                      </li>
                      <li>
                        <Link href="/contact-us">{FOOTER_CONTACT_US}</Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">
                          {FOOTER_PRIVACY_POLICY}
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq">{FOOTER_HELP_AND_FAG}</Link>
                      </li>
                      <li>
                        <Link href="/contribute">{FOOTER_CONTRIBUTE}</Link>
                      </li>
                      <li>
                        <Link href="/discover">{FOOTER_DISCOVER}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bd-footer__widget text-center mb-40">
                  <div className="bd-footer__social">
                    <Link
                      href="https://www.facebook.com/decoverttn"
                      target="_blank"
                      title="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>

                    <Link
                      href="https://www.instagram.com/decovertstore/"
                      target="_blank"
                      title="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bd-sub__fotter">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="bd-footer__copyright text-center">
                <ul>
                  <li>{FOOTER_ALL_RIGHTS_RESERVED}</li>
                  <li>
                    Copyrighted by ©{new Date().getFullYear()}{" "}
                    <span>
                      <Link href="https://oraniensquare.com" target="_blank">
                        OranienSquare
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
