import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
const Tabs = () => {
  return (
    <div className="tabs">
      <ul className="flex flex-wrap">
        <Link to="/" className="nav-item">
          Home Page
        </Link>
        <Link to="/about" className="nav-item">
          About Us
        </Link>
      </ul>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Tabs;
