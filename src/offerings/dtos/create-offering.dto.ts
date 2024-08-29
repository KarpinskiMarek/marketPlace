import { Expose } from 'class-transformer';

export class CreateOfferingDto {
  @Expose()
  title: string;

  @Expose()
  description: string;
}
