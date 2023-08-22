import React from "react";
import "../styles/PageContent.css";
import CourseCard from "../components/CourseCard";

// Sample course data for the DataScience category
const courseData = [
  {
    id: 1,
    imageUrl: "images/image3.jpg",
    courseName: "Top Skills To Become a Full Stack Developer in 2023",
    link: "https://www.guvi.in/blog/top-skills-to-become-a-full-stack-developer/",
  },
  {
    id: 2,
    imageUrl: "images/image1.jpg",
    courseName: "The Future & Scope of Full Stack Developers in India",
    link: "https://www.guvi.in/blog/the-future-scope-of-full-stack-developers-in-india/",
  },
  {
    id: 3,
    imageUrl: "images/image2.jpg",
    courseName: "Top 10 Full Stack Developer Frameworks in 2023",
    link: "https://www.guvi.in/blog/full-stack-developer-frameworks/",
  },
];

// Component that displays courses in the FullStack category
const FullStack = () => {
  return (
    <div className="page-content">
      <div className="course-card-container">
        {courseData.map((course) => (
          <CourseCard
            key={course.id}
            imageUrl={course.imageUrl}
            courseName={course.courseName}
            link={course.link}
          />
        ))}
      </div>
    </div>
  );
};

export default FullStack;
