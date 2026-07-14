import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from '../entities/blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
  ) {}

  findAll() {
    return this.blogRepository.find();
  }

  findOne(id: number) {
    return this.blogRepository.findOne({ where: { id } });
  }

  create(blogData: Partial<Blog>) {
    const blog = this.blogRepository.create(blogData);
    return this.blogRepository.save(blog);
  }

  update(id: number, blogData: Partial<Blog>) {
    return this.blogRepository.update(id, blogData);
  }

  remove(id: number) {
    return this.blogRepository.delete(id);
  }
}
