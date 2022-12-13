import { Test_course } from "./cursos.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";

@Entity({ name: "test_students" })
export class Test_student extends BaseEntity {
  @PrimaryGeneratedColumn()
  s_id: number;

  @Column()
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true })
  lv_id: number;

  @Column({ nullable: true })
  group: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone_number?: string;

  @Column({ nullable: true })
  geolocation: string;

  @Column({ default: 1 })
  status: number;

  @ManyToMany(() => Test_course, (test_course) => test_course.estudiantes)
  @JoinTable({name:'test_courses_x_student'})
  cursos: Test_course[];
}
