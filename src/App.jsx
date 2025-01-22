import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Resume from "./components/Resume";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
