import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as P from "@pages";

function App() {
  return (
    <Router>
      <nav></nav>
      <Routes>
        <Route path="/" exact element={<P.Home />} />
        <Route path="*" element={<P.Wildcard />} />
      </Routes>
    </Router>
  );
}

export default App;
