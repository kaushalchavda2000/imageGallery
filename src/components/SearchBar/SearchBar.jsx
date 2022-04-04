import React, { useState } from "react";
import "./searchbar.css";

function SearchBar({ onChange }) {
  const [searchedText, setsearchedText] = useState("");

  const onChangeHandler = (e) => {
    setsearchedText(e.target.value);
    onChange(e.target.value);
  };

  const onSubmitHandle = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <form id="form" onSubmit={onSubmitHandle}>
        <input
          type="text"
          value={searchedText}
          name="query"
          placeholder="Search  here..."
          id="inputbox"
          size={50}
          onChange={onChangeHandler}
        />
        <label htmlFor="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <input type="submit" id="submit" value="submit" />
      </form>
    </div>
  );
}

export default SearchBar;
