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
import { Faculty, Student, Subject } from "../schemas/userSchema.js";
import { hashPassword } from "../utils/helpers.js";
import { validationResult } from "express-validator";
export const addFaculty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = validationResult(req);
    if (!result.isEmpty())
        return res.status(400).send({ errors: result.array() });
    try {
        const { facultyName, mobileNumber, qualification, experience, email, address, } = req.body;
        if (!req.file) {
            return res.status(400).json({ msg: "No file uploaded" });
        }
        let defaultpassword = "123";
        // Hash the password
        let hashedPassword = hashPassword(defaultpassword);
        // Create a new Faculty instance
        const newFaculty = new Faculty({
            facultyName,
            mobileNumber,
            qualification,
            experience,
            email,
            facultyPhoto: req.file.path,
            address,
            password: hashedPassword,
        });
        // Save the new faculty to the database
        const savedFaculty = yield newFaculty.save();
        const _a = savedFaculty.toObject(), { password } = _a, facultyWithoutPassword = __rest(_a, ["password"]);
        return res.status(201).json({
            message: "Faculty added successfully",
            // faculty: facultyWithoutPassword,
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: err.message });
    }
});
export const getFaculties = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const faculties = yield Faculty.find().select("-password");
        res.send(faculties);
    }
    catch (err) {
        return res.status(400).send({ error: err.message });
    }
});
// Admin can delete the faculty
export const deleteFaculty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const facultyId = req.params.id;
        // Find and delete the product by its ID
        const deletedFaculty = yield Faculty.findByIdAndDelete(facultyId);
        return res.status(200).json({
            msg: "Faculty deleted successfully",
            product: deletedFaculty,
        });
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
// Admin can add the Student
export const addStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = validationResult(req);
    if (!result.isEmpty())
        return res.status(400).send({ errors: result.array() });
    try {
        const { studentName, studentEmail, mobileNumber, semester, address } = req.body;
        if (!req.file) {
            return res.status(400).json({ msg: "No file uploaded" });
        }
        let defaultpassword = "123";
        // Hash the password
        let hashedPassword = hashPassword(defaultpassword);
        // Create a new Faculty instance
        const newStudent = new Student({
            studentName,
            studentEmail,
            mobileNumber,
            semester,
            studentPhoto: req.file.path,
            address,
            password: hashedPassword,
        });
        // Save the new faculty to the database
        const savedStudent = yield newStudent.save();
        const _a = savedStudent.toObject(), { password } = _a, studentWithoutPassword = __rest(_a, ["password"]);
        return res.status(201).json({
            message: "Student added successfully",
            // studentAdded: studentWithoutPassword,
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: err.message });
    }
});
// Admin can view All the students
export const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield Student.find().select("-password");
        res.send(students);
    }
    catch (err) {
        return res.status(400).send({ error: err.message });
    }
});
// Admin can delete the Student
export const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentId = req.params.id;
        // Find and delete the product by its ID
        const deletedStudent = yield Student.findByIdAndDelete(studentId);
        return res.status(200).json({
            msg: "Student deleted successfully",
            // deleteStudent: deletedStudent,
        });
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
// Adding the subject
export const addSubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { facultyId, facultyName, semester, subjects } = req.body;
        // Create a new Faculty instance
        const newSubject = new Subject({
            facultyId,
            facultyName,
            semester,
            subjects,
        });
        // Save the new faculty to the database
        const savedSubject = yield newSubject.save();
        return res.status(201).json({
            message: "Subject added successfully",
            // subjectAdded: savedSubject,
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: err.message });
    }
});
// Admin can view All the Assigned Subjects
export const getSubjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subjects = yield Subject.find();
        res.send(subjects);
    }
    catch (err) {
        return res.status(400).send({ error: err.message });
    }
});
