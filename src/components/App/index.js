// == Import

import NavBar from 'src/components/NavBar';
import Category from 'src/components/Category';
import Familly from 'src/components/Familly';
import Product from 'src/components/Product';
import ProductDetail from 'src/components/ProductDetail';
import Footer from 'src/components/Footer';
import './styles.scss';

import { Route, Routes } from 'react-router-dom';
import Error from '../Error';
import AboutConcept from '../AboutConcept';

// == Composants
const App = () => (
  <div className="app">
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Category />} />
      <Route exact path="/a-propos" element={<AboutConcept />} />
      <Route exact path="/concept" element={<AboutConcept />} />
      <Route exact path="/nos-produits" element={<Product />} />
      <Route exact path="/legumes" element={<Familly />} />
      <Route exact path="/legumes/:slug" element={<Product />} />
      <Route exact path="/legumes/:slug/:slug" element={<ProductDetail />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </div>
);

// == Export
export default App;
