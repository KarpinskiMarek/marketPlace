import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Offering } from '../entities/offering.entity';

@Injectable()
export class OfferingRepository extends Repository<Offering> {
  constructor(private dataSource: DataSource) {
    super(Offering, dataSource.createEntityManager());
  }
  async getAll(): Promise<Offering[]> {
    return this.find();
  }
}
