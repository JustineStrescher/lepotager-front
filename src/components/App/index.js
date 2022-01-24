// == Import
import './styles.scss';

import Footer from '../Footer';
import Category from '../Category';
import Familly from '../Familly';
import Product from '../Product';
import ProductDetail from '../ProductDetail';

// == Composant
const App = () => (

  <div className="app">
    <Category />
    <Familly />
    <Product />
    <ProductDetail />
    <Footer />
  </div>
);

// == Export
export default App;
