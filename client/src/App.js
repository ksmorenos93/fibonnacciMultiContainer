import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Routes and Routes
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p></p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/" element={<Fib />} exact /> {/* Use element and exact */}
            <Route path="/otherpage" element={<OtherPage />} /> {/* Use element */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;