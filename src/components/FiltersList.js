import { List, ListItem, ListItemText, Typography } from "@mui/material";
import "../index.css";

export const FiltersList = () => {
	return (
		<div>
			Filters
			<List>
				{/* add filter options here */}
				<ListItem style={{ padding: "4px 16px", height: "32px" }}>
					<ListItemText
						primary={
							<Typography
								variant="subtitle1"
								style={{ color: "black", fontWeight: "bold", fontSize: "12px" }}
							>
								Knowledge
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								Any
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								Internal
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
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
								style={{ color: "black", fontWeight: "bold", fontSize: "12px" }}
							>
								Recency
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								All time
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								This year
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								Last year
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
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
								style={{ color: "black", fontWeight: "bold", fontSize: "12px" }}
							>
								Case Type
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								All
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								Civil
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								Corporate
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								Criminal
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
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
								style={{ color: "black", fontWeight: "bold", fontSize: "12px" }}
							>
								Court
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								All
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								Magistrates' Court
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								Crown Court
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								Court of Appeal
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								County Court
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								High Court
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
								Court of Appeal
							</Typography>
						}
					/>
				</ListItem>
				<ListItem button>
					<ListItemText
						primary={
							<Typography variant="subtitle1" style={{ color: "#1976d2", fontSize: "12px" }}>
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
