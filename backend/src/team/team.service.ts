import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../entities/team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  findAll() {
    return this.teamRepository.find();
  }

  findOne(id: number) {
    return this.teamRepository.findOne({ where: { id } });
  }

  create(teamData: Partial<Team>) {
    const team = this.teamRepository.create(teamData);
    return this.teamRepository.save(team);
  }

  update(id: number, teamData: Partial<Team>) {
    return this.teamRepository.update(id, teamData);
  }

  remove(id: number) {
    return this.teamRepository.delete(id);
  }
}
