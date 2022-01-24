import './highlight.scss';

import { useSelector } from 'react-redux';

import ProductCard from 'src/components/Product/ProductCard';

const Highlight = () => {
  const productList = useSelector((state) => state.product.HighlightData);

  return (
    <section>
      <div className="Highlight--title">
        <p>Nos produits du moment</p>
      </div>
      <div className="Highlight">
        {productList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Highlight;
