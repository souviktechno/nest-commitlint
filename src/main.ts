import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import cookie from '@fastify/cookie';

async function bootstrap() {
  const PORT_LOCAL = 3542;

  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const app = await NestFactory.create<NestFastifyApplication>(AppModule,new FastifyAdapter());
  await app.register(cookie);
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : PORT_LOCAL);
  console.log(`app running on ${process.env.PORT}`)
}
bootstrap();