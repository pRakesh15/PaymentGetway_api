import { Test, TestingModule } from '@nestjs/testing';
import { PaymentGetwaysController } from './payment-getways.controller';

describe('PaymentGetwaysController', () => {
  let controller: PaymentGetwaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentGetwaysController],
    }).compile();

    controller = module.get<PaymentGetwaysController>(PaymentGetwaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
