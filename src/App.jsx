import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./files/Home";
import EndSars from "./files/EndSars";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="endsars" element={<EndSars />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
