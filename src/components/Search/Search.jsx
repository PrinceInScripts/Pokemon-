import React from "react";
import useDebounce from "../../hooks/useDebounce";

function Search({updateSearchTerm}) {
  const debounceUpdatedSearchTerm=useDebounce((e)=>updateSearchTerm(e.target.value))
  return (
    <input
      type="text"
      className="py-2 w-72 border-2 border-black text-center rounded-xl text-2xl font-mono font-semibold"
      onChange={debounceUpdatedSearchTerm}
    />
  );
}

export default Search;
