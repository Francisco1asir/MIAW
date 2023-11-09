import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import * as seedAutores from '../seed/data/authors.json'
import * as seedLibros from '../seed/data/libros.json'
import { AutoresService } from '../autores/autores.service';
//los dos sirven
import { CreateAutoreDto } from '../autores/dto/create-autore.dto';
import { Autor } from '../autores/interfaces/autor.interface';

@Injectable()
export class SeedService {
  constructor (private readonly autoreService: AutoresService){}

  public loadData(){
    seedAutores.forEach((autor:Autor) => {
      console.log(autor.id);
      // this.autoreService.create(autor);
    })
    return {
      msg: 'Carga de datos finalizada'
    }
  }




  create(createSeedDto: CreateSeedDto) {
    return 'This action adds a new seed';
  }

  findAll() {
    return `This action returns all seed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seed`;
  }

  update(id: number, updateSeedDto: UpdateSeedDto) {
    return `This action updates a #${id} seed`;
  }

  remove(id: number) {
    return `This action removes a #${id} seed`;
  }
}
