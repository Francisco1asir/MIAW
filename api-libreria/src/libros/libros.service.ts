import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';
import { PaginationDTO } from './dto/pagination.dto';

@Injectable()
export class LibrosService {

    constructor(
        @InjectRepository(Libro)
        private readonly libroRepository: Repository<Libro>
    ) { }

    //LISTADO DE TODOS LOS LIBROS
    async findAll() {
        let librosdata = await this.libroRepository.find();
        return {
            data: librosdata,
            msg: 'Listado de libros',
            status: 200
        }
    }

    // INSERCION DE UN LIBRO
    async create(createLibroDto: CreateLibroDto) {
        try {
            const libro = this.libroRepository.create(createLibroDto);
            await this.libroRepository.save(libro);
            return {
                data: createLibroDto,
                msg: 'Libro creado correctamente desde el servicio',
                status: 200
            };
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException("JAJAJJAJA no te va");
        }
    }

    // DETALLE
    async getISBN(isbn: string) {
        //Petición al ORM
        const libro = await this.libroRepository.findOneBy({ isbn })
        //ORM a SGBD
        if (!libro) {
            throw new NotFoundException(`Libro con isbn ${isbn} no encontrado`);
        } else
            return {
                data: libro,
                msg: `Detalle del libro ${isbn}`,
                status: 200
            }
    }
    // BORRAR
    async remove(isbn: string) {
        const libro = await this.libroRepository.findOneBy({ isbn });
        if (!libro) {
            throw new NotFoundException(`Libro con isbn ${isbn} no encontrado`);
        }
        return await this.libroRepository.remove(libro);

    }
    // PAGINACIÓN
    async Paginat(paginationDto: PaginationDTO) {
        const { limit, offset } = paginationDto;
        return this.libroRepository.find({
            take: limit,
            skip: offset
          });
        }
       
}




