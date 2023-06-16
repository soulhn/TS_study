import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import EventBubbling from "./components/EventBubbling";
import Learn1 from "./components/Learn1";
import Learn2 from "./components/Learn2";
import Learn3 from "./components/Learn3";
import Learn4 from "./components/Learn4";
import Learn5 from "./components/Learn5";
import Learn6 from "./components/Learn6";
import Learn7 from "./components/Learn7";

import EventCapturing from "./components/EventCapturing";

function App() {
  const learns = [
    { path: "/learn1", component: <Learn1 />, name: "Learn1" },
    { path: "/learn2", component: <Learn2 />, name: "Learn2" },
    { path: "/learn3", component: <Learn3 />, name: "Learn3" },
    { path: "/learn4", component: <Learn4 />, name: "Learn4" },
    { path: "/learn5", component: <Learn5 />, name: "Learn5" },
    { path: "/learn6", component: <Learn6 />, name: "Learn6" },
    { path: "/learn7", component: <Learn7 />, name: "Learn7" },
  ];

  return (
    <div className="App">
      <nav>
        <ul>
          {learns.map((Learn, index) => (
            <li key={index}>
              <Link to={`/learn${index + 1}`}>Learn{index + 1}</Link>
            </li>
          ))}
          <li>
            <Link to="/eventBubbling">eventBubbling</Link>
          </li>
          <li>
            <Link to="/eventCapturing">EventCapturing</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {learns.map((learn, index) => {
          return <Route key={index} path={learn.path} element={learn.component} />;
        })}
        <Route path="/eventBubbling" element={<EventBubbling />}></Route>
        <Route path="/eventCapturing" element={<EventCapturing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
