import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import FiltersList from "./FiltersList";

export const Results = () => {
	return (
		<Grid container>
			<Grid item xs={12} sm={3}>
				<FiltersList />
			</Grid>
			<Grid item xs={12} sm={9}>
				Results
			</Grid>
		</Grid>
	);
};

export default Results;
