import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { CreateAutorDto } from './dto/create-autor.dto';

@Controller('autores')
export class AutoresController {

    constructor(private autoresService:AutoresService){

    }

@Post()
    create(@Body() createAutorDto: CreateAutorDto) {
        return this.autoresService.create(createAutorDto)
    }

 
    
}
