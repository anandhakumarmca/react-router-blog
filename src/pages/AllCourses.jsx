import React from "react";
import "../styles/PageContent.css";
import Career from "./Career";
import FullStack from "./FullStack";
import CyberSecurity from "./CyberSecurity";
import DataScience from "./DataScience";

// Component that displays all available courses
function AllCourses() {
  return (
    <>
      <FullStack />
      <DataScience />
      <CyberSecurity />
      <Career />
    </>
  );
}

export default AllCourses;
