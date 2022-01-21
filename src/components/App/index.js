// == Import
import './styles.css';

import Footer from '../Footer';
// import Category from '../Category';
// import Familly from '../Familly';
// import Product from '../Product';
import ProductDetail from '../ProductDetails';

// == Composant
const App = () => (

  <div className="app">
    <ProductDetail />
    {/* <Product />
    <Category />
    <Familly /> */}
    <Footer />
  </div>
);

// == Export
export default App;
