import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchSection from "./SearchSection";

export const SearchPage = () => {
  return (
    <div className="searchPage">
      <h1>Search for a case</h1>
      <SearchSection />
    </div>
  );
};

export default SearchPage;
