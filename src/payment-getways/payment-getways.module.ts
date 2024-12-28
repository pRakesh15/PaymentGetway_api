import { Module } from '@nestjs/common';
import { PaymentGetwaysController } from './payment-getways.controller';
import { PaymentGetwaysService } from './payment-getways.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentSchema } from './Model/payments.schema';

@Module({
  imports:[
   
    MongooseModule.forFeature([{name:'Payments',schema:PaymentSchema}])],
  controllers: [PaymentGetwaysController],
  providers: [PaymentGetwaysService]
})
export class PaymentGetwaysModule {}
