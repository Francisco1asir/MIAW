import { Injectable, InternalServerErrorException, Patch } from '@nestjs/common';
import { CreateAutoreDto } from './dto/create-autore.dto';
import { UpdateAutoreDto } from './dto/update-autore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Autore } from './entities/autore.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutoresService {
  constructor(
    @InjectRepository(Autore)
    private readonly autorRepository: Repository<Autore>
  ){}

async create(createAutoreDto: CreateAutoreDto) {
  try {
    const autor = this.autorRepository.create(createAutoreDto);
    await this.autorRepository.save(autor)
    return {
      msg: 'Registro insertado',
      data: autor,
      status: 200 
      
    }
  }catch(error){
    throw new InternalServerErrorException('Ponte en contacto con el admin')
  }}

  findAll() {
    return `This action returns all autores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autore`;
  }

  @Patch()
  update(id: number, updateAutoreDto: UpdateAutoreDto) {
    return `This action updates a #${id} autore`;
  }

  remove(id: number) {
    return `This action removes a #${id} autore`;
  }
}
