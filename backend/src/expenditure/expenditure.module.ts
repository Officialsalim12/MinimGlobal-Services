import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenditureService } from './expenditure.service';
import { ExpenditureController } from './expenditure.controller';
import { Expenditure } from '../entities/expenditure.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Expenditure])],
  providers: [ExpenditureService],
  controllers: [ExpenditureController],
})
export class ExpenditureModule {}
