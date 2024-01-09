import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SeedModule } from './modules/seed/seed.module';
import { AutoresModule } from './modules/autores/autores.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { LibrosModule } from './modules/libros/libros.module';

@Module({
  imports: [
    AutoresModule,
    ClientesModule,
    ConfigModule.forRoot(),
    SeedModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.8.243',
      port: 5439,
      database: 'Picasso',
      username: 'postgres',
      password: 'pswPicasso',
      autoLoadEntities: true,
      synchronize: true
      // type: 'postgres',
      // host: process.env.DB_HOST,
      // port: +process.env.DB_PORT,
      // database: process.env.DB_NAME,
      // username: process.env.DB_USERNAME,
      // password: process.env.DB_PASSWORD,
      // autoLoadEntities: true,
      // synchronize: true
    }),
    LibrosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
