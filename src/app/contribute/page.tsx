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
                    Rejoignez notre communauté
                  </h2>
                  <p>
                    Vous partagez notre passion pour les plantes et la
                    décoration durable ? Rejoignez notre communauté ! Chez
                    DécoVert, nous sommes toujours ouverts à des collaborations
                    inspirantes et à des idées nouvelles.
                  </p>
                  <p>
                    Devenir collaborateur : Si vous êtes un créateur, un
                    influenceur, ou simplement passionné par le jardinage et la
                    décoration, contactez-nous pour discuter de potentiels
                    partenariats. Proposer un article de blog : Vous avez des
                    idées pour notre blog ou des conseils à partager ? Soumettez
                    vos idées à{" "}
                    <a href="mailto:contact@decovert.store">
                      contact@decovert.store
                    </a>
                    . Donner votre avis : Vos retours sont essentiels pour nous
                    aider à améliorer notre offre et nos services. Ensemble,
                    faisons de DécoVert un lieu d’inspiration pour un monde plus
                    vert et plus sain. 🌿
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
