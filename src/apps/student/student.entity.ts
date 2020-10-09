import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Max, IsNotEmpty } from "class-validator";

@Entity({
    name: 'student'
})
export class Student {

    @PrimaryGeneratedColumn({ name: 'Id' })
    id: number;

    @Column({ name: 'Name' })
    @IsNotEmpty({ message: '【Unionid】不能为空' })
    @Max(255, { message: '【Unionid】长度不能超过255' })
    name: string;
}