import { DataSource, Repository } from 'typeorm';
import { Review } from '../entities/review.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewRepository extends Repository<Review> {
  constructor(private dataSource: DataSource) {
    super(Review, dataSource.createEntityManager());
  }
  async getAll(): Promise<Review[]> {
    return this.find();
  }
}
