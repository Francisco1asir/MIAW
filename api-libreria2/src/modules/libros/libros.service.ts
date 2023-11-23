import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>
  ) { }

  async create(createLibroDto: CreateLibroDto) {
    try {
      const libro = this.libroRepository.create(createLibroDto);
      await this.libroRepository.save(libro);
      return {
        msg: 'Registro insertado',
        data: libro,
        status: 200,
      };
    } catch (error) {
      throw new InternalServerErrorException('Ponte en contacto con el admin');
    }
  }

  findAll() {
    return `This action returns all libros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} libro`;
  }

  update(id: number, updateLibroDto: UpdateLibroDto) {
    return `This action updates a #${id} libro`;
  }

  remove(id: number) {
    return `This action removes a #${id} libro`;
  }
}
