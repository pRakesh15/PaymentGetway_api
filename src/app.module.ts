import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { appConfig } from './config/app.config';
import { PaymentGetwaysModule } from './payment-getways/payment-getways.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    // here im using mongodb as database for storing the payment id and result ..
    MongooseModule.forRoot(appConfig.mongoConnection),
    PaymentGetwaysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
