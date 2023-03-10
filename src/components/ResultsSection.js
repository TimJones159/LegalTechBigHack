import Link from "@mui/material/Link";

import SearchSection from "./SearchSection";
import Result from "./Result";

export const ResultsSection = ({ results }) => {
	return (
		<>
			<div className="resultsSection">
				<span>
					<Link href="/">Home</Link> / Results
				</span>
				<SearchSection small />
			</div>
			<div className="resultsSort">
				<div>
					<span className="heading">Sort by:</span>
					<span className="active">Relevance</span>
					<span>Year</span>
				</div>
				<div>
					<span className="totalResults">6 results found</span>
				</div>
			</div>
			<div>
				{results.map((result) => (
					<Result key={result.title} {...result} />
				))}
			</div>
		</>
	);
};

export default ResultsSection;
