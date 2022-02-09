import './searchbar.scss';
import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBarModal from '../SearchBarModal';

const SearchBar = () => {
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
      <div onClick={() => setIsOpen(true)} className="search__icon">
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
              >
                <li key={product.id} className="search__autocomplete--link">{product.name}</li>
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
