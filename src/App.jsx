import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./Pages/Index";
import Test from "./Pages/Test";
import Result from "./Pages/Result";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
