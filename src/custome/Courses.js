import React, { useState } from "react";
import "./courses.css";
import adca from "./theames/adca.jpg";
import dca from "./theames/dca.jpg";
import dtp from "./theames/dtp.jpg";
import cfa from "./theames/cfa.jpg";
import adv from "./theames/adv.png";

function Courses() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [showMoreIndex, setShowMoreIndex] = useState({});

  const courseData = [
    {
      course_heading: "ADCA (Advanced Diploma in Computer Application)",
      price: "6000",
      name: "Dharmendra Kumar",
      image: adca,
      course: "DCA, DTP, CFA, INTERNET",
      fullCourse: "DCA, DTP, CFA, INTERNET",
      title: "ADCA",
    },
    {
      course_heading: "DCA (Diploma in Computer Application)",
      price: "4000",
      name: "Dharmendra Kumar",
      image: dca,
      course: "MS-DOS, MS-WINDOWS-10",
      fullCourse:
        "FUNDAMENTAL OF COMPUTER, INTERNET, MS-WINDOWS-7, MULTIMEDIA, HTML, ASSIGNMENT & PROJECT MODEL QUESTIONS, MS-OFFICE( INTRO TO MS-OFFICE, MS WORD, MS EXCEL, MS POWER POINT, MS ACCESS, MS PUBLISHER) ASSIGNMENT & PROJECT",
      title: "DCA",
    },
    {
      course_heading: "DTP (DeskTop Publishing)",
      price: "3000",
      name: "Dharmendra Kumar",
      image: dtp,
      course: "CONCEPT OF DTP, PRINTING WORKS",
      fullCourse:
        "ADOBE PHOTOSHOP CS, CPRE, DRAW X5, SCANNING, USE OF DIGITAL CAMERA, ABODE PAGEMAKER-7, ASSIGNMENTS & PROJECT",
      title: "DTP",
    },
    {
      course_heading: "CFA (Computer Fundamentals and Applications)",
      price: "3000",
      name: "Dharmendra Kumar",
      image: cfa,
      course: "PAYROLL, REPORTS, TAXES",
      fullCourse:
        "COMPANY INFORMATION,CONCEPT OF FINANCIAL ACCOUNTING, INVENTORY INFORMATION, VOUCHER ENTRY, TAXES(VAT, TCS, TDS, SERVICE TAX), MANAGEMENT OF COMPANY, SHORTCUT KEYS, ASSIGNMENTS & PROJECT",
      title: "CFA",
    },
    {
      course_heading: "Web Designing",
      price: "6000",
      name: "Abhiraj Kumar",
      image: adv,
      course: "HTML, CSS",
      fullCourse: "HTML, CSS, JavaScript, Responsive Design",
      title: "Web Designing",
    },
    {
      course_heading: "Advance Programming",
      price: "6000",
      name: "Abhiraj Kumar",
      image: adv,
      course: "C, C++",
      fullCourse: "",
      title: "Advance Programming",
    },
  ];

  const openModal = (courseName, fee) => {
    const formattedContent = `
    <h2>${courseName}</h2>
    <p><b>Course:</b> ${courseName}</p>
    <p><b>Fee:</b> <span style="color: red;">${fee}</span></p>`;

    setModalContent({ __html: formattedContent });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleShowMore = (event, index) => {
    event.stopPropagation(); // Prevent click from propagating to parent
    setShowMoreIndex((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="abt">
      <div className="course">
        <div>
          <div className="row1">
            {courseData &&
              courseData.map((course, index) => (
                <div className="column1" key={index}>
                  <div
                    className="about-course"
                    onClick={() => openModal(course.course_heading, course.price)}
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      style={{
                        width: "100%",
                        height: "150px",
                        transition: ".5s ease",
                      }}
                    />
                    <div className="container-course">
                      <h2>{course.name}</h2>
                      <p className="title">{course.title}</p>
                      <p>{course.course}</p>
                      {showMoreIndex[index] && (
                        <p>{course.fullCourse}</p>
                      )}
                      <p
                        style={{ color: "brown", cursor: "pointer" }}
                        onClick={(event) => toggleShowMore(event, index)} // Pass event to stop propagation
                      >
                        {showMoreIndex[index] ? "show less" : "more ..."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
            <h2>Course Details</h2>
            <div dangerouslySetInnerHTML={modalContent}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;
