import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'USERS'
})
export class User {
    @PrimaryGeneratedColumn('uuid',{
        name: 'id'
    })
    id: string;

    @Column('varchar',{
        name: 'email',
        nullable: false,
        unique: true,
        length: 150
    })
    email: string;

    @Column('varchar',{
        name: 'username',
        nullable: false,
        unique: true,
        length: 150
    })
    username: string;

    @Column('varchar',{
        name: 'password',
        nullable: false,
        unique: true,
        length: 150
    })
    password: string;

    @Column('bool',{
        default: true
    })
    isActive: boolean;

    @Column('text',{
        array: true,
        //dto
        default: ['usuario']

    })
    roles: string[];

    @Column('varchar',{
        name: 'logo',
        nullable: false,
        unique: true,
        length: 150
    })
    logo: string;

    @Column('varchar',{
        name: 'instagram',
        nullable: false,
        unique: true,
        length: 150
    })
    instagram: string;
    
    @Column({
        name: 'create_at',
    })
    createAt: Date;

    @Column({
        name: 'update_at',
    })
    updateAt: Date;

    //Referencia a la relación 1 a 1
    // cliente: Cliente;
}