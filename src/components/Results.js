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
			title: "Burnham v. Superior Court of Cal., County of Marin",
			body: '... Shortly before Mrs. Burnham departed for California that same month, she and petitioner agreedthat she would file for divorce on grounds of "irreconcilable differences." ...',
			courtSource: "150 NH 236, 832 A. 2d 1010 - NH: Supreme Court, 2004",
			knowledge: "External",
		},
		{
			title: "Crowley v. Smithsonian Institution",
			body: "The record establishes without contradiction that Secular Humanism advocates, in additionto the theory of evolution, such causes as the right to divorce, birth control, universal …",
			courtSource: "110 NH 221, 334 A. 2d 1010 - NH: Supreme Court, 2001",
			knowledge: "Internal",
		},
		{
			title: "Masterpiece Cakeshop v. Colo. Civil Rights",
			body: "138 S.Ct. 1719 (2018). MASTERPIECE CAKESHOP, LTD., et al., Petitioners v. COLORADO CIVILRIGHTS COMMISSION, et al. No. 16-111. Supreme Court of United States …",
			courtSource: "100 NH 226, 834 A. 2d 1010 - NH: High Court, 2000",
			knowledge: "External",
		},
		{
			title: "Richardon v. Perales",
			body: "… and Michael C. Farrar. Richard Tinsman, by appointment of the Court, 398 US 902, argued the cause and filed a brief for respondent. Briefs of amici curiae …",
			courtSource: "402 US 389, 91 S. Ct. 1420, 28 L. Ed. 2d 842 - Supreme Court, 1971",
			knowledge: "External",
		},
		{
			title: "Anderson v. Liberty Lobby, Inc.",
			body: "… See also Gertz v. Robert Welch, Inc., 418 US 323, 342 (1974). These New York Times requirements we have since extended to libel suits brought by public figures as well …",
			courtSource: "477 US 242, 106 S. Ct. 2505, 91 L. Ed. 2d 202 - Supreme Court, 1986",
			knowledge: "External",
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
