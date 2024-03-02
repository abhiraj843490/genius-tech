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

  // const courseData = [
  //   {
  //     course_heading: "ADCA (Advanced Diploma in Computer Application)",
  //     price: "6000",
  //     name: "Dharmendra Kumar",
  //     image: adca,
  //     course: "DCA, DTP, CFA, INTERNET",
  //     title: "ADCA",
  //   },
  //   {
  //     course_heading: "DCA (Advanced Diploma in Computer Application)",
  //     price: "6000",
  //     name: "Dharmendra Kumar",
  //     image: dca,
  //     course:
  //       "FUNDAMENTAL OF COMPUTER, MS-DOS, MS-WINDOWS-7,MS-WINDOWS-10, INTERNET, MULTIMEDIA, HTML, ASSIGNMENT & PROJECT MODEL QUESTIONS, MS-OFFICE( INTRO TO MS-OFFICE, MS WORD, MS EXCEL, MS POWER POINT, MS ACCESS, MS PUBLISHER) ASSIGNMENT & PROJECT",
  //     title: "DCA",
  //   },
  //   {
  //     course_heading: "DTP (DeskTop Publishing)",
  //     price: "6000",
  //     name: "Dharmendra Kumar",
  //     image: dtp,
  //     course:
  //       "CONCEPT OF DTP, ABODE PAGEMAKER 7, ADOBE PHOTOSHOP CS, CPRE, DRAW X5, SCANNING, USE OF DIGITAL CAMERA, PRINTING WORKS, ASSIGNMENTS & PROJECT",
  //     title: "DTP",
  //   },
  //   {
  //     course_heading: "CFA(Computer Fundamentals and Applications)",
  //     price: "6000",
  //     name: "Dharmendra Kumar",
  //     image: cfa,
  //     course:
  //       "CONCEPT OF FINANCIAL ACCOUNTING, COMPANY INFORMATION,INVENTORY INFORMATION, VOUCHER ENTRY, TAXES(VAT, TCS, TDS, SERVICE TAX), PAYROLL, REPORTS, MANAGEMENT OF COMPANY,SHORTCUT KEYS, ASSIGNMENTS & PROJECT",
  //     title: "CFA",
  //   },
  //   {
  //     course_heading: "Web designing",
  //     price: "6000",
  //     name: "Abhiraj Kumar",
  //     image: adv,
  //     course: "HTML, CSS",
  //     title: "Web designing",
  //   },
  //   {
  //     course_heading: "Web designing",
  //     price: "6000",
  //     name: "Abhiraj Kumar",
  //     image: adv,
  //     course: "HTML, CSS",
  //     title: "Web designing",
  //   },
  // ];

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

  return (
    <div className="abt">
      <div className="course">
        <div>
          <h2 style={{ textAlign: "center" }}>Our Courses</h2>

          <div className="row1">
            {/* {courseData &&
              courseData.map((ele, index) => (
                <div className="column1">
                  <div
                    className="about-course"
                    onClick={() => openModal(ele.course_heading, ele.price)}
                  >
                    <img
                      src={ele.image}
                      alt="adca"
                      style={{
                        width: "100%",
                        height: "150px",
                        transition: ".5s ease",
                      }}
                    />
                    <div className="container-course">
                      <h2>{ele.name}</h2>
                      <p className="title">{ele.title}</p>
                      <p>{ele.course}</p>
                    </div>
                  </div>
                </div>
              ))} */}
            <div className="column1">
              <div
                className="about-course"
                onClick={() =>
                  openModal(
                    "ADCA (Advanced Diploma in Computer Application)",
                    "6000 Rs."
                  )
                }
              >
                <img
                  src={adca}
                  alt="adca"
                  style={{
                    width: "100%",
                    height: "150px",
                    transition: ".5s ease",
                  }}
                />
                <div className="container-course">
                  <h2>Dharmendra Kumar</h2>
                  <p className="title">ADCA</p>
                  <p>DCA, DTP, CFA, INTERNET</p>
                </div>
              </div>
            </div>

            <div className="column1">
              <div
                className="about-course"
                onClick={() =>
                  openModal("DCA (Diploma in Computer Application)", "4000 Rs.")
                }
              >
                <img
                  src={dca}
                  alt="dca"
                  style={{
                    width: "100%",
                    height: "150px",
                    transition: ".5s ease",
                  }}
                />
                <div className="container-course">
                  <h2>Dharmendra Kumar</h2>
                  <p className="title">DCA</p>
                  <p>
                    FUNDAMENTAL OF COMPUTER, MS-DOS, MS-WINDOWS-7,
                    MS-WINDOWS-10, INTERNET, MULTIMEDIA, HTML, ASSIGNMENT &
                    PROJECT MODEL QUESTIONS, MS-OFFICE( INTRO TO MS-OFFICE, MS
                    WORD, MS EXCEL, MS POWER POINT, MS ACCESS, MS PUBLISHER)
                    ASSIGNMENT & PROJECT
                  </p>
                </div>
              </div>
            </div>

            <div className="column1">
              <div
                className="about-course"
                onClick={() => openModal("DTP(DeskTop Publishing)", "3000 Rs.")}
              >
                <img
                  src={dtp}
                  alt="John"
                  style={{
                    width: "100%",
                    height: "150px",
                    transition: ".5s ease",
                  }}
                />
                <div className="container-course">
                  <h2>Dharmendra Kumar</h2>
                  <p className="title">DTP</p>
                  <p>
                    CONCEPT OF DTP, ABODE PAGEMAKER 7, ADOBE PHOTOSHOP CS, CPRE,
                    DRAW X5, SCANNING, USE OF DIGITAL CAMERA, PRINTING WORKS,
                    ASSIGNMENTS & PROJECT
                  </p>
                </div>
              </div>
            </div>
            <div className="column1">
              <div
                className="about-course"
                onClick={() =>
                  openModal(
                    "CFA(Computer Fundamentals and Applications)",
                    "3000 Rs."
                  )
                }
              >
                <img
                  src={cfa}
                  alt="John"
                  style={{
                    width: "100%",
                    height: "150px",
                    transition: ".5s ease",
                  }}
                />
                <div className="container-course">
                  <h2>Dharmendra Kumar</h2>
                  <p className="title">CFA</p>
                  <p>
                    CONCEPT OF FINANCIAL ACCOUNTING, COMPANY INFORMATION,
                    INVENTORY INFORMATION, VOUCHER ENTRY, TAXES(VAT, TCS, TDS,
                    SERVICE TAX), PAYROLL, REPORTS, MANAGEMENT OF COMPANY,
                    SHORTCUT KEYS, ASSIGNMENTS & PROJECT
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row1">
            <div className="column1">
              <div
                className="about-course"
                onClick={() => openModal("Web Designing", "6000 Rs.")}
              >
                <img
                  src={adv}
                  alt="John"
                  style={{
                    width: "100%",
                    height: "150px",
                    transition: ".5s ease",
                  }}
                />
                <div className="container-course">
                  <h2>Abhiraj Kumar</h2>
                  <p className="title">Web designing</p>
                  <p>HTML, CSS</p>
                </div>
              </div>
            </div>

            <div className="column1">
              <div
                className="about-course"
                onClick={() => openModal("Advance Programming", "6000 Rs.")}
              >
                <img
                  src={adv}
                  alt="John"
                  style={{
                    width: "100%",
                    height: "150px",
                    transition: ".5s ease",
                  }}
                />
                <div className="container-course">
                  <h2>Abhiraj Kumar</h2>
                  <p className="title">Advance Programming</p>
                  <p>C, C++</p>
                </div>
              </div>
            </div>
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
