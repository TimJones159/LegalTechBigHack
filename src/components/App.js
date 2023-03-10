import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchSection from "./SearchSection";
import Header from "./Header";
import Footer from "./Footer";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Logo" />
      <Container maxWidth="lg">
        <main>
          <SearchSection />
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <p>test</p>
            </Grid>
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
