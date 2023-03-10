import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export const SearchSection = () => {
  let history = useNavigate();

  const [search, setSearch] = useState("");

  const setSearchQuery = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSubmit = () => {
    history.push();
  };
  return (
    <form className="searchSection" onSubmit={handleSubmit}>
      <h1>Search for a case</h1>

      <div className="searchSection__search">
        <TextField
          id="search-bar"
          className="searchSection__searchBar"
          onInput={setSearchQuery}
          label="Search by case name, case type or case number"
          variant="outlined"
          placeholder="Search by case name, case type or case number"
          size="medium"
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
