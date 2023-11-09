import { IsInt, IsPositive, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { BeforeInsert } from "typeorm";


export class CreateAutoreDto{

    @IsString()
    @MinLength(1)
    id: string;

    @IsString()
    @MinLength(5)
    nombre: string;

   
}
