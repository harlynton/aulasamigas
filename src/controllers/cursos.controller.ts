import { Request, Response } from "express";
import { Test_course } from "./../entities/cursos.entity";
import { Test_courses_x_student } from "./../entities/cursosxestudiante.entity";

export const getAllCourses = async (_req: Request, res: Response) => {
  try {
    const courses = await Test_course.find({
      select: {
        c_id: true,
        name: true,
        credits: true,
      },
    });
    return res.json(courses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllCoursesXStudent = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const coursesXStudent = await Test_courses_x_student.findBy({ s_id: id });

    return res.json(coursesXStudent);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addCourseToStudent = async (req: Request, res: Response) => {
  try {
    const { c_id, s_id } = req.body;
    const newCourse = new Test_courses_x_student();
    (newCourse.c_id = c_id), (newCourse.s_id = s_id);

    await newCourse.save();
    return res.json(newCourse);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const removeCourseFromStudent = async (req: Request, res: Response) => {
  try {
    const { c_id, s_id } = req.body;
    const removeCourse = await Test_courses_x_student.delete({ c_id, s_id });

    return res.status(200).json(removeCourse);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
