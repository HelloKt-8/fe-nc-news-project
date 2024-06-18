import { React, useState } from "react";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchItem(searchItem);
    setSearchItem("");
  };

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  return (
    <form className="search-item" onSubmit={handleSubmit}>
      <label>
        Search:
        <input type="text" onChange={handleChange} value={searchItem} />
      </label>
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
