import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { Offering } from './entities/offering.entity';
import { OfferingsService } from './serivces/offerings.service';
import { CreateOfferingDto } from './dtos/create-offering.dto';
import { Serialize } from 'src/common/serialize.decorator';
import { OfferingDto } from './dtos/offering.dto';
import { ReviewsService } from './serivces/reviews.service';
import { CreateReviewDto } from './dtos/create-review.dto';

@Serialize(OfferingDto)
@Controller('offerings')
export class OfferingsController {
  constructor(
    private readonly offeringsService: OfferingsService,
    private readonly reviewsService: ReviewsService,
  ) {}
  @HttpCode(200)
  @Get()
  async findAll(): Promise<Offering[]> {
    return await this.offeringsService.findAll();
  }

  @HttpCode(201)
  @Post()
  async createOffering(@Body() dto: CreateOfferingDto) {
    return await this.offeringsService.create(dto);
  }

  @HttpCode(201)
  @Post()
  async createReview(@Body() dto: CreateReviewDto) {
    return await this.reviewsService.create(dto);
  }
}
