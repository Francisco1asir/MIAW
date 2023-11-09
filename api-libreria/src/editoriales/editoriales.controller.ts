import { Controller,Delete,Get, Param, Post, Put } from '@nestjs/common';
import { EditorialesService } from './editoriales.service';

@Controller('editoriales')
export class EditorialesController {

    constructor(private editorialesService:EditorialesService){

    }

    @Get('/')
    gethome(){
        return this.editorialesService.gethome()
    }

    @Get('listar')
    getall(){
        return this.editorialesService.getAll()
    }
    @Get(':id')
    getAutorById(@Param('id') id: string){
        return this.editorialesService.getAutorById(id)
    }

    @Post()
    new(){
        return ('Nuevo registro');
    }

    @Put()
    update(){
        return ('Actualizar registro');
    }

    @Delete()
    delete(){
        return ('Borrar registro');
    }
    
}
