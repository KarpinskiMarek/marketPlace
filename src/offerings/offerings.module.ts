import { Module } from '@nestjs/common';
import { OfferingsController } from './offerings.controller';
import { OfferingsService } from './serivces/offerings.service';
import { ReviewsService } from './serivces/reviews.service';
import { ReviewRepository } from './repositories/review.repository';
import { OfferingRepository } from './repositories/offering.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Offering } from './entities/offering.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Offering, Review])],
  providers: [
    OfferingsService,
    OfferingRepository,
    ReviewsService,
    ReviewRepository,
  ],
  controllers: [OfferingsController],
})
export class OfferingsModule {}
