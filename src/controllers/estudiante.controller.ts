import { Request, Response } from "express";
import { Test_student } from "../entities/estudiantes.entity";

export const getAllStudents = async (_req: Request, res: Response) => {
  try {
    const students = await Test_student.find();
    return res.json(students);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addStudent = async (req: Request, res: Response) => {
  try {
    const {
      first_name,
      last_name,
      lv_id,
      group,
      email,
      phone_number,
      geolocation,
    } = req.body;
    const newStudent = new Test_student();

    newStudent.first_name = first_name;
    newStudent.last_name = last_name;
    newStudent.lv_id = lv_id;
    newStudent.group = group;
    newStudent.email = email;
    newStudent.phone_number = phone_number;
    newStudent.geolocation = geolocation;

    await newStudent.save();
    return res.json(newStudent);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const student = await Test_student.findOneBy({ s_id: parseInt(id) });
    if (!student) return res.status(404).json({ message: "Student not found" });

    await Test_student.update({ s_id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getStudentsById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const student = await Test_student.findOneBy({ s_id: parseInt(id) });

    return res.json(student);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCoursesByStudentId = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const courses = await Test_student.createQueryBuilder("test_student")
      .leftJoinAndSelect("test_student.cursos", "test_course")
      .where("test_student.s_id = :studentID", { studentID: id })
      .getMany();

    return res.json(courses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
