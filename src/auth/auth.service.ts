import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/users.entity';
import { UserRepository } from 'src/users/users.repository';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dtos/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private userRepository: UserRepository,
  ) {}

  async create(data: RegisterDto): Promise<User> {
    data.password = await bcrypt.hash(data.password, 10);
    return this.userRepository.save(data);
  }

  async login(user: User) {
    const payload = { uuid: user.id, email: user.email };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException(
        'No account found with the email address provided.',
      );
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid password');
    } else {
      const { password, ...result } = user;
      return result;
    }
  }
}
