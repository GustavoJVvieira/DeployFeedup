import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, {cors: true});
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors()  

  const config = new DocumentBuilder()
    .setTitle('Documentação FeedUP da API')
    .setDescription(
      'FeedUp é um produto inovador criado para engajar e reconhecer a equipe interna das empresas, focando na redução do turnover e no aumento do engajamento e produtividade dos colaboradores. É plataforma altamente usável, na qual promove um ambiente de troca contínua de feedbacks entre os funcionários, utilizando estratégias de gamificação para aumentar a participação e o envolvimento. Através de uma interface intuitiva e interativa, o FeedUp facilita a comunicação, fortalece a cultura organizacional e melhora da satisfação e desempenho dos colaboradores.',
    )
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('Comments')
    .addTag('Likes')
    .addTag('Home Page')
    .addTag('Profile')
    .addTag('Moods')
    .addTag('Leader')
    .addTag('Form')
    .addTag('People')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  
  await app.listen(3000);
}
bootstrap();
