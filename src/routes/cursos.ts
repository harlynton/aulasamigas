import { addCourseToStudent, removeCourseFromStudent } from "./../controllers/cursos.controller";
import express from "express";
import {
  getAllCourses,
  getAllCoursesXStudent,
} from "../controllers/cursos.controller";

const router = express.Router();

router.get("/", getAllCourses);
router.get("/:id", getAllCoursesXStudent);
router.post("/nuevo", addCourseToStudent);
router.delete("/", removeCourseFromStudent);
export default router;
