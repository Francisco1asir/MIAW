import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { Autore } from './entities/autore.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AutoresController],
  providers: [AutoresService],
  imports: [
    TypeOrmModule.forFeature([Autore])
  ],
  exports: [AutoresService, TypeOrmModule]
})
export class AutoresModule {}
