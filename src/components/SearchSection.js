import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const SearchSection = ({ small = false, full = false }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const defaultSearchTerm = searchParams.get("term") || "";
  const [search, setSearch] = useState(defaultSearchTerm);

  const setSearchQuery = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/results?term=${search}`);
  };

  return (
    <form className="searchSection" onSubmit={handleSubmit}>
      <div className={`searchSection__search ${full ? "full" : ""}`}>
        <TextField
          id="search-bar"
          className="searchSection__searchBar"
          onInput={setSearchQuery}
          label="Search by case name, case type or case number"
          variant="outlined"
          placeholder="Search by case name, case type or case number"
          size={`${small ? "small" : "medium"}`}
          value={search}
        />
        <Button type="submit" variant="contained" aria-label="search">
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchSection;
