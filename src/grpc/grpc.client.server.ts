import { Injectable } from "@nestjs/common";
import { ClientGrpc, Client } from "@nestjs/microservices";

import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';
import Util from './../untils/util'


const IPAdress = Util.getIPAdress()

console.log(process.env.NODE_ENV,process.env.GRPC_IP)


// Consistent with the configuration in the options on the server side
export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: (process.env.NODE_ENV === 'prod'?process.env.GRPC_IP:IPAdress)+':8888', // Grpc connects ip to port
    package: 'grpcService', // The package name is the same as in .proto
    protoPath: './contract/grpc.proto'
  },
};

@Injectable()
export class ClentServe {
  @Client(grpcClientOptions) public readonly client: ClientGrpc;
}
