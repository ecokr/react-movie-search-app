import React, { useState } from "react";



const Search:React.FC<any> = ( {search} ) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e:React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
