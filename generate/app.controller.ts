// import { Controller } from '@nestjs/common';
// import { GrpcMethod } from '@nestjs/microservices';
//
//
//     import { UserCrudService } from './apps/user/user.crud.service';
//
//     import { ActivityCrudService } from './apps/activity/activity.crud.service';
//
//     import { StudentCrudService } from './apps/student/student.crud.service';
//
//
//
//
//
// @Controller()
// export class AppController {
//     constructor(
//
//         private readonly userCrudService: UserCrudService,
//
//         private readonly activityCrudService: ActivityCrudService,
//
//         private readonly studentCrudService: StudentCrudService,
//
//     ) {
//     }
//
//
//
//     // user
//     @GrpcMethod(UserCrudService.service, 'Create' + UserCrudService.method)
//     async createUser(req): Promise<any> {
//     return await this.userCrudService.create(req);
//     }
//
//     @GrpcMethod(UserCrudService.service, 'Delete' + UserCrudService.method)
//     async deleteUser(req): Promise<any> {
//     const id = req.id;
//     return await this.userCrudService.delete(id);
//     }
//
//     @GrpcMethod(UserCrudService.service, 'Update' + UserCrudService.method)
//     async updateUser(req): Promise<any> {
//     const id = req.id;
//     delete req.id
//     return await this.userCrudService.update(id,req);
//     }
//
//     @GrpcMethod(UserCrudService.service, 'Find' + UserCrudService.method)
//     async findUser(req): Promise<any> {
//     const commonField = req.commonField;
//     const entity = req.entity;
//     return await this.userCrudService.find(entity, commonField);
//     }
//
//
//
//     // activity
//     @GrpcMethod(ActivityCrudService.service, 'Create' + ActivityCrudService.method)
//     async createActivity(req): Promise<any> {
//     return await this.activityCrudService.create(req);
//     }
//
//     @GrpcMethod(ActivityCrudService.service, 'Delete' + ActivityCrudService.method)
//     async deleteActivity(req): Promise<any> {
//     const id = req.id;
//     return await this.activityCrudService.delete(id);
//     }
//
//     @GrpcMethod(ActivityCrudService.service, 'Update' + ActivityCrudService.method)
//     async updateActivity(req): Promise<any> {
//     const id = req.id;
//     delete req.id
//     return await this.activityCrudService.update(id,req);
//     }
//
//     @GrpcMethod(ActivityCrudService.service, 'Find' + ActivityCrudService.method)
//     async findActivity(req): Promise<any> {
//     const commonField = req.commonField;
//     const entity = req.entity;
//     return await this.activityCrudService.find(entity, commonField);
//     }
//
//
//
//     // student
//     @GrpcMethod(StudentCrudService.service, 'Create' + StudentCrudService.method)
//     async createStudent(req): Promise<any> {
//     return await this.studentCrudService.create(req);
//     }
//
//     @GrpcMethod(StudentCrudService.service, 'Delete' + StudentCrudService.method)
//     async deleteStudent(req): Promise<any> {
//     const id = req.id;
//     return await this.studentCrudService.delete(id);
//     }
//
//     @GrpcMethod(StudentCrudService.service, 'Update' + StudentCrudService.method)
//     async updateStudent(req): Promise<any> {
//     const id = req.id;
//     delete req.id
//     return await this.studentCrudService.update(id,req);
//     }
//
//     @GrpcMethod(StudentCrudService.service, 'Find' + StudentCrudService.method)
//     async findStudent(req): Promise<any> {
//     const commonField = req.commonField;
//     const entity = req.entity;
//     return await this.studentCrudService.find(entity, commonField);
//     }
//
//
//
// }
