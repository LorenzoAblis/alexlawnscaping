import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/shopping" replace />} /> */}
        <Route path="/home" element={<Home />} />
        {/* <Route path="/inventory" element={<Inventory />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
