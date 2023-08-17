import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AllCourses from "./pages/AllCourses";
import FullStack from "./pages/FullStack";
import DataScience from "./pages/DataScience";
import CyberSecurity from "./pages/CyberSecurity";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<AllCourses />} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
      </Routes>
    </Router>
  );
};

export default App;
