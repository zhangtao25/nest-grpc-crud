import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: 'user'
})
export class User {

    @PrimaryGeneratedColumn({ name: 'Id' })
    id: number;

    @Column({ name: 'Name' })
    name: string;
}