import { Module } from '@nestjs/common';
import { DayService } from './day.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DayEntity } from './entities/day.entity';

@Module({
  providers: [DayService],
  imports: [TypeOrmModule.forFeature([DayEntity])],
})
export class DayModule { }
