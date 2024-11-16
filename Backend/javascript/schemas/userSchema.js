import mongoose from "mongoose";
const Schema = mongoose.Schema;
// Helper function to convert UTC to IST
function toIST(date) {
    return new Date(date.getTime() + 5.5 * 60 * 60 * 1000);
}
// Faculty Schema
const facultySchema = new Schema({
    facultyName: {
        type: String,
        required: [true, "facultyName is Required"],
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
    },
    qualification: {
        type: String,
        enum: ["UG", "PG", "PhD", "OTHERS"],
        required: [true, "qualification is Required"],
    },
    experience: {
        type: Number,
        required: [true, "Experience is Required"],
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
    },
    facultyPhoto: {
        type: String,
    },
    address: {
        type: String,
        required: [true, "address is Required"],
    },
    password: { type: String },
});
// Faculty Schema
const studentSchema = new Schema({
    studentName: {
        type: String,
        required: [true, "studentName is Required"],
    },
    studentEmail: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
    },
    // rollNumber: {
    //   type: String,
    //   unique: true,
    // },
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
    },
    semester: {
        type: String,
        required: [true, "Semester is Required"],
    },
    studentPhoto: {
        type: String,
    },
    address: {
        type: String,
        required: [true, "address is Required"],
    },
    password: { type: String },
});
export const subjectSchema = new Schema({
    facultyId: {
        type: Schema.Types.ObjectId,
        ref: "Faculty",
        required: true,
    },
    facultyName: {
        type: String,
        required: [true, "facultyName is Required"],
    },
    semester: {
        type: String,
        required: [true, "qualification is Required"],
    },
    subjects: {
        type: String,
        required: [true, "facultyName is Required"],
    },
});
export const placementQuestionsSchema = new Schema({
    companyName: {
        type: String,
    },
    conductingDate: {
        type: Date,
    },
    totalRounds: {
        type: Number,
    },
    roundNames: {
        type: String,
    },
    file: {
        type: String,
    },
});
export const coursesSchema = new Schema({
    semester: {
        type: String,
    },
    subject: {
        type: String,
    },
    category: {
        type: String,
    },
    facultyId: {
        type: String,
    },
    facultyName: {
        type: String,
    },
    questions: {
        type: String,
    },
    date: {
        type: Date,
    },
    deadline: {
        type: String,
    },
    file: {
        type: String,
    },
    link: {
        type: String,
    },
});
export const asignmentUploadSchema = new Schema({
    answers: {
        type: String,
    },
    assignmentId: {
        type: Schema.Types.ObjectId,
        ref: "Assignment",
        required: true,
    },
    rollNumber: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    file: {
        type: String,
    },
    checked: {
        type: Boolean,
        default: false,
    },
});
export const marksSchema = new Schema({
    examType: {
        type: String,
    },
    totalMarks: {
        type: Number,
    },
    obtainedMarks: {
        type: Number,
    },
    rollNumber: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    semester: {
        type: String,
    },
    subject: {
        type: String,
    },
});
const Faculty = mongoose.model("Faculty", facultySchema);
const Student = mongoose.model("Student", studentSchema);
const Subject = mongoose.model("Subject", subjectSchema);
const Placement = mongoose.model("Placement", placementQuestionsSchema);
const Course = mongoose.model("Course", coursesSchema);
const Assignment = mongoose.model("Assignment", asignmentUploadSchema);
const Mark = mongoose.model("Mark", marksSchema);
export { Faculty, Student, Subject, Placement, Course, Assignment, Mark };
