import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './config/app.config';
// import helmet from 'helmet';
import * as cors from 'cors';
import Razorpay from 'razorpay';

export const instance = new Razorpay({
  key_id: appConfig.key_Id,
  key_secret: appConfig.key_secret,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(helmet())
 
  app.setGlobalPrefix('/api/v1');

  app.enableCors();


  
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(appConfig.port ?? 3000);
}
bootstrap();
