import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from './entities/autor.entity';

@Injectable()
export class AutoresService {
    constructor(
        @InjectRepository(Autor)
        private readonly AutorRepository: Repository<Autor>
    ) { }
    async create(createAutorDto: CreateAutorDto) {
        try {
            const libro = this.AutorRepository.create(createAutorDto);
            await this.AutorRepository.save(libro);
            return {
                data: createAutorDto,
                msg: 'Autor creado correctamente desde el servicio',
                status: 200
            };
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException("JAJAJJAJA no te va");
        }
    }
    getAutorById(id:string){
        return (`Detalle del autor ${id}`)
    }
}
