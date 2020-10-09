import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: 'school'
})
export class School {

    @PrimaryGeneratedColumn({ name: 'Id' })
    id: number;

    @Column({ name: 'Address' })
    address: string;
}