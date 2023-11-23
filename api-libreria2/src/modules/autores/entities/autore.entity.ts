import { Libro } from "src/modules/libros/entities/libro.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autore{
    @PrimaryColumn('text',{
        nullable: false,
    }) 
    nif: string;

    @Column('text',{
        unique: true,
        default: 'autor',
        nullable: true,
    })
    nombre: string;

    @OneToMany(
        () => Libro,
        (libro) => Libro,
    )
    libros?: Libro[]

}