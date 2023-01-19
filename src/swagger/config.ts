import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const initSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Bank API')
    .setDescription('API description')
    .setVersion('0.0.1')
    .addBearerAuth({ type: 'http' })
    .addServer(
      `${process.env.SWAGGER_PROTOCOL}://${process.env.SWAGGER_HOST}:${process.env.SWAGGER_PORT}`,
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger-ui', app, document);
};
