import express from "express";
import cors from "cors";
import estudianteRouter from "./routes/estudiantes";
import cursoRouter from "./routes/cursos";
import CONFIG from "./config";

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  CONFIG.SERVER.ROUTES.INDEX + CONFIG.SERVER.ROUTES.STUDENTS.STUDENTS_LIST,
  estudianteRouter
);

app.use(
  CONFIG.SERVER.ROUTES.INDEX + CONFIG.SERVER.ROUTES.STUDENTS.ADD_STUDENT,
  estudianteRouter
);

app.use(
  CONFIG.SERVER.ROUTES.INDEX + CONFIG.SERVER.ROUTES.COURSES.COURSES_LIST,
  cursoRouter
);

app.use(
  CONFIG.SERVER.ROUTES.INDEX + CONFIG.SERVER.ROUTES.COURSES.COURSES_LIST,
  cursoRouter
);
app.use(
  CONFIG.SERVER.ROUTES.INDEX + CONFIG.SERVER.ROUTES.COURSES.COURSES_BY_STUDENT,
  cursoRouter
);

app.use(
  CONFIG.SERVER.ROUTES.INDEX + CONFIG.SERVER.ROUTES.COURSES.ADD_COURSE,
  cursoRouter
);

app.use(
  CONFIG.SERVER.ROUTES.INDEX + CONFIG.SERVER.ROUTES.COURSES.DELETE_COURSE,
  cursoRouter
);

export default app;
