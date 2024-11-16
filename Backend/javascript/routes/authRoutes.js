import express from "express";
import { addFaculty, addStudent, addSubject, deleteFaculty, deleteStudent, getFaculties, getStudents, getSubjects, } from "../controllers/Admin.js";
import { upload } from "../middlewares/multerMiddleware.js";
import { getQuestions, uploadQuestions } from "../controllers/Placement.js";
import { changePassword, facultyLogin, getFaculty, getStudent, updateFacultyProfile, } from "../controllers/Faculty.js";
import { StudentMarks, addAssignment, studentGetCourses, studentLogin, studentchangePassword, updateStudentProfile, } from "../controllers/Student.js";
import { assignMarks, coursesAdd, getAssignments, getCourses, getMarks, getStudentAsignments, getStudentBySemester, updateStatus, } from "../controllers/Hod.js";
import { checkSchema } from "express-validator";
import { facultyValidation, studentValidation, } from "../validators/validationSchema.js";
const router = express.Router();
/*  ADMIN PART */
// Apply multer middleware before calling the controller(adding faculty)
router.post("/faculty/add", upload.single("facultyPhoto"), checkSchema(facultyValidation), addFaculty);
// View Faculties
router.get("/faculty", getFaculties);
// delete the Faculty
router.delete("/faculty/:id", deleteFaculty);
// Add the Student
router.post("/student/add", upload.single("studentPhoto"), checkSchema(studentValidation), addStudent);
// Get the students
router.get("/student", getStudents);
// delete the Student
router.delete("/student/:id", deleteStudent);
// Adding the Subject
router.post("/subject/add", addSubject);
// Get the Subject
router.get("/subject", getSubjects);
/* Placement Admin */
// Post questions
router.post("/question/upload", upload.single("file"), uploadQuestions);
// View posted Questions
router.get("/question", getQuestions);
/* Faculty */
// Faculty Login
router.post("/faculty/login", facultyLogin);
// Faculty Update
router.put("/faculty/update/:id", upload.single("facultyPhoto"), checkSchema(facultyValidation), updateFacultyProfile);
// Change Password
router.post("/faculty/change-password", changePassword);
// Get student Added
router.get("/student/added", getStudent);
// Get faculty Added details
router.get("/faculty/added", getFaculty);
// Subject Added Successfully
router.get("/subject/added", getSubjects);
/* Student */
// Student Login
router.post("/student/login", studentLogin);
// Student Update Profile
router.put("/student/update/:id", upload.single("studentPhoto"), checkSchema(studentValidation), updateStudentProfile);
// Change Password
router.post("/student/change-password", studentchangePassword);
// Get the Assignments
router.get("/courses/get/:semester", studentGetCourses);
// Student can upload the Assignement
router.post("/answer/add-answer", upload.single("file"), addAssignment);
// Get Students Marks Based on Roll Number
router.get("/marks/rollNumber/:id", StudentMarks);
/* HOD  */
// Add the course
router.post("/courses/add", upload.single("file"), coursesAdd);
// view Courses
router.get("/courses/:semester/get/:subject", getCourses);
// Assigning marks to students
router.get("/student/get/semester/:semester", getStudentBySemester);
// Assigning the marks
router.post("/marks", assignMarks);
// Get the Marks Notification
router.get("/marks/added", getMarks);
// Answers notifications
// router.get("/answer/added", getAnswers);
// Check Assignments by HOD
router.get("/courses/faculty/:id", getAssignments);
// getting the Assignments
router.get("/get/assignments/:id", getStudentAsignments);
// For checking The asignment submitted or not
router.patch("/answer/checkauthorization", updateStatus);
export default router;
