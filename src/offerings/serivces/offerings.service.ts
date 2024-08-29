import { Injectable } from '@nestjs/common';
import { CreateOfferingDto } from '../dtos/create-offering.dto';
import { Offering } from '../entities/offering.entity';
import { OfferingRepository } from '../repositories/offering.repository';

@Injectable()
export class OfferingsService {
  constructor(private offeringRepository: OfferingRepository) {}
  async findAll(): Promise<Offering[]> {
    return await this.offeringRepository.getAll();
  }

  async create(createOfferingDto: CreateOfferingDto): Promise<Offering> {
    return this.offeringRepository.save(createOfferingDto);
  }
}
