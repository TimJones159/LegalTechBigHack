import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <Link href="/">Home</Link>
        <Link href="/">My Library</Link>
        <Link href="/">Settings</Link>
        <Link href="/">Logout</Link>
      </div>
      <div>
        <span>&#169; Team 2 LLP.</span>
      </div>
    </div>
  );
};

export default Footer;
