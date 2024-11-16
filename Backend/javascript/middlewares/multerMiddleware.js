import multer from "multer";
import path from "path";
// Set up storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // const dir = path.join(__dirname, "public/prescriptions"); // Directory to store prescriptions
        let dir = `./public/facultyPhoto`;
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        let imageSplitted = file.originalname.split(" ").join("");
        cb(null, `${Date.now()}-${imageSplitted}`); // Pass filename to the callback
    },
});
// File filter to only accept certain types of files (e.g., PDFs, images)
const fileFilter = (req, file, cb) => {
    const allowedTypes = /pdf|jpg|jpeg|png|jfif|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
        return cb(null, true); // Accept the file
    }
    else {
        cb(new Error("Only .pdf, .jpg, .jpeg, and .png .jfif .docx files are allowed!")); // Reject the file
    }
};
// Initialize upload with file size limit
const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 25 }, // Limit to 25MB
    fileFilter: fileFilter,
});
export { upload };
