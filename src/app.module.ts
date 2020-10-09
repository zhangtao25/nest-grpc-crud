import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from './apps/activity/activity.entity';
import { ActivityCrudService } from './apps/activity/activity.crud.service';
import { User } from './apps/user/user.entity';
import { UserCrudService } from './apps/user/user.crud.service';
import { Student } from './apps/student/student.entity';
import { StudentCrudService } from './apps/student/student.crud.service';
import { Book } from './apps/book/book.entity';
import { BookCrudService } from './apps/book/book.crud.service';
import { School } from './apps/school/school.entity';
import { SchoolCrudService } from './apps/school/school.crud.service';

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
          entities:[Activity,User,Student,Book,School],
          autoLoadEntities: true,
          synchronize: true,
          // entities: [User,Userinfo,File]
      }),
      TypeOrmModule.forFeature([Activity,User,Student,Book,School], 'regConnection')
  ],
  controllers: [AppController],
  providers: [ActivityCrudService,UserCrudService,StudentCrudService,BookCrudService,SchoolCrudService],
})
export class AppModule {}
