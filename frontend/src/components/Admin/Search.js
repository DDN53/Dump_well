// Search.js
import React from "react";
import { useDispatch } from "react-redux";

function Search() {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const searchQueryAdmin = event.target.value;
    dispatch({ type: "SET_SEARCH_QUERY_ADMIN", payload: searchQueryAdmin });
  };

  return (
    <div className="relative mr-3">
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search by Employee ID"
        className="w-[240px] pl-2 pr-[40px] h-10 border border-gray-400 rounded-md leading-tight text-gray-700 focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}

export default Search;
