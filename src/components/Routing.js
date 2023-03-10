import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage";
import Results from "./Results";

export const Routing = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<SearchPage />} />
        <Route path="/results" element={<Results />} />
        <Route exact path="*" element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default Routing;
