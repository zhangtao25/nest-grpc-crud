import * as fs from "fs";
const env = fs.readFileSync('./build/env.txt','utf-8');
console.log('The current environment is:' + env);
require('dotenv').config({ path: '.env.' + env })


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { grpcServerOptions } from './grpc/grpc.option';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice(grpcServerOptions);
  app.startAllMicroservicesAsync()

  await app.listen(3030);
}
bootstrap();
