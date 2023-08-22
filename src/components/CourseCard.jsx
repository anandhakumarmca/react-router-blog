import React from "react";

// CourseCard component for displaying course information
const CourseCard = ({ imageUrl, courseName, link }) => {
  return (
    <div className="course-card">
      <a href={link}>
        <img src={imageUrl} alt={courseName} />
        <h2>{courseName}</h2>
      </a>
    </div>
  );
};

export default CourseCard;
