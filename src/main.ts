import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './config/winston.config';

async function bootstrap() {

  //config Winston 
  const logger = WinstonModule.createLogger(winstonConfig);
  const app = await NestFactory.create(AppModule, { logger });
  
  //config Class-Validation
  app.useGlobalPipes(new ValidationPipe());

  //config CORS 
  app.enableCors({
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization, ngrok-skip-browser-warning',
  })  

  //config Swagger
  const config = new DocumentBuilder()
    .setTitle('Documentação FeedUP API')
    .setDescription(
      'FeedUp é um produto inovador criado para engajar e reconhecer a equipe interna das empresas, focando na redução do turnover e no aumento do engajamento e produtividade dos colaboradores. É plataforma altamente usável, na qual promove um ambiente de troca contínua de feedbacks entre os funcionários, utilizando estratégias de gamificação para aumentar a participação e o envolvimento. Através de uma interface intuitiva e interativa, o FeedUp facilita a comunicação, fortalece a cultura organizacional e melhora da satisfação e desempenho dos colaboradores.',
    ).setVersion('1.0')
    .addTag('Auth').addTag('Comments').addTag('Likes').addTag('Home Page').addTag('Profile').addTag('Moods').addTag('Leader').addTag('Form').addTag('People')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //port listening
  await app.listen(3000);
  logger.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap();
