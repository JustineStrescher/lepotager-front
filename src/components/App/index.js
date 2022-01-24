// == Import
import NavBar from 'src/components/NavBar';
import Category from 'src/components/Category';
import Familly from 'src/components/Familly';
import About from 'src/components/About';
import Highlight from 'src/components/Highlight';
import Product from 'src/components/Product';
import ProductDetail from 'src/components/ProductDetail';
import Account from 'src/components/Account';
import Footer from 'src/components/Footer';
import './styles.scss';
import { Route, Routes } from 'react-router-dom';

// == Composants
const App = () => (
  <div className="app">
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Category />} />
      <Route exact path="/nos-produits" element={<Product />} />
      <Route exact path="/a-propos" element={<About />} />
      <Route exact path="/se-connecter" element={<Account />} />
      <Route exact path="/legumes" element={<Familly />} />
      <Route exact path="/legumes/:slug" element={<Product />} />
      <Route exact path="/legumes/:slug/:slug" element={<ProductDetail />} />
    </Routes>
    <Highlight />
    <Footer />
  </div>
);

// == Export
export default App;
