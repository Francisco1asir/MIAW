import { IsInt, IsPositive, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { BeforeInsert } from "typeorm";


export class CreateAutorDto{

    @IsString()
    @MinLength(5)
    nombre: string;



    
}