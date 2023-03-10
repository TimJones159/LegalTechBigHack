import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import FiltersList from "./FiltersList";
import ResultsSection from "./ResultsSection";

export const Results = () => {
  const results = [
    {
      title: "In the Matter of Blanchflower & Blanchflower",
      body: 'Unlike no-fault divorces, a fault-based divorce presumes that there is an innocent and a guiltyspouse, and permits divorce "in favor of the innocent party" for any of nine possible causes …',
      courtSource: "150 NH 226, 834 A. 2d 1010 - NH: Supreme Court, 2003",
      knowledge: "Internal",
    },
    {
      title: "In the Matter of Blanchflower & Blanchflower",
      body: 'Unlike no-fault divorces, a fault-based divorce presumes that there is an innocent and a guiltyspouse, and permits divorce "in favor of the innocent party" for any of nine possible causes …',
      courtSource: "150 NH 226, 834 A. 2d 1010 - NH: Supreme Court, 2003",
      knowledge: "Internal",
    },
    {
      title: "In the Matter of Blanchflower & Blanchflower",
      body: 'Unlike no-fault divorces, a fault-based divorce presumes that there is an innocent and a guiltyspouse, and permits divorce "in favor of the innocent party" for any of nine possible causes …',
      courtSource: "150 NH 226, 834 A. 2d 1010 - NH: Supreme Court, 2003",
      knowledge: "Internal",
    },
    {
      title: "In the Matter of Blanchflower & Blanchflower",
      body: 'Unlike no-fault divorces, a fault-based divorce presumes that there is an innocent and a guiltyspouse, and permits divorce "in favor of the innocent party" for any of nine possible causes …',
      courtSource: "150 NH 226, 834 A. 2d 1010 - NH: Supreme Court, 2003",
      knowledge: "Internal",
    },
    {
      title: "In the Matter of Blanchflower & Blanchflower",
      body: 'Unlike no-fault divorces, a fault-based divorce presumes that there is an innocent and a guiltyspouse, and permits divorce "in favor of the innocent party" for any of nine possible causes …',
      courtSource: "150 NH 226, 834 A. 2d 1010 - NH: Supreme Court, 2003",
      knowledge: "Internal",
    },
  ];
  return (
    <Grid container>
      <Grid item xs={12} sm={3}>
        <FiltersList />
      </Grid>
      <Grid item xs={12} sm={9}>
        <ResultsSection results={results} />
      </Grid>
    </Grid>
  );
};

export default Results;
