import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";
const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <div>
      <form onSubmit={searchHandler}>
        <div className="header_search">
          <input
            id="text_field"
            className="header_searchInput"
            type="text"
            placeholder="Enter Product Name..."
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
          <SearchIcon className="header_searchIcon" />
        </div>
      </form>
    </div>
  );
};

export default Search;
