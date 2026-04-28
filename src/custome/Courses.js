import React, { useState } from "react";
import adca from "./theames/adca.jpg";
import dca from "./theames/dca.jpg";
import dtp from "./theames/dtp.jpg";
import cfa from "./theames/cfa.jpg";
import adv from "./theames/adv.png";
import "./courses.css";

function Courses() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const courseData = [
    {
      course_heading: "ADCA (Advanced Diploma in Computer Application)",
      price: "6000 rs.",
      name: "Advanced Diploma in Computer Application",
      image: adca,
      // course: "DCA, DTP, CFA, INTERNET",
      fullCourse: "DCA, DTP, CFA, INTERNET",
      title: "Dharmendra Kumar",
    },
    {
      course_heading: "DCA (Diploma in Computer Application)",
      price: "4000 rs.",
      name: "Diploma in Computer Application",
      image: dca,
      // course: "MS-DOS, MS-WINDOWS-10",
      fullCourse: 
        "MS-DOS, MS-WINDOWS-10, FUNDAMENTAL OF COMPUTER, INTERNET, MS-WINDOWS-7, MULTIMEDIA, HTML, ASSIGNMENT & PROJECT MODEL QUESTIONS, MS-OFFICE( INTRO TO MS-OFFICE, MS WORD, MS EXCEL, MS POWER POINT, MS ACCESS, MS PUBLISHER) ASSIGNMENT & PROJECT",
      title: "Dharmendra Kumar",
    },
    {
      course_heading: "DTP (DeskTop Publishing)",
      price: "3000 rs.",
      name: "DeskTop Publishing",
      image: dtp,
      // course: "",
      fullCourse:
        "CONCEPT OF DTP, PRINTING WORKS, ADOBE PHOTOSHOP CS, CPRE, DRAW X5, SCANNING, USE OF DIGITAL CAMERA, ABODE PAGEMAKER-7, ASSIGNMENTS & PROJECT",
      title: "Dharmendra Kumar",
    },
    {
      course_heading: "CFA (Computer Fundamentals and Applications)",
      price: "3000 rs.",
      name: "Computer Fundamentals and Applications",
      image: cfa,
      // course: "",
      fullCourse:
        "COMPANY INFORMATION, PAYROLL, REPORTS, TAXES, CONCEPT OF FINANCIAL ACCOUNTING, INVENTORY INFORMATION, VOUCHER ENTRY, TAXES(VAT, TCS, TDS, SERVICE TAX), MANAGEMENT OF COMPANY, SHORTCUT KEYS, ASSIGNMENTS & PROJECT",
      title: "Dharmendra Kumar",
    },
    {
      course_heading: "Web Designing",
      price: "6000 rs.",
      name: "Web Designing",
      image: adv,
      // course: "HTML, CSS",
      fullCourse: "HTML, CSS, JavaScript, Responsive Design",
      title: "Abhiraj Kumar",
    },
    {
      course_heading: "Advance Programming",
      price: "6000 rs.",
      name: "Advance Programming",
      image: adv,
      // course: "",
      fullCourse: "C, C++, Java, Python",
      title: "Abhiraj Kumar",
    },
  ];

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="abt">
      <div className="course">
        <div className="row1">
          {courseData?.map((course, index) => (
            <div className="column1" key={index}>
              <div
                className={`flip-card ${flippedIndex === index ? "flipped" : ""}`}
                onClick={() => toggleFlip(index)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={course?.image}
                      alt={course?.title}
                      style={{
                        width: "100%",
                        height: "150px",
                      }}
                    />
                    <div className="container-course">
                      <h3>{course?.name}</h3>
                      <p className="title">{course.title}</p>
                      <p>{course?.course}</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    {/* <h2>{course.course_heading}</h2> */}
                    <p><b>Price</b>: {course?.price}</p>
                    <p><b>Course</b>: {course?.fullCourse}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
