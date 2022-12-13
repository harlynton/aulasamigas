import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from "typeorm";

@Entity({ name: "test_courses_x_student" })
export class Test_courses_x_student extends BaseEntity {
  @PrimaryGeneratedColumn()
  cxs_id: number;

  @Column()
  c_id: number;

  @Column()
  s_id: number;
}
