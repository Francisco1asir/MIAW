import { Injectable } from '@nestjs/common';
import * as seedAutores from '../seed/data/authors.json'
import * as seedLibros from '../seed/data/libros.json'
import { AutoresService } from '../autores/autores.service';
import { Autor } from '../autores/interfaces/autor.interface';

@Injectable()
export class SeedService {
  constructor (private readonly autoreService: AutoresService){}

  public loadData(){
    seedAutores.forEach((autor:Autor) => {
      console.log(autor.nombre);
      this.autoreService.create(autor);
    })
    return {
      msg: 'Carga de datos finalizada'
    }
  }

  private async insertNewAutores(){
    await this.autoreService.deleteAllAutores();
    const insertPromisesAutores = [];
    seedAutores.forEach((autor:Autor) => {
      insertPromisesAutores.push(this.autoreService.create(autor))
    });
    const result = await Promise.all(insertPromisesAutores);
    return true;
  }
}