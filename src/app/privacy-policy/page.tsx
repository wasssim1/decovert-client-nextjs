import Wrapper from "@/layout/DefaultWrapper";

const Contact = () => {
  return (
    <>
      <Wrapper>
        <main>
          <section className="bd-about__area pt-130 pb-65">
            <div className="container small-container">
              <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                  <h2 className="bd-section__title mb-50">
                    Politique de confidentialité
                  </h2>
                  <p>
                    Chez DécoVert, la confidentialité et la sécurité de vos
                    données sont une priorité. Voici les points clés de notre
                    politique de confidentialité :
                    <ul>
                      <li>
                        <strong>Collecte des données :</strong>
                        Nous recueillons uniquement les informations nécessaires
                        pour traiter vos commandes, améliorer nos services et
                        communiquer avec vous.
                      </li>
                      <li>
                        <strong>Utilisation des données :</strong>
                        Nous recueillons uniquement les informations nécessaires
                        pour traiter vos commandes, améliorer nos services et
                        communiquer avec vous.
                      </li>
                      <li>
                        <strong>Partage des données :</strong>
                        Nous ne partageons pas vos données avec des tiers sans
                        votre consentement.
                      </li>
                      <li>
                        <strong>Protection des données :</strong>
                        Nous prenons des mesures de sécurité pour protéger vos
                        informations personnelles.
                      </li>
                      <li>
                        <strong>Conservation des données :</strong>
                        Nous conservons vos données aussi longtemps que
                        nécessaire pour remplir nos obligations légales et
                        contractuelles.
                      </li>
                      <li>
                        <strong>Vos droits :</strong>
                        {`ÏVous avez le droit d'accéder, de corriger et de
                        supprimer vos données personnelles. Contactez-nous pour
                        exercer vos droits.`}
                      </li>
                    </ul>
                  </p>
                  <p>
                    Pour toute question concernant notre politique de
                    confidentialité, veuillez nous contacter à{" "}
                    <a href="mailto:contact@decovert.store">
                      contact@decovert.store
                    </a>
                    .
                  </p>
                </div>
                <div className="col-lg-2"></div>
              </div>
            </div>
          </section>
        </main>
      </Wrapper>
    </>
  );
};

export default Contact;
