import { Autore } from "src/modules/autores/entities/autore.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Libro{

    @PrimaryColumn()
    isbn: string

    @Column({
        type: 'text',
        unique: true,
        default: 'autor',
        nullable: true,
    })
    title: string;

    @Column({
        type: 'numeric',
        nullable: false,
        default: 0,
    })
    precio: number;

    @ManyToOne(
        () => Autore,
        (autor) => autor.libros,
        {cascade:true}
    )
    autor_id?: Autore

}