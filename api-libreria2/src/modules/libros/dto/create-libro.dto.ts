import { Type } from "class-transformer";
import { IsString, MinLength, IsOptional, IsDate, IsNumber, ValidateNested } from "class-validator";
import { CreateAutoreDto } from "src/modules/autores/dto/create-autore.dto";

export class CreateLibroDto {
    @IsString()
    @MinLength(1)
    id: string;

    @IsString()
    @MinLength(4)
    title: string;

    @IsString()
    @MinLength(5)
    @IsOptional()
    isbn?: string;

    @IsNumber()
    @IsOptional()
    pageCount?: number;

    @IsString()
    @IsOptional()
    publishedDate?: string;
    
    @IsString()
    @IsOptional()
    thumbnailUrl?: string;

    @IsString()
    @MinLength(10)
    @IsOptional()
    shortDescription?: string;

    @IsString()
    @MinLength(15)
    @IsOptional()
    longDescription?: string;

    @IsString()
    @MinLength(5)
    @IsOptional()
    status?: string;

    @IsNumber()
    @IsOptional()
    precio?: number;
    
    @IsString()
    @IsOptional()
    autor?: string; 
}