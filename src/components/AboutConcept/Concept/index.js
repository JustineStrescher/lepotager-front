import '../aboutConcept.scss';

const Concept = () => (
  <div className="concept--content text">
    <div className="concept-flex margin-top">
      <div className="concept-numero title">1</div>
      <p>Inscriver/connecter vous sur le site.</p>
    </div>
    <div className="concept-flex">
      <div className="concept-numero Main inverse1">2</div>
      <p>Ajouter vos produits preferer au panier </p>
    </div>
    <div className="concept-flex">
      <div className="concept-numero alt">3</div>
      <p>Valider votre commande</p>
    </div>
    <div className="concept-flex">
      <div className="concept-numero dark inverse1">4</div>
      <p>Venez recuperer votre panier au potager le mercredi .</p>
    </div>
  </div>
);

export default Concept;
