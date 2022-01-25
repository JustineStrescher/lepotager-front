// == Import
import NavBar from 'src/components/NavBar';
import Carousel from 'src/components/Carousel';
import Category from 'src/components/Category';
import Familly from 'src/components/Familly';
import Highlight from 'src/components/Highlight';
import Product from 'src/components/Product';
import ProductDetail from 'src/components/ProductDetail';
import Footer from 'src/components/Footer';
import './styles.scss';

import { Route, Routes } from 'react-router-dom';
import AboutConcept from '../About';

// == Composants
const App = () => (
  <div className="app">
    <NavBar />
    <Carousel />
    <Routes>
      <Route exact path="/" element={<Category />} />
      <Route exact path="/a-propos" element={<AboutConcept />} />
      <Route exact path="/concept" element={<AboutConcept />} />
      <Route exact path="/nos-produits" element={<Product />} />
      <Route exact path="/legumes" element={<Familly />}/>
      <Route exact path="/legumes/:slug" element={<Product />} />
      <Route exact path="/legumes/:slug/:slug" element={<ProductDetail />} />
    </Routes>
    <Highlight />
    <Footer />
  </div>
);

// == Export
export default App;
