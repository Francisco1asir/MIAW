import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { PaginationDTO } from './dto/pagination.dto';

@Controller('libros')
export class LibrosController {

    // inyectamos LibrosService para que se comuniquen Cont con Ser
    constructor(private readonly librosService: LibrosService) {
    }
    // @Get('/')
    // getHome() {
    //     return ('Home de libros')
    // }


    @Get('listar')
    getall() {
        return this.librosService.findAll()
    }

    // @Get(':id')
    // getAutorById(@Param('id') id: string){
    //     return this.librosService.getAutorById(id)
    // }

    @Get(':id')
    getISBN(@Param('id') isbn: string) {
        return this.librosService.getISBN(isbn)
    }

    @Get(':id/:nombre')
    getISBNusuario(@Param('id') isbn: string, @Param('nombre') usuario: string) {
        return (`El libro de ${usuario} tiene este isbn ${isbn}`)
    }

    @Put()
    update() {
        return ('Actualizar registro');
    }

    @Delete(':id')
    remove(@Param('id') isbn: string) {
        return this.librosService.remove(isbn);

    }

    @Get()									
    Paginat(@Query() paginationDto: PaginationDTO) {
        console.log(paginationDto);
        return this.librosService.Paginat(paginationDto);
    }


    @Post()
    create(@Body() createLibroDto: CreateLibroDto) {
        // el create del servicio de libros
        return this.librosService.create(createLibroDto)
    }


}
