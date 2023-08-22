import React from "react";
import "./styles/App.css"; // Importing global styles
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation"; // Navigation bar
import AllCourses from "./pages/AllCourses"; // Page component for displaying all courses
import FullStack from "./pages/FullStack"; // Page component for Full Stack courses
import DataScience from "./pages/DataScience"; // Page component for Data Science courses
import CyberSecurity from "./pages/CyberSecurity"; // Page component for Cyber Security courses
import Career from "./pages/Career"; // Page component for Career-related courses
import Header from "./components/Header"; // Header component
import NavigationInfo from "./components/NavigationInfo"; // Navigation info component

const App = () => {
  return (
    <Router>
      <Header /> {/* Header section */}
      <NavigationInfo course="All" /> {/* Navigation info section */}
      <Navigation /> {/* Navigation bar */}
      <Routes>
        <Route path="/" element={<AllCourses />} /> {/* Route for all courses */}
        <Route path="/fullstack" element={<FullStack />} /> {/* Route for Full Stack */}
        <Route path="/datascience" element={<DataScience />} /> {/* Route for Data Science */}
        <Route path="/cybersecurity" element={<CyberSecurity />} /> {/* Route for Cyber Security */}
        <Route path="/career" element={<Career />} /> {/* Route for Career */}
      </Routes>
    </Router>
  );
};

export default App;
