import { IsInt, IsPositive, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { BeforeInsert } from "typeorm";


export class CreateLibroDto{
    @IsString()
    @MinLength(5)
    @MaxLength(10)
    isbn: string;

    @IsString()
    @MinLength(5)
    // @Matches(/^[a-z]/)
    nombre: string;

    @IsInt()
    @IsPositive()
    precio: number;

    
}