var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Assignment, Course, Mark, Student } from "../schemas/userSchema.js";
import moment from "moment";
// Hod can Add the Courses Successsfully
export const coursesAdd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { semester, subject, category, facultyId, facultyName, questions, date, deadline, link, } = req.body;
        // Create the course data object
        const courseData = {
            semester,
            subject,
            category,
            facultyId,
            facultyName,
            questions,
            date,
            deadline,
            link,
        };
        // Check if the file is uploaded and add it to courseData if present
        if (req.file) {
            courseData.file = req.file.path;
        }
        // Create a new Course instance with the filtered data
        const newCourse = new Course(courseData);
        // Save the new Course to the database
        const savedCourse = yield newCourse.save();
        res.send(savedCourse);
    }
    catch (err) {
        return res.status(400).send({ error: err.message });
    }
});
// Export const Get All courses
export const getCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const semester = req.params.semester;
        const subject = decodeURIComponent(req.params.subject);
        const courses = yield Course.aggregate([
            {
                $match: {
                    semester: semester,
                    subject: subject,
                },
            },
            {
                $addFields: {
                    conductingDate: {
                        $dateToString: {
                            format: "%d-%m-%Y", // Correct format for day-month-year
                            date: "$conductingDate",
                        },
                    },
                },
            },
        ]);
        res.send(courses);
    }
    catch (err) {
        return res.status(400).send({ error: err.message });
    }
});
// Getting Student byThe Semester
export const getStudentBySemester = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const semester = req.params.semester;
    try {
        const result = yield Student.find({ semester: semester });
        res.send(result);
    }
    catch (err) {
        return res.status(400).send({ error: err.message });
    }
});
// Assigning Marks
export const assignMarks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { examType, totalMarks, obtainedMarks, rollNumber, semester, subject, } = req.body;
        // Create the marks
        const marks = {
            examType,
            totalMarks,
            obtainedMarks,
            rollNumber,
            semester,
            subject,
        };
        // Create a new Marks instance with the filtered data
        const newMarks = new Mark(marks);
        // Save the new Marks to the database
        const savedMarks = yield newMarks.save();
        res.send(savedMarks);
    }
    catch (err) {
        return res.status(400).send({ error: err.message });
    }
});
export const getMarks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Mark.find();
        res.send(result);
    }
    catch (err) {
        return res.status(400).send({ error: err.message });
    }
});
export const getAnswers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Assignment.find();
        res.send(result);
    }
    catch (err) {
        return res.status(400).send({ error: err.message });
    }
});
export const getAssignments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Course.find();
        // Format the date field in each assignment
        const formattedResult = result.map((assignment) => {
            // Assuming the date field is named 'date' in each assignment
            return Object.assign(Object.assign({}, assignment.toObject()), { date: moment(assignment.date).format("DD-MM-YYYY") });
        });
        res.send(formattedResult);
    }
    catch (err) {
        return res.status(400).send({ error: err.message });
    }
});
export const getStudentAsignments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const result = yield Assignment.find({ assignmentId: id })
            .populate("rollNumber")
            .select("");
        console.log(result);
        res.send(result);
    }
    catch (err) {
        return res.status(400).send({ error: err.message });
    }
});
export const updateStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { assignmentId, studentId, isChecked } = req.body;
        const result = yield Assignment.updateOne({ assignmentId: assignmentId, rollNumber: studentId }, { $set: { checked: isChecked } });
        console.log(result);
        res.send({ msg: "Updated Successfully", result });
    }
    catch (err) {
        return res.status(400).send({ error: err.message });
    }
});
