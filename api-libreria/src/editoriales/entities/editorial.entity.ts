import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Editorial{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text',{
        unique: true,
        default: 'autor',
        nullable: true,
    })
    nombre: string;

    @Column('text',{
        unique: true,
        nullable: true,
    })
    tipo: string
        
}