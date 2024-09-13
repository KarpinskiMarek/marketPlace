import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}
  async findByEmail(email: string): Promise<User> {
    return this.userRepository.getOneByEmail(email);
  }
  async findAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }
  async findOne(id: string): Promise<User> {
    return this.userRepository.getOneById(id);
  }
}
