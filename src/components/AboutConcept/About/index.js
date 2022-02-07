import '../aboutConcept.scss';
import logo from './logo.jpg';

const About = () => (
  <div className="about--content">
    <div className="about--content-div">
      <div className="about--content-div-1">
        <h2>Le potager</h2>
        <p className="about--content-div-1-who text">Vous avez désormais envie de consommer autrement ? Vous repensez votre art de vivre ou vous réinventez un fonctionnement à la lumière de nouvelles valeurs ? Les producteurs locaux, les circuits courts, les services de proximité... ça vous parle plus que jamais ? Le Potager des Culs Fouettés s'étend aujourd'hui sur 60 ares, et entend s'émanciper tranquillement, dans le respect de nos convictions. Il y a plus de 5 ans, quand nous avons décidé de faire de notre passion notre métier. Nous y cultivons des légumes bio, de saison et diversifiés, en faisant le choix de n'a pas travailler avec des hybrides, mais seulement avec des variétés reproductibles, et à partir de semences également produites sur place, et dont les surplus sont en outre proposés à la vente. La vente directe a lieu à la ferme le mercredi sur commande, et nous sommes également t présent sur le marché de producteurs d'Ornans
        </p>
      </div>
      <div className="about--content-div-2-image">
        <img className="about--content-div-2-image-img" src="https://media.istockphoto.com/photos/vegetable-garden-picture-id613517018?k=20&m=613517018&s=612x612&w=0&h=Lhd0t8qIdXjw9ngWmP9L3NhC3iZnR0HYuzNFTRc2ASU=" alt="" />
      </div>
    </div>
    <div className="about--content-div">
      <div className="about--content-div-1 inverse1">
        <h2>Le Nom pour le moins original</h2>
        <p className="about--content-div-1-who text ">En 1477, après que les troupes françaises aient été refoulées par la résistance doloise, le sire de Craon, lieutenant de louis XI, décida de s’attaquer à diverses places fortes, Ougney et son château étant la première. Après l’assaut, les assaillants passèrent et dépouillèrent les défenseurs d’Ougney de leurs vêtements et de leurs armes, avant de les faire fouetter sur les remparts, nus, à la vue de tous. Voilà pourquoi les habitants d’Ougney ont conservé le surnom de « Culs Fouettés » !
        </p>
      </div>
      <div className="about--content-div-2-image ">
        <img className="about--content-div-2-image-img" src={logo} alt="" />
      </div>
    </div>
  </div>
);

export default About;
