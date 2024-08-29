import { User } from 'src/users/users.entity';
import { Review } from '../entities/review.entity';
import { Expose } from 'class-transformer';

export class OfferingDto {
  @Expose()
  title: string;
  @Expose()
  description: string;
  @Expose()
  user: User;
  @Expose()
  reviews: Review[];
}
