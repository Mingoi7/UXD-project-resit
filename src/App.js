import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import Search from "./pages/search";
import Tour from "./pages/tour";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tour" element={<Tour />} />
      </Routes>
    </div>
  );
}
