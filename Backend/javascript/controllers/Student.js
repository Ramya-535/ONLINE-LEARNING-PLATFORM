var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Assignment, Course, Mark, Student, } from "../schemas/userSchema.js";
import { comparePassword, hashPassword } from "../utils/helpers.js";
import mongoose from "mongoose";
import { validationResult } from "express-validator";
// Login the Student
export const studentLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const email = body.email;
        const pass = body.password;
        const findUser = yield Student.findOne({ studentEmail: email });
        if (!findUser)
            throw new Error("Student not found");
        if (!comparePassword(pass, findUser.password))
            throw new Error("Password is Wrong");
        const _a = findUser.toObject(), { password } = _a, withoutPassword = __rest(_a, ["password"]);
        return res.send(withoutPassword);
    }
    catch (err) {
        return res.status(400).send({ error: err.message });
    }
});
// Update Student Profile
export const updateStudentProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = validationResult(req);
        if (!result.isEmpty())
            return res.status(400).send({ errors: result.array() });
        const { studentName, studentEmail, mobileNumber, 
        //   rollNumber,
        address, password, } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Student ID" });
        }
        const student = yield Student.findOne({ _id: id });
        if (!student) {
            return res.status(404).json({ message: "student not found" });
        }
        // Check which fields are being updated and validate them as necessary
        if (studentName)
            student.studentName = studentName;
        if (studentEmail)
            student.studentEmail = studentEmail;
        if (mobileNumber)
            student.mobileNumber = mobileNumber;
        if (address)
            student.address = address;
        // if (rollNumber) student.rollNumber = rollNumber;
        if (password) {
            let hashedPassword = hashPassword(password);
            student.password = hashedPassword;
        }
        if (req.file.path)
            student.studentPhoto = req.file.path;
        // Save the updated route
        yield student.save();
        // const updatedRoute = faculty.toObject();
        res.status(200).json({ msg: "Updated Successfully" });
    }
    catch (error) {
        console.error("Error updating Faculty Profile:", error);
        res
            .status(500)
            .json({ message: "Error updating route", error: error.message });
    }
});
// Change the Password
export const studentchangePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, oldPassword, newPassword, confirmPassword } = req.body;
    try {
        const findStudent = yield Student.findOne({ studentEmail: email });
        if (!findStudent)
            return res
                .status(402)
                .send({ error: "Student Not Found with this Email" });
        if (!comparePassword(oldPassword, findStudent.password)) {
            throw new Error("Password Doesnot match");
        }
        if (newPassword !== confirmPassword) {
            return res
                .status(401)
                .send({ error: "NewPassword And Confirm Password Doesnot Match" });
        }
        if (newPassword) {
            let hashedPassword = hashPassword(newPassword);
            findStudent.password = hashedPassword;
        }
        yield findStudent.save();
        res.send({ msg: "Password Updated Successfully" });
    }
    catch (error) {
        console.error("Error updating route:", error);
        res
            .status(500)
            .json({ message: "Error updating route", error: error.message });
    }
});
// Getting the courses
export const studentGetCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const semesterName = req.params.semester;
    try {
        const courses = yield Course.find({ semester: semesterName });
        // Transform date field in each course and add a new 'formattedDate' field
        const formattedCourses = courses.map((course) => {
            return Object.assign(Object.assign({}, course.toObject()), { formattedDate: course.date
                    ? new Date(course.date).toLocaleDateString("en-GB")
                    : null });
        });
        console.log(formattedCourses);
        res.send(formattedCourses);
    }
    catch (error) {
        console.error("Error getting courses:", error);
        res
            .status(500)
            .json({ message: "Error getting courses", error: error.message });
    }
});
// Add Assignment
export const addAssignment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("request file ", req.file);
    try {
        const { answers, assignmentId, rollNumber } = req.body;
        if (!req.file) {
            return res.status(400).json({ msg: "No file uploaded" });
        }
        // Create a new Faculty instance
        const newAssignment = new Assignment({
            answers,
            assignmentId,
            rollNumber,
            file: req.file.path,
        });
        // Save the new faculty to the database
        const savedAssignment = yield newAssignment.save();
        return res.status(201).json({
            message: "Assignment added successfully",
            // faculty: facultyWithoutPassword,
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: err.message });
    }
});
// Get student Marks By roll Number
export const StudentMarks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const studentRollNumber = req.params.id;
    try {
        const data = yield Mark.find({ rollNumber: studentRollNumber });
        res.send(data);
    }
    catch (error) {
        console.error("Error getting Student Marks:", error);
        res
            .status(500)
            .json({ message: "Error getting Student Marks", error: error.message });
    }
});
