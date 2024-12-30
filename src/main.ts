import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './config/app.config';
// import helmet from 'helmet';
import * as cors from 'cors';
import Razorpay from 'razorpay';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const instance = new Razorpay({
  key_id: appConfig.key_Id,
  key_secret: appConfig.key_secret,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(helmet())
 
  app.setGlobalPrefix('/api/v1');

  const corsOptions: CorsOptions = {
    origin:'https://payment-gatway-web.vercel.app',
     // Frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};


app.enableCors(corsOptions);


  
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(appConfig.port ?? 3000);
}
bootstrap();
