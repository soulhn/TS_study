import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import Learn1 from "./components/Learn1.tsx";

import Learn1 from "./components/learn1";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/learn1">Learn1</Link>
          </li>
          {/* <li>
            <Link to="/mypage">MyPage</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li> */}
        </ul>
      </nav>

      <Routes>
        <Route path="/learn1" element={<Learn1 />} />
      </Routes>
    </div>
  );
}

export default App;
