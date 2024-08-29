import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.entity';
import { OfferingsModule } from './offerings/offerings.module';
import { Review } from './offerings/entities/review.entity';
import { Offering } from './offerings/entities/offering.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [User, Offering, Review],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    OfferingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
