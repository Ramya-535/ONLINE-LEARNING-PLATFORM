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
import { comparePassword, hashPassword } from "../utils/helpers.js";
import mongoose from "mongoose";
import { validationResult } from "express-validator";
// Login the Faculty
export const facultyLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const email = body.email;
        const pass = body.password;
        const findUser = yield Faculty.findOne({ email: email });
        if (!findUser)
            throw new Error("Faculty not found");
        if (!comparePassword(pass, findUser.password))
            throw new Error("Bad Credentials");
        const _a = findUser.toObject(), { password } = _a, withoutPassword = __rest(_a, ["password"]);
        return res.send(withoutPassword);
    }
    catch (err) {
        return res.status(400).send({ error: err.message });
    }
});
// Update Faculty Profile
export const updateFacultyProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = validationResult(req);
        if (!result.isEmpty())
            return res.status(400).send({ errors: result.array() });
        const { facultyName, mobileNumber, qualification, experience, email, address, password, } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Faculty ID" });
        }
        const faculty = yield Faculty.findOne({ _id: id });
        if (!faculty) {
            return res.status(404).json({ message: "Faculty not found" });
        }
        // Check which fields are being updated and validate them as necessary
        if (facultyName)
            faculty.facultyName = facultyName;
        if (mobileNumber)
            faculty.mobileNumber = mobileNumber;
        if (qualification)
            faculty.qualification = qualification;
        if (experience)
            faculty.experience = experience;
        if (email)
            faculty.email = email;
        if (address)
            faculty.address = address;
        if (password) {
            let hashedPassword = hashPassword(password);
            faculty.password = hashedPassword;
        }
        if (req.file.path)
            faculty.facultyPhoto = req.file.path;
        // Save the updated route
        yield faculty.save();
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
export const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, oldPassword, newPassword, confirmPassword } = req.body;
    try {
        const findFaculty = yield Faculty.findOne({ email: email });
        if (!findFaculty)
            return res
                .status(402)
                .send({ error: "Faculty Not Found with this Email" });
        if (!comparePassword(oldPassword, findFaculty.password)) {
            throw new Error("Password Doesnot match");
        }
        if (newPassword !== confirmPassword) {
            return res
                .status(401)
                .send({ error: "NewPassword And Confirm Password Doesnot Match" });
        }
        if (newPassword) {
            let hashedPassword = hashPassword(newPassword);
            findFaculty.password = hashedPassword;
        }
        yield findFaculty.save();
        res.send({ msg: "Password Updated Successfully" });
    }
    catch (error) {
        console.error("Error updating route:", error);
        res
            .status(500)
            .json({ message: "Error updating route", error: error.message });
    }
});
// Get the students
export const getStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Student.find();
        res.send(result);
    }
    catch (error) {
        console.error("Error getting Sudents", error);
        res
            .status(500)
            .json({ message: "Error getting Students", error: error.message });
    }
});
// Get the Faculties
export const getFaculty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Faculty.find();
        res.send(result);
    }
    catch (error) {
        console.error("Error getting faculties", error);
        res
            .status(500)
            .json({ message: "Error getting faculties", error: error.message });
    }
});
// Get the Subjects
export const getSubjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Subject.find();
        res.send(result);
    }
    catch (error) {
        console.error("Error getting Subject", error);
        res
            .status(500)
            .json({ message: "Error getting Subject", error: error.message });
    }
});
