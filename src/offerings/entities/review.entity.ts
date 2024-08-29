import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Offering } from './offering.entity';
import { User } from 'src/users/users.entity';

@Entity({ name: 'reviews' })
export class Review extends BaseEntity {
  @Column()
  content: string;

  @ManyToOne(() => Offering, (offering) => offering.reviews, {
    onDelete: 'CASCADE',
  })
  offering: Offering;

  @ManyToOne(() => User, (user) => user.reviews)
  user: User;
}
