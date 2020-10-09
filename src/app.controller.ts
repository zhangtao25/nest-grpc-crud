import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ActivityCrudService } from './apps/activity/activity.crud.service';
import { UserCrudService } from './apps/user/user.crud.service';


@Controller()
export class AppController {
    constructor(
        private readonly activityCrudService: ActivityCrudService,
        private readonly userCrudService: UserCrudService,
    ) {
    }

    // Activity
    @GrpcMethod(ActivityCrudService.service, 'Create' + ActivityCrudService.method)
    async createActivity(req): Promise<any> {
        return await this.activityCrudService.create(req);
    }

    @GrpcMethod(ActivityCrudService.service, 'Delete' + ActivityCrudService.method)
    async deleteActivity(req): Promise<any> {
        const id = req.id;
        return await this.activityCrudService.delete(id);
    }

    @GrpcMethod(ActivityCrudService.service, 'Update' + ActivityCrudService.method)
    async updateActivity(req): Promise<any> {
        const id = req.id;
        delete req.id
        return await this.activityCrudService.update(id,req);
    }

    @GrpcMethod(ActivityCrudService.service, 'Find' + ActivityCrudService.method)
    async findActivity(req): Promise<any> {
        const commonField = req.commonField;
        const entity = req.entity;
        return await this.activityCrudService.find(entity, commonField);
    }



    // User
    @GrpcMethod(UserCrudService.service, 'Create' + UserCrudService.method)
    async createUser(req, metdata: any): Promise<any> {
        const entity = req;
        const res = await this.userCrudService.create(entity);
        return res;
    }

    @GrpcMethod(UserCrudService.service, 'Delete' + UserCrudService.method)
    async deleteUser(req, metdata: any): Promise<any> {
        const id = req.id;
        console.log(req)
        const res = await this.userCrudService.delete(id);
        return res;
    }

    @GrpcMethod(UserCrudService.service, 'Update' + UserCrudService.method)
    async updateUser(req, metdata: any): Promise<any> {
        const id = req.id;
        delete req.id
        const res = await this.userCrudService.update(id,req);
        return res;
    }

    @GrpcMethod(UserCrudService.service, 'Find' + UserCrudService.method)
    async findUser(req, metdata: any): Promise<any> {
        console.log(req,'req')
        const commonField = req.commonField;
        const entity = req.entity;
        const res = await this.userCrudService.find(entity, commonField);
        return res;
    }
}
