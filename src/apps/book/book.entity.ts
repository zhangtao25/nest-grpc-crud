import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: 'book'
})
export class Book {

    @PrimaryGeneratedColumn({ name: 'Id' })
    id: number;

    @Column({ name: 'Category' })
    category: string;
}