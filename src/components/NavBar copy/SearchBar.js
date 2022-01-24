const SearchBar = () => (
  <div className="menu--searchbar">
    <form action="/" method="get">
      <input
        type="text"
        id="header-search"
        placeholder="Chercher un produit"
        name="searchbar"
      />
      <button type="submit">Rechercher</button>
    </form>
  </div>
);

export default SearchBar;
