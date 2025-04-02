import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@styles/index.css";
import * as P from "@pages";

function App() {
  return (
    <Router basename="/wren_site">
      <nav></nav>
      <Routes>
        <Route path="/" exact element={<P.Home />} />
        <Route path="*" element={<P.Wildcard />} />
      </Routes>
    </Router>
  );
}

export default App;
