import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './swagger/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  initSwagger(app);

  app.enableCors({ origin: process.env.ACCEPTED_DOMAIN });

  await app.listen(3000);
}
bootstrap();
