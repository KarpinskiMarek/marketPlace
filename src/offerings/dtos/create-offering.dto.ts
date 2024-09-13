import { IsNotEmpty } from 'class-validator';

export class CreateOfferingDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
