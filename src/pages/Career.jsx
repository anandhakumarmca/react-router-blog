import React from "react";
import "../styles/PageContent.css";
import CourseCard from "../components/CourseCard";

// Sample course data for the Career category
const courseData = [
  {
    id: 1,
    imageUrl: "images/image1.jpg",
    courseName: "10 Best Software Engineering Careers in 2023",
    link: "https://www.guvi.in/blog/best-software-engineering-career-options/",
  },
  {
    id: 2,
    imageUrl: "images/image2.jpg",
    courseName: "Top 5 Tech Careers of the Future",
    link: "https://www.guvi.in/blog/top-tech-careers-of-the-future/",
  },
  {
    id: 3,
    imageUrl: "images/image3.jpg",
    courseName: "5 Of The Highest Paying Tech Jobs In The Market Today!",
    link: "https://www.guvi.in/blog/top-high-paying-tech-jobs-in-the-market-today/",
  },
];

// Component that displays courses in the Career category
function Career() {
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
}

export default Career;
