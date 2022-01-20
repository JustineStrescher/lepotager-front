// == Import
import NavBar from 'src/components/NavBar';
import Footer from 'src/components/Footer';
import './styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    <Footer />
  </div>
);

// == Export
export default App;
