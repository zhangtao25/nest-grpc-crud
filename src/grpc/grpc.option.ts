import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';
import Util from './../untils/util'


const IPAdress = Util.getIPAdress()

// console.log(__dirname,'__dirname',join(__dirname, './contract/grpc.proto'))


export const grpcServerOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: IPAdress + ':8888',
    package: 'grpcService',
    protoPath: './contract/grpc.proto'
  },
};