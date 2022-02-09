import './searchbar.scss';
import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBarModal from '../SearchBarModal';
import { saveProduct } from '../../../actions/product';

const SearchBar = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const productList = useSelector((state) => state.product.allProduct);
  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    // eslint-disable-next-line max-len
    const results = productList.filter((product) => product.name.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className={isLogged ? 'search__icon' : 'search__icon-unlogged'}>
        <AiOutlineSearch />
      </div>
      <SearchBarModal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="search">
          <input
            type="text"
            placeholder="Entrez votre recherche"
            value={searchTerm}
            onChange={handleChange}
          />
          {searchTerm.length > 0 && (
          <ul className="search__autocomplete">

            {searchResults.map((product) => (
              <Link
                key={product.name}
                to={`/${product.arborescence.Category}/${product.arborescence.SubCategory}/${product.slug}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                  dispatch(saveProduct(product, product.id));
                  setIsOpen(false);
                }}
              >
                <li key={product.id} className={product.available ? 'search__autocomplete--link green text' : ' search__autocomplete--link red text '}>{product.name}</li>
              </Link>
            ))}
          </ul>
          )}
        </div>
      </SearchBarModal>
    </>
  );
};
export default SearchBar;
