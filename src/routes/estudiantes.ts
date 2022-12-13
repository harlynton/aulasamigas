import express from "express";
import {
  getAllStudents,
  addStudent,
  updateStudent,
  getStudentsById,
} from "../controllers/estudiante.controller";
import { getAllCoursesXStudent } from "../controllers/cursos.controller";

const router = express.Router();

router.get("/listado", getAllStudents);

router.get("/:id", getStudentsById);

router.get("/cursos/:id", getAllCoursesXStudent);

router.post("/nuevo", addStudent);

router.put("/:id", updateStudent);

export default router;
