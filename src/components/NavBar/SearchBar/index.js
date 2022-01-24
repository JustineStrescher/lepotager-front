import './searchbar.scss';
import { useState, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import SearchBarModal from '../SearchBarModal';

const légumes = [
  'carottes',
  'champignons',
  'chou',
];

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = légumes.filter((légume) => légume.toLowerCase().includes(searchTerm));
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
          <ul className="search__autocomplete">
            {searchResults.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </SearchBarModal>
    </>
  );
};

export default SearchBar;
