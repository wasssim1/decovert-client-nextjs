const FAQ_DATA_1 = [
  {
    question: "Quels types de plantes proposez-vous ?",
    answer:
      "Nous proposons une sélection de petites plantes parfaites pour les intérieurs, les balcons et les petits espaces. Nos plantes sont idéales pour la décoration et nécessitent peu d’entretien.",
  },
  {
    question: "Livrez-vous dans toute la Tunisie ?",
    answer:
      "Oui, nous livrons dans toute la Tunisie avec un service de livraison rapide et sécurisé.",
  },
  {
    question: "Comment prendre soin de mes plantes ?",
    answer:
      "Vous trouverez des conseils d'entretien dans nos fiches produits ainsi que sur notre blog. N'hésitez pas à consulter nos guides pour en savoir plus.",
  },
  {
    question: "Quels modes de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les paiements par carte bancaire, virement bancaire, et paiement à la livraison.",
  },
  {
    question: "Puis-je obtenir des conseils sur l’aménagement de mon espace ?",
    answer:
      "Bien sûr ! Consultez notre blog et nos réseaux sociaux pour des idées et des conseils sur l’aménagement de petits espaces avec des plantes et de la décoration.",
  },
];

const FAQ_DATA_2 = [
  {
    question: "Que faire si ma plante arrive endommagée ?",
    answer:
      "Si votre plante ou produit arrive endommagé, contactez-nous dans les 48 heures avec des photos. Nous vous aiderons à trouver une solution, que ce soit un remplacement ou un remboursement.",
  },
  {
    question: "Offrez-vous des réductions pour les commandes en gros ?",
    answer:
      "Oui, nous proposons des réductions pour les commandes en gros, que ce soit pour des événements, des cadeaux d'entreprise, ou la décoration d'espaces professionnels. Contactez-nous pour plus de détails.",
  },
  {
    question: "Quelles garanties proposez-vous sur vos produits ?",
    answer:
      "Nous nous engageons à fournir des plantes et produits de haute qualité. En cas de problème, vous pouvez nous contacter pour toute question de retour ou de garantie sur votre achat.",
  },
  {
    question: "Puis-je offrir une carte cadeau ?",
    answer:
      "Oui, nous proposons des cartes cadeaux pour vos proches ! Elles sont parfaites pour les amateurs de plantes et de décoration naturelle. Contactez-nous pour en savoir plus.",
  },
];

const FaqSection = () => {
  return (
    <section className="bd-faq__area pt-115 pb-95">
      <div className="container small-container">
        <h2 className="bd-section__title mb-50">Aide & FAQs</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="bd-faq__wrapper mb-30">
              <div
                className="bd-faq__accordion"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="accordion" id="accordionExample">
                  {FAQ_DATA_1.map((faqItem, idx) => (
                    <div key={`${idx}-faq-grp-1`} className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          {faqItem.question}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{faqItem.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bd-faq__wrapper-2 mb-30">
              <div
                className="bd-faq__accordion"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="accordion" id="accordionExample2">
                  {FAQ_DATA_2.map((faqItem, idx) => (
                    <div key={`${idx}-faq-grp-2`} className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          {faqItem.question}
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="accordion-body">
                          <p>{faqItem.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
