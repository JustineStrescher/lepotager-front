// == Import
import './styles.css';

import Footer from '../Footer';
import Category from '../Category';
import Familly from '../Familly';

// == Composant
const App = () => (

  <div className="app">
    <Category />
    <Familly />
    <Footer />
  </div>
);

// == Export
export default App;
