import Link from "next/link";

const PAGE_NOT_FOUND_HEADER = "Oups ! Page non trouvée";
const PAGE_NOT_FOUND_SUBHEADER =
  "La page n'existe pas. Vous pouvez vérifier le lien ou faire une recherche ci-dessus pour trouver ce que vous cherchez.";
const PAGE_NOT_FOUND_BACK_TO_HOME_BTN = "Continuer à explorer";

const ErrorMain = () => {
  return (
    <>
      <section className="bd-error__area pt-90 pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="bd-error__page-content text-center">
                <div className="bd-error__number">
                  <h2>404</h2>
                </div>
                <div className="bd-error__text">
                  <h3>{PAGE_NOT_FOUND_HEADER}</h3>
                  <p>{PAGE_NOT_FOUND_SUBHEADER}</p>
                </div>
                <Link className="bd-error__btn" href="/">
                  {PAGE_NOT_FOUND_BACK_TO_HOME_BTN}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorMain;
