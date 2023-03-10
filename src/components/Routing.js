import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Results from "./Results";

export const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/search" element={<Results />} />
        <Route exact path="*" element={<App />} />
      </Routes>
    </Router>
  );
};

export default Routing;
