function SearchSection() {
  return (
    <section id="search_section">
      <div id="searchbar">
        <div className="location-dot">
          <i className="fa fa-location-dot" aria-hidden="true"></i>
        </div>
        <form name="search_form" method="post" action="#">
          <input
            type="search"
            name="search"
            className="searchInput"
            placeholder="Marseille, France"
          />
          <input type="button" value="Rechercher" className="searchButton" />
        </form>
        <a href="#" className="searchButtonMobile">
          <i className="fa-solid fa-search"></i>
        </a>
      </div>
    </section>
  );
}

export default SearchSection;
