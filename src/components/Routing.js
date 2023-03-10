import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchSection from "./SearchSection";
import Results from "./Results";

export const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SearchSection />} />
        <Route path="/search" element={<Results />} />
        <Route exact path="*" element={<SearchSection />} />
      </Routes>
    </Router>
  );
};

export default Routing;
