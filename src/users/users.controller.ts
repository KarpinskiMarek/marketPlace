import {
  Controller,
  Get,
  Request,
  UseGuards,
  Param,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { UserDto } from './dtos/user.dto';
import { Serialize } from 'src/common/serialize.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Serialize(UserDto)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  //@UseGuards(JwtAuthGuard)
  @Get('all')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async displayProfile(@Request() req): Promise<any> {
    return this.usersService.findOne(req.uuid);
  }
}
