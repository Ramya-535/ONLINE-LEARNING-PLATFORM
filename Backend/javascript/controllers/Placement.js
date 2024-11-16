var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Placement } from "../schemas/userSchema.js";
export const uploadQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("request file ", req.file);
    try {
        const { companyName, conductingDate, totalRounds, roundNames } = req.body;
        if (!req.file) {
            return res.status(400).json({ msg: "No file uploaded" });
        }
        // Create a new Placement instance
        const newTest = new Placement({
            companyName,
            conductingDate,
            totalRounds,
            roundNames,
            file: req.file.path,
        });
        // Save the new Test to the database
        const savedTest = yield newTest.save();
        return res.status(201).json({
            message: "Placement Questions added successfully",
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: err.message });
    }
});
// Placement Head can view All the Posted Questions
export const getQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield Placement.aggregate([
            {
                $addFields: {
                    conductingDate: {
                        $dateToString: {
                            format: "%d-%m-%Y",
                            date: "$conductingDate",
                        },
                    },
                },
            },
        ]);
        res.send(questions);
    }
    catch (err) {
        return res.status(400).send({ error: err.message });
    }
});
