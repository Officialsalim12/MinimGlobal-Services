import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Portfolio } from '../entities/portfolio.entity';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(Portfolio)
    private portfolioRepository: Repository<Portfolio>,
  ) {}

  findAll() {
    return this.portfolioRepository.find();
  }

  findOne(id: number) {
    return this.portfolioRepository.findOne({ where: { id } });
  }

  create(portfolioData: Partial<Portfolio>) {
    const portfolio = this.portfolioRepository.create(portfolioData);
    return this.portfolioRepository.save(portfolio);
  }

  update(id: number, portfolioData: Partial<Portfolio>) {
    return this.portfolioRepository.update(id, portfolioData);
  }

  remove(id: number) {
    return this.portfolioRepository.delete(id);
  }
}
