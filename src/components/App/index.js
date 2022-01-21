// == Import
import './styles.css';

import Footer from '../Footer';
import Category from '../Category';
import Familly from '../Familly';
import Product from '../Product';

// == Composant
const App = () => (

  <div className="app">
    <Product />
    <Category />
    <Familly />
    <Footer />
  </div>
);

// == Export
export default App;
