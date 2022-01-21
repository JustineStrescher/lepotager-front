// == Import
import NavBar from 'src/components/NavBar';
import Home from 'src/components/Home';
import About from 'src/components/About';
import Products from 'src/components/Products';
import Account from 'src/components/Account';
import './styles.css';
import { Route, Routes } from 'react-router-dom';

// == Composants
const App = () => (
  <div className="app">
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/nos-produits" element={<Products />} />
      <Route exact path="/a-propos" element={<About />} />
      <Route exact path="/se-connecter" element={<Account />} />
    </Routes>
  </div>
);

// == Export
export default App;
