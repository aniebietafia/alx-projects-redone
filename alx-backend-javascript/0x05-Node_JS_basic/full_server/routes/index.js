import express from "express";

const router = express.Router();

import StudentsController from "../controllers/StudentsController.js";
import AppController from "../controllers/AppController.js";

router.get("/", AppController.getHomepage);
router.get("/students", StudentsController.getAllStudents);
router.get("/students/:major", StudentsController.getAllStudentsByMajor);

export default router;