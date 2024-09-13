import { BaseEntity } from 'src/common/entities/base.entity';
import { Offering } from 'src/offerings/entities/offering.entity';
import { Review } from 'src/offerings/entities/review.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @OneToMany(() => Offering, (offering) => offering.user)
  offerings: Offering[];

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
}
