import 'src/components/Product/Product.scss';
import './Dev.scss';

import { useSelector } from 'react-redux';

import DevsCard from './DevsCards';
import ScrollToTop from '../ScrollToTop';

const Devs = () => {
  const DevsList = useSelector((state) => state.product.Devs);

  return (
    <section className="Devs__container">
      <ScrollToTop />
      <div className="Product--title">
        <p>Les devs</p>
      </div>
      <div className="Product devs">
        {DevsList.map((product) => (
          <DevsCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Devs;
