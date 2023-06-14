import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import EventBubbling from "./components/EventBubbling";
import Learn1 from "./components/Learn1";
import Learn2 from "./components/Learn2";
import Learn3 from "./components/Learn1";
import EventCapturing from "./components/EventCapturing";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/learn1">Learn1</Link>
          </li>
          <li>
            <Link to="/learn2">Learn2</Link>
          </li>
          <li>
            <Link to="/learn3">Learn3</Link>
          </li>
          <li>
            <Link to="/eventBubbling">eventBubbling</Link>
          </li>
          <li>
            <Link to="/eventCapturing">EventCapturing</Link>
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
        <Route path="/learn2" element={<Learn2 />} />
        <Route path="/learn3" element={<Learn3 />} />
        <Route path="/eventBubbling" element={<EventBubbling />}></Route>
        <Route path="/eventCapturing" element={<EventCapturing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
