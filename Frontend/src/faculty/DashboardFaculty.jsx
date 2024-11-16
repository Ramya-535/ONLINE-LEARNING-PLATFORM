import React, { useState, useEffect } from "react";
import AssignedSubjects from "./AssignedSubjects";
import CheckAssignMents from "./CheckAssignMents";
import FacultyProfile from "./FacultyProfile";
import { Link } from "react-router-dom";
import UploadedStudyMaterial from "./UploadedStudyMaterial";
import AssignMarks from "./AssignMarks";
import AxiosApi from "../AxiosAPI";

function DashboardFaculty() {
  const mobileScreen = window.matchMedia("(max-width: 990px)");
  const [isMobileScreen, setIsMobileScreen] = useState(mobileScreen.matches);
  const [studentNotifications, setStudentNotifications] = useState([]);
  const [facultyNotifications, setFacultyNotifications] = useState([]);
  const [subjectNotifications, setSubjectNotifications] = useState([]);
  const [marksNotifications, setMarksNotifications] = useState([]);
  const [questionNotifications, setQuestionNotifications] = useState([]);
  const [answerNotifications, setAnswerNotifications] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(mobileScreen.matches);
    };

    mobileScreen.addEventListener("change", handleResize);

    return () => {
      mobileScreen.removeEventListener("change", handleResize);
    };
  }, []);

  useEffect(() => {
    // Fetching data for each category separately
    const fetchStudentNotifications = async () => {
      try {
        const response = await AxiosApi.get("student/added");
        setStudentNotifications(response.data);
      } catch (error) {
        console.error("Error fetching student notifications", error);
      }
    };

    const fetchFacultyNotifications = async () => {
      try {
        const response = await AxiosApi.get("faculty/added");
        setFacultyNotifications(response.data);
      } catch (error) {
        console.error("Error fetching faculty notifications", error);
      }
    };

    const fetchSubjectNotifications = async () => {
      try {
        const response = await AxiosApi.get("subject/added");
        setSubjectNotifications(response.data);
      } catch (error) {
        console.error("Error fetching subject notifications", error);
      }
    };

    const fetchMarksNotifications = async () => {
      try {
        const response = await AxiosApi.get("marks/added");
        setMarksNotifications(response.data);
      } catch (error) {
        console.error("Error fetching marks notifications", error);
      }
    };

    const fetchQuestionNotifications = async () => {
      try {
        // const response = await AxiosApi.get("question/added");
        // setQuestionNotifications(response.data);
      } catch (error) {
        console.error("Error fetching question notifications", error);
      }
    };

    const fetchAnswerNotifications = async () => {
      try {
        // const response = await AxiosApi.get(
        //   "answer/added"
        // );
        // setAnswerNotifications(response.data);
      } catch (error) {
        console.error("Error fetching answer notifications", error);
      }
    };

    fetchStudentNotifications();
    fetchFacultyNotifications();
    fetchSubjectNotifications();
    fetchMarksNotifications();
    fetchQuestionNotifications();
    fetchAnswerNotifications();
  }, []);


  const handleDropdownToggle = (event) => {
    const dropdown = event.currentTarget.closest(".dashboard-nav-dropdown");
    const siblingDropdowns = dropdown.parentElement.querySelectorAll(
      ".dashboard-nav-dropdown"
    );

    siblingDropdowns.forEach((siblingDropdown) => {
      siblingDropdown.classList.remove("show");
    });

    dropdown.classList.toggle("show");
  };

  const handleMenuToggle = () => {
    if (isMobileScreen) {
      document.querySelector(".dashboard-nav").classList.toggle("mobile-show");
    } else {
      document
        .querySelector(".dashboard")
        .classList.toggle("dashboard-compact");
    }
  };
  const [clickRender, setClickRender] = useState("home");
  const handleClicks = (click) => {
    setClickRender(click);
  };
  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        <header>
          <a href="#!" className="menu-toggle" onClick={handleMenuToggle}>
            <i className="fas fa-bars"></i>
          </a>
          <a href="#" className="brand-logo">
            <span className="material-symbols-outlined">
              cast_for_education
            </span>
            <span>Faculty</span>
          </a>
        </header>
        <nav className="dashboard-nav-list">
          <a
            href="#"
            className="dashboard-nav-item"
            
            onClick={() => handleClicks("home")}
          >
            <i className="fas fa-home"></i> Home
          </a>
        
          {/* <a href="#" className="dashboard-nav-item active text-wrap " onClick={()=>handleClicks("upload")}>
            <i className="fa-solid fa-chalkboard-user"></i>Uploaded Material
          </a> */}
            <a
            href="#"
            // className="dashboard-nav-item active text-wrap "
            className={`dashboard-nav-item text-wrap active ${clickRender === "subject"&&' text-warning fs-5  '}`}

            onClick={() => handleClicks("subject")}
          >
            <i className="fa-solid fa-chalkboard-user"></i>Courses
          </a>
          <a
            href="#"
            // className="dashboard-nav-item active text-wrap "
            className={`dashboard-nav-item text-wrap active ${clickRender === "marks"&&' text-warning fs-5  '}`}

            onClick={() => handleClicks("marks")}
          >
            <i className="fa-regular fa-circle-check"></i> Marks
          </a>
        
          <a
            href="#"
            // className="dashboard-nav-item"
            className={`dashboard-nav-item text-wrap active ${clickRender === "assignment"&&' text-warning '}`}

            onClick={() => handleClicks("assignment")}
          >
            <i className="fa-solid fa-list-check"></i> Check Assignments
          </a>
  {/* <a href="#" className="dashboard-nav-item">
            <i className="fa-regular fa-pen-to-square"></i>Update Subjects
          </a> */}
          <a
            href="#"
            // className="dashboard-nav-item"
            className={`dashboard-nav-item text-wrap active ${clickRender === "profile"&&' text-warning fs-5  '}`}

            onClick={() => handleClicks("profile")}
          >
            <i className="fas fa-user"></i> Profile
          </a>
          <div className="nav-item-divider"></div>
          <Link to="/" className="dashboard-nav-item">
            <i className="fas fa-sign-out-alt"></i> Logout
          </Link>
        </nav>
      </div>
      <div className="dashboard-app">
        <header className="dashboard-toolbar">
          <a href="#!" className="menu-toggle" onClick={handleMenuToggle}>
            <i className="fas fa-bars"></i>
          </a>
          <h4>Online Learning Platform</h4>
        </header>

        <div className="dashboard-content ">
          <div className="container">
            <div className="">
              <div className=""></div>
              <div className="">
                {clickRender === "profile" && <FacultyProfile />}
                {clickRender === "subject" && <AssignedSubjects />}
                {clickRender === "assignment" && <CheckAssignMents />}
                {clickRender === "upload" && <UploadedStudyMaterial />}
                {clickRender === "home" && (
                  <div>
                    <div className="marquee-text">
                      <marquee direction="up" scrollamount="2">
                        {studentNotifications&&studentNotifications.map((note, idx) => (
                          <p
                            key={`student-${idx}`}
                            className="text-decoration-underline text-info"
                          >
                            {note.studentName} is added successfully
                          </p>
                        ))}
                        {facultyNotifications&&facultyNotifications.map((note, idx) => (
                          <p
                            key={`faculty-${idx}`}
                            className="text-decoration-underline text-warning"
                          >
                            {note.facultyName} is added successfully
                          </p>
                        ))}
                        {/* <strong>Subjects:</strong> */}
                        {subjectNotifications&&subjectNotifications.map((note, idx) => (
                          <p
                            key={`subject-${idx}`}
                            className="text-decoration-underline text-primary"
                          >
                            {note.subjects} is added successfully
                          </p>
                        ))}
                        {/* <strong>Marks:</strong> */}
                        {marksNotifications&&marksNotifications.map((note, idx) => (
                          <p
                            key={`marks-${idx}`}
                            className="text-decoration-underline text-danger"
                          >
                            {note.semester} marks released successfully
                          </p>
                        ))}
                        {/* <strong>Questions:</strong> */}
                        {questionNotifications&&questionNotifications.map((note, idx) => (
                          <p
                            key={`question-${idx}`}
                            className="text-decoration-underline text-success"
                          >
                            {note.companyName} previous Placement Questions Added Successfully
                          </p>
                        ))}
                        {/* <strong>Answers:</strong> */}
                        {answerNotifications&&answerNotifications.map((note, idx) => (
                          <p
                            key={`answer-${idx}`}
                            className="text-decoration-underline text-secondary"
                          >
                            {note.answer.student.StudentName} submitted assignment successfully
                          </p>
                        ))}
                      </marquee>
                    </div>
                  </div>
                )}
                {clickRender === "marks" && <AssignMarks />}
              </div>
            </div>
          </div> 
        </div>
      </div>
      <style jsx="true">
        {`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin-top: 0;
            margin-bottom: 0.5rem;
          }

          p {
            margin-top: 0;
            margin-bottom: 1rem;
          }

          a {
            color: #3f84fc;
            text-decoration: none;
            background-color: transparent;
          }

          a:hover {
            color: #0458eb;
            text-decoration: underline;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          .h1,
          .h2,
          .h3,
          .h4,
          .h5,
          .h6 {
            font-family: "Nunito", sans-serif;
            margin-bottom: 0.5rem;
            font-weight: 500;
            line-height: 1.2;
          }

          h1,
          .h1 {
            font-size: 2.5rem;
            font-weight: normal;
          }

          .card {
            position: relative;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: border-box;
            border: 1px solid rgba(0, 0, 0, 0.125);
            border-radius: 0;
          }

          .card-body {
            -webkit-box-flex: 1;
            -webkit-flex: 1 1 auto;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            padding: 1.25rem;
          }

          .card-header {
            padding: 0.75rem 1.25rem;
            margin-bottom: 0;
            background-color: rgba(0, 0, 0, 0.03);
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            text-align: center;
          }

          .dashboard {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            min-height: 100vh;
          }

          .dashboard-app {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-flex: 2;
            -webkit-flex-grow: 2;
            -ms-flex-positive: 2;
            flex-grow: 2;
            margin-top: 84px;
          }

          .dashboard-content {
            -webkit-box-flex: 2;
            -webkit-flex-grow: 2;
            -ms-flex-positive: 2;
            flex-grow: 2;
            padding: 25px;
          }

          .dashboard-nav {
            min-width: 238px;
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            overflow: auto;
            background-color: #373193;
          }

          .dashboard-compact .dashboard-nav {
            display: none;
          }

          .dashboard-nav header {
            min-height: 84px;
            padding: 8px 27px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
          }

          .dashboard-nav header .menu-toggle {
            display: none;
            margin-right: auto;
          }

          .dashboard-nav a {
            color: #515151;
          }

          .dashboard-nav a:hover {
            text-decoration: none;
          }

          .dashboard-nav {
            background-color: #443ea2;
          }

          .dashboard-nav a {
            color: #fff;
          }

          .brand-logo {
            font-family: "Nunito", sans-serif;
            font-weight: bold;
            font-size: 20px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            color: #515151;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
          }

          .brand-logo:focus,
          .brand-logo:active,
          .brand-logo:hover {
            color: #dbdbdb;
            text-decoration: none;
          }

          .brand-logo i {
            color: #d2d1d1;
            font-size: 27px;
            margin-right: 10px;
          }

          .dashboard-nav-list {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
          }

          .dashboard-nav-item {
            min-height: 56px;
            padding: 8px 20px 8px 70px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            letter-spacing: 0.02em;
            transition: ease-out 0.5s;
          }

          .dashboard-nav-item i {
            width: 36px;
            font-size: 19px;
            margin-left: -40px;
          }

          .dashboard-nav-item:hover {
            background: rgba(255, 255, 255, 0.04);
          }

          .active {
            background: rgba(0, 0, 0, 0.1);
          }

          .dashboard-nav-dropdown {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
          }

          .dashboard-nav-dropdown.show {
            background: rgba(255, 255, 255, 0.04);
          }

          .dashboard-nav-dropdown.show > .dashboard-nav-dropdown-toggle {
            font-weight: bold;
          }

          .dashboard-nav-dropdown.show > .dashboard-nav-dropdown-toggle:after {
            -webkit-transform: none;
            -o-transform: none;
            transform: none;
          }

          .dashboard-nav-dropdown.show > .dashboard-nav-dropdown-menu {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
          }

          .dashboard-nav-dropdown-toggle:after {
            content: "";
            margin-left: auto;
            display: inline-block;
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid rgba(81, 81, 81, 0.8);
            -webkit-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            transform: rotate(90deg);
          }

          .dashboard-nav .dashboard-nav-dropdown-toggle:after {
            border-top-color: rgba(255, 255, 255, 0.72);
          }

          .dashboard-nav-dropdown-menu {
            display: none;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
          }

          .dashboard-nav-dropdown-item {
            min-height: 40px;
            padding: 8px 20px 8px 70px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            transition: ease-out 0.5s;
          }

          .dashboard-nav-dropdown-item:hover {
            background: rgba(255, 255, 255, 0.04);
          }

          .menu-toggle {
            position: relative;
            width: 42px;
            height: 42px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            color: #443ea2;
          }

          .menu-toggle:hover,
          .menu-toggle:active,
          .menu-toggle:focus {
            text-decoration: none;
            color: #875de5;
          }

          .menu-toggle i {
            font-size: 20px;
          }

          .dashboard-toolbar {
            min-height: 84px;
            background-color: #dfdfdf;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            padding: 8px 27px;
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 1000;
          }

          .nav-item-divider {
            height: 1px;
            margin: 1rem 0;
            overflow: hidden;
            background-color: rgba(236, 238, 239, 0.3);
          }

          @media (min-width: 992px) {
            .dashboard-app {
              margin-left: 238px;
            }

            .dashboard-compact .dashboard-app {
              margin-left: 0;
            }
          }

          @media (max-width: 768px) {
            .dashboard-content {
              padding: 15px 0px;
            }
          }

          @media (max-width: 992px) {
            .dashboard-nav {
              display: none;
              position: fixed;
              top: 0;
              right: 0;
              left: 0;
              bottom: 0;
              z-index: 1070;
            }

            .dashboard-nav.mobile-show {
              display: block;
            }
          }

          @media (max-width: 992px) {
            .dashboard-nav header .menu-toggle {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
            }
          }

          @media (min-width: 992px) {
            .dashboard-toolbar {
              left: 238px;
            }

            .dashboard-compact .dashboard-toolbar {
              left: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default DashboardFaculty;
