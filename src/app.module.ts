import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from './apps/activity/activity.entity';
import { ActivityCrudService } from './apps/activity/activity.crud.service';
import { User } from './apps/user/user.entity';
import { UserCrudService } from './apps/user/user.crud.service';

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
          entities:[Activity,User],
          autoLoadEntities: true,
          synchronize: true,
          // entities: [User,Userinfo,File]
      }),
      TypeOrmModule.forFeature([Activity,User], 'regConnection')
  ],
  controllers: [AppController],
  providers: [ActivityCrudService,UserCrudService],
})
export class AppModule {}
