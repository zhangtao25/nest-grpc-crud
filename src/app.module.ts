import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivityFieldCustomSchema } from './apps/activityFieldCustom/activityFieldCustom.schema';
import { User } from './apps/user/user.entity';
import { UserCrudService } from './apps/user/user.crud.service';
import { ActivityFieldCustomCrudService } from './apps/activityFieldCustom/activityFieldCustom.crud.service';
import { ClentServe } from './grpc/grpc.client.server';



@Module({
  imports: [
      TypeOrmModule.forRoot({
          name: 'regConnection',
          type: 'mysql',
          host: '114.55.145.3',
          port: 3306,
          username: 'root',
          password: 'wjyy26303',
          database: 'nest-grpc-crud-test',
          entities:[User],
          autoLoadEntities: true,
          synchronize: true,
          // entities: [User,Userinfo,File]
      }),
      TypeOrmModule.forFeature([User], 'regConnection'),
      MongooseModule.forRoot('mongodb://test:123456@114.55.145.3/registration',{
          connectionName:'registrationMongoConnection'
      }),
      MongooseModule.forFeature([{
          name: 'activity_field_custom',
          schema: ActivityFieldCustomSchema,
          collection: 'activity_field_custom',
      }], 'registrationMongoConnection'),
  ],
  controllers: [AppController],
  providers: [
      ClentServe,
      UserCrudService,
      ActivityFieldCustomCrudService
  ],
})
export class AppModule {}
