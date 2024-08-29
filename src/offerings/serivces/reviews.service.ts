import { Injectable } from '@nestjs/common';
import { ReviewRepository } from '../repositories/review.repository';
import { Review } from '../entities/review.entity';

@Injectable()
export class ReviewsService {
  constructor(private reviewRepository: ReviewRepository) {}
  async findAll(): Promise<Review[]> {
    return await this.reviewRepository.getAll();
  }
}
