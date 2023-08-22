import React from "react";
import "../styles/PageContent.css";
import CourseCard from "../components/CourseCard";

// Sample course data for the DataScience category
const courseData = [
  {
    id: 1,
    imageUrl: "images/image2.jpg",
    courseName: "10 Best Data Science Online Courses for Beginners | 2023",
    link: "https://www.guvi.in/blog/best-data-science-courses-for-beginners/",
  },
  {
    id: 2,
    imageUrl: "images/image3.jpg",
    courseName: "Best Way to Learn Data Science in 2023",
    link: "https://www.guvi.in/blog/best-way-to-learn-data-science/",
  },
  {
    id: 3,
    imageUrl: "images/image1.jpg",
    courseName: "Best Python Libraries for Data Science Career in 2023",
    link: "https://www.guvi.in/blog/best-python-libraries-for-data-science-career/",
  },
];

// Component that displays courses in the DataScience category
const DataScience = () => {
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

export default DataScience;
