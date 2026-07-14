import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from '../entities/contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async create(contactData: Partial<Contact>) {
    const contact = this.contactRepository.create(contactData);
    return this.contactRepository.save(contact);
  }

  findAll() {
    return this.contactRepository.find();
  }

  findOne(id: number) {
    return this.contactRepository.findOne({ where: { id } });
  }

  update(id: number, contactData: Partial<Contact>) {
    return this.contactRepository.update(id, contactData);
  }

  remove(id: number) {
    return this.contactRepository.delete(id);
  }
}
