import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { Offering } from './entities/offering.entity';
import { OfferingsService } from './serivces/offerings.service';
import { CreateOfferingDto } from './dtos/create-offering.dto';
import { Serialize } from 'src/common/serialize.decorator';
import { OfferingDto } from './dtos/offering.dto';

@Serialize(OfferingDto)
@Controller('offerings')
export class OfferingsController {
  constructor(private offeringsService: OfferingsService) {}
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
}
