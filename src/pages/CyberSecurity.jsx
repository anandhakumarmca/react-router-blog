import React from "react";
import "../styles/PageContent.css";
import CourseCard from "../components/CourseCard";

// Sample course data for the CyberSecurity category
const courseData = [
  {
    id: 1,
    imageUrl: "images/image2.jpg",
    courseName:
      "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    link: "https://www.guvi.in/blog/what-is-cybersecurity/",
  },
  {
    id: 2,
    imageUrl: "images/image1.jpg",
    courseName: "How Is Cyber Security Important To Our Lives?",
    link: "https://www.guvi.in/blog/why-should-you-learn-cyber-security/",
  },
  {
    id: 3,
    imageUrl: "images/image3.jpg",
    courseName: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    link: "https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/",
  },
];

// Component that displays courses in the CyberSecurity category
const CyberSecurity = () => {
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

export default CyberSecurity;
