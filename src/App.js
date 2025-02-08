import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <switch>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </switch>
    </Router>
  );
}

export default App;
