import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsEmail()
  //@IsUnique() //TODO
  email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  username: string;
}
