import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Header(props) {
  const { title } = props;
  const intro = "Hello, LawyerName!";
  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          boxShadow: "0 2px 8px 0 rgba(0,0,0,0.2)",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <div className="header__logo">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Logo"
                style={{ maxHeight: "50px", marginRight: "8px" }}
              />
            </Link>
          </div>
          <Typography
            component="h2"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flex: 1 }}
          >
            {intro}
          </Typography>
        </div>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ marginRight: "35px" }}
        ></Typography>
        <Button size="small">My library</Button>
        <Button size="small">Settings</Button>
        <Button variant="outlined" size="small">
          Log out
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
