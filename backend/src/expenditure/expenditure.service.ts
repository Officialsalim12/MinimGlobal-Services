import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expenditure } from '../entities/expenditure.entity';

@Injectable()
export class ExpenditureService {
  constructor(
    @InjectRepository(Expenditure)
    private expenditureRepository: Repository<Expenditure>,
  ) {}

  findAll() {
    return this.expenditureRepository.find();
  }

  findOne(id: number) {
    return this.expenditureRepository.findOne({ where: { id } });
  }

  create(expenditureData: Partial<Expenditure>) {
    const expenditure = this.expenditureRepository.create(expenditureData);
    return this.expenditureRepository.save(expenditure);
  }

  update(id: number, expenditureData: Partial<Expenditure>) {
    return this.expenditureRepository.update(id, expenditureData);
  }

  remove(id: number) {
    return this.expenditureRepository.delete(id);
  }
}
