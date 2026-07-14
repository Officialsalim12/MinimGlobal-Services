import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from '../entities/service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private servicesRepository: Repository<Service>,
  ) {}

  findAll() {
    return this.servicesRepository.find();
  }

  findOne(id: number) {
    return this.servicesRepository.findOne({ where: { id } });
  }

  create(serviceData: Partial<Service>) {
    const service = this.servicesRepository.create(serviceData);
    return this.servicesRepository.save(service);
  }

  update(id: number, serviceData: Partial<Service>) {
    return this.servicesRepository.update(id, serviceData);
  }

  remove(id: number) {
    return this.servicesRepository.delete(id);
  }
}
