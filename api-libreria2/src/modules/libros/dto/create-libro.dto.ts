import { IsNumber, IsString, MinLength } from "class-validator";
import { Autore } from "src/modules/autores/entities/autore.entity";


export class CreateLibroDto {

    @IsString()
    @MinLength(1)
    isbn: string;

    @IsString()
    @MinLength(5)
    title: string;

    @IsNumber()
    precio: number;

    @IsString()
    @MinLength(1)
    autor_id?: Autore;

}
