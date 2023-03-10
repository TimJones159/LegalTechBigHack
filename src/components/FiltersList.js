import { List, ListItem, ListItemText, Typography } from "@mui/material";
import "../index.css";

export const FiltersList = () => {
	return (
		<div>
			Filters
			<List>
				{/* add filter options here */}
				<ListItem>
					<ListItemText
						primary={
							<Typography
								variant="subtitle1"
								style={{ color: "black", fontWeight: "bold", fontSize: "14px" }}
							>
								Knowledge
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography
								variant="subtitle1"
								style={{ color: "#1976d2", fontSize: "14px", fontWeight: "900" }}
							>
								Any
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "14px" }}>
								Internal
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "14px" }}>
								External
							</Typography>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={
							<Typography
								variant="subtitle1"
								style={{ color: "black", fontWeight: "bold", fontSize: "14px" }}
							>
								Recency
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography
								variant="subtitle1"
								style={{ color: "#1976d2", fontSize: "14px", fontWeight: "900" }}
							>
								All time
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "14px" }}>
								This year
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "14px" }}>
								Last year
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "14px" }}>
								Custom range
							</Typography>
						}
					/>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={
							<Typography
								variant="subtitle1"
								style={{ color: "black", fontWeight: "bold", fontSize: "14px" }}
							>
								Case Type
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography
								variant="subtitle1"
								style={{ color: "#1976d2", fontSize: "14px", fontWeight: "900" }}
							>
								All
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "14px" }}>
								Civil
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "14px" }}>
								Corporate
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "14px" }}>
								Criminal
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "14px" }}>
								Family
							</Typography>
						}
					/>
				</ListItem>

				<ListItem>
					<ListItemText
						primary={
							<Typography
								variant="subtitle1"
								style={{ color: "black", fontWeight: "bold", fontSize: "14px" }}
							>
								Court
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography
								variant="subtitle1"
								style={{ color: "#1976d2", fontSize: "14px", fontWeight: "900" }}
							>
								All
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "14px" }}>
								Magistrates' Court
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "14px" }}>
								Crown Court
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "14px" }}>
								Court of Appeal
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "14px" }}>
								County Court
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "14px" }}>
								High Court
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button style={{ height: "25px" }}>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "14px" }}>
								UK Supreme Court
							</Typography>
						}
					/>
				</ListItem>
			</List>
		</div>
	);
};

export default FiltersList;
