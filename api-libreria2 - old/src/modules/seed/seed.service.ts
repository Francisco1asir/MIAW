import { Injectable } from '@nestjs/common';
import * as seedAutores from '../seed/data/authors.json'
import * as seedLibros from '../seed/data/libros.json'
import { AutoresService } from '../autores/autores.service';
import { Autor } from '../autores/interfaces/autor.interface';


@Injectable()
export class SeedService {
  constructor (
    private readonly autoreService: AutoresService,
    ){}
  
  public loadData(){
    this.insertNewAutores();
  }

  private async insertNewAutores(){
    await this.autoreService.deleteAllAutores();
    const insertPromisesAutores = [];
    seedAutores.forEach( (autor: Autor) => {
    insertPromisesAutores.push(this.autoreService.create(autor));
  })
  const results = await Promise.all(insertPromisesAutores);
  return true
  }


  }
  
