import { Injectable } from '@nestjs/common';
import { ReviewRepository } from '../repositories/review.repository';
import { Review } from '../entities/review.entity';
import { CreateReviewDto } from '../dtos/create-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private reviewRepository: ReviewRepository) {}
  async findAll(): Promise<Review[]> {
    return await this.reviewRepository.getAll();
  }
  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    return await this.reviewRepository.save(createReviewDto);
  }
}
