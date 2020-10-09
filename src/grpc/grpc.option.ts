import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';
import Util from './../untils/util'


const IPAdress = Util.getIPAdress()


export const grpcServerOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: IPAdress + ':8888',
    package: 'grpcService',
    protoPath: join(__dirname, '../../contract/grpc.proto')
  },
};