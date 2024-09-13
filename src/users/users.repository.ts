import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async getOneByEmail(email: string): Promise<User> {
    return this.findOne({ where: { email: email } });
  }
  async getAll(): Promise<User[]> {
    return this.find();
  }
  async getOneById(id: string): Promise<User> {
    return this.findOne({ where: { id: id } });
  }
}
