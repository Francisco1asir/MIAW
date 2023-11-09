import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosModule } from './libros/libros.module';
import { AutoresModule } from './autores/autores.module';
import { EditorialesModule } from './editoriales/editoriales.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [LibrosModule, AutoresModule, EditorialesModule,
  TypeOrmModule.forRoot({
    // type: 'postgres',
    // host: '192.168.8.243',
    // port: 5432,
    // database: 'dbLibreria',
    // username: 'postgres',
    // password: '1234',
    // autoLoadEntities: true,
    // synchronize: true
    type: 'postgres',
    host: '192.168.8.243',
    port: 5439,
    database: 'Picasso',
    username: 'postgres',
    password: 'pswPicasso',
    autoLoadEntities: true,
    synchronize: true

  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
