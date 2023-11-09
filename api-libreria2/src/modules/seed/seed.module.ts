import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AutoresModule } from '../autores/autores.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [AutoresModule]
})
export class SeedModule {}
