import './highlight.scss';

import { useSelector } from 'react-redux';

import ProductCard from 'src/components/Product/ProductCard';
import ScrollToTop from '../ScrollToTop';

const Highlight = () => {
  const productList = useSelector((state) => state.product.highlight.slice(22));

  return (
    <div className="Highlight__container">
      <ScrollToTop />
      <div className="Highlight--title">
        <p>Nos produits du moment</p>
      </div>
      <div className="Highlight">
        {productList.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Highlight;
