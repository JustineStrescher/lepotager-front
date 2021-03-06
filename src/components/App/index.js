// == Import
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCategories } from 'src/actions/categories';

import NavBar from 'src/components/NavBar';
import Category from 'src/components/Category';
import Familly from 'src/components/Familly';
import Product from 'src/components/Product';
import ProductDetail from 'src/components/ProductDetail';
import Footer from 'src/components/Footer';
import Basket from 'src/components/Basket';
import Error from 'src/components/Error';
import AboutConcept from 'src/components/AboutConcept';
import Acount from '../Acount';
import Devs from '../Devs';
import LegalMention from '../LegalMention';

import './styles.scss';
import { fetchAllProducts, fetchHighlight } from '../../actions/product';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchHighlight());
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <div className="app">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Category />} />
          <Route exact path="mentions-legales" element={<LegalMention />} />
          <Route exact path="/les-devs" element={<Devs />} />
          <Route exact path="/acount" element={<Acount />} />
          <Route exact path="/panier" element={<Basket />} />
          <Route exact path="/a-propos" element={<AboutConcept />} />
          <Route exact path="/concept" element={<AboutConcept />} />
          <Route exact path="/legumes" element={<Familly />} />
          <Route exact path="/viandes" element={<Familly />} />
          <Route exact path="/epicerie" element={<Familly />} />
          <Route exact path="/semences" element={<Familly />} />
          <Route exact path="/:slug/:slug" element={<Product />} />
          <Route exact path="/:slug/:slug/:slug" element={<ProductDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
      <>
        <div id="portal" />
      </>
    </>
  );
}

// == Export
export default App;
