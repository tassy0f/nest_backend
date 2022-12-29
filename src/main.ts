import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function start() {

  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('Проба пера)')
      .setDescription('Документация REST API')
      .setVersion('1.0.0')
      .addTag('RomanBack')
    .build()

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document)

  await app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
}
start();
