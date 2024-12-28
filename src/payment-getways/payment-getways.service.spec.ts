import { Test, TestingModule } from '@nestjs/testing';
import { PaymentGetwaysService } from './payment-getways.service';

describe('PaymentGetwaysService', () => {
  let service: PaymentGetwaysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentGetwaysService],
    }).compile();

    service = module.get<PaymentGetwaysService>(PaymentGetwaysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
