import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
} from "typeorm";
import { Test_student } from "./estudiantes.entity";

@Entity({ name: "test_courses" })
export class Test_course extends BaseEntity {
  @PrimaryGeneratedColumn()
  c_id: number;

  @Column()
  name: string;

  @Column({ default: 1 })
  credits: number;

  @ManyToMany(() => Test_student, (test_student) => test_student.cursos)
  estudiantes: Test_student[];
}
