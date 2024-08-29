import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Review } from './review.entity';
import { User } from 'src/users/users.entity';

@Entity({ name: 'offerings' })
export class Offering extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Review, (review) => review.offering, { cascade: true })
  reviews: Review[];

  @ManyToOne(() => User, (user) => user.offerings)
  user: User;
}
