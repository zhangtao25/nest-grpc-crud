import { Body, Controller, Inject,Post } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ClentServe } from '../src/grpc/grpc.client.server';


import { UserCrudService } from './apps/user/user.crud.service';

import { ActivityFieldCustomCrudService } from './apps/activityFieldCustom/activityFieldCustom.crud.service';





@Controller()
export class AppController {
    constructor(
        @Inject(ClentServe) private readonly clentServe: ClentServe,

        private readonly userCrudService: UserCrudService,

        private readonly activityFieldCustomCrudService: ActivityFieldCustomCrudService,

    ) {
    }


    private userService

    private activityFieldCustomService



    onModuleInit() {



        this.userService = this.clentServe.client.getService('UserCrudService');

        this.activityFieldCustomService = this.clentServe.client.getService('ActivityFieldCustomCrudService');


    }








    @Post('createUser')
    _createUser(@Body() body) {
        return this.userService.create(body);
    }

    @Post('deleteUser')
    _deleteUser(@Body() body) {
        return this.userService.delete(body);
    }

    @Post('updateUser')
    _updateUser(@Body() body) {
        return this.userService.update(body);
    }

    @Post('findUser')
    _findUser(@Body() body) {
        return this.userService.find(body);
    }









    @Post('createActivityFieldCustom')
    _createActivityFieldCustom(@Body() body) {
        return this.activityFieldCustomService.create(body);
    }

    @Post('deleteActivityFieldCustom')
    _deleteActivityFieldCustom(@Body() body) {
        return this.activityFieldCustomService.delete(body);
    }

    @Post('updateActivityFieldCustom')
    _updateActivityFieldCustom(@Body() body) {
        return this.activityFieldCustomService.update(body);
    }

    @Post('findActivityFieldCustom')
    _findActivityFieldCustom(@Body() body) {
        return this.activityFieldCustomService.find(body);
    }














    // user
    @GrpcMethod(UserCrudService.service, 'Create')
    async createUser(req): Promise<any> {
        return await this.userCrudService.create(req);
    }

    @GrpcMethod(UserCrudService.service, 'Delete')
    async deleteUser(req): Promise<any> {
        const id = req.id;
        return await this.userCrudService.delete(id);
    }

    @GrpcMethod(UserCrudService.service, 'Update')
    async updateUser(req): Promise<any> {
        const id = req.id;
        delete req.id
        return await this.userCrudService.update(id,req);
    }

    @GrpcMethod(UserCrudService.service, 'Find')
    async findUser(req): Promise<any> {
        const commonField = req.commonField;
        const entity = req.entity;
        return await this.userCrudService.find(entity, commonField);
    }



    // activityFieldCustom
    @GrpcMethod(ActivityFieldCustomCrudService.service, 'Create')
    async createActivityFieldCustom(req): Promise<any> {
        return await this.activityFieldCustomCrudService.create(req);
    }

    @GrpcMethod(ActivityFieldCustomCrudService.service, 'Delete')
    async deleteActivityFieldCustom(req): Promise<any> {
        const id = req.id;
        return await this.activityFieldCustomCrudService.delete(id);
    }

    @GrpcMethod(ActivityFieldCustomCrudService.service, 'Update')
    async updateActivityFieldCustom(req): Promise<any> {
        const id = req.id;
        delete req.id
        return await this.activityFieldCustomCrudService.update(id,req);
    }

    @GrpcMethod(ActivityFieldCustomCrudService.service, 'Find')
    async findActivityFieldCustom(req): Promise<any> {
        const commonField = req.commonField;
        const entity = req.entity;
        return await this.activityFieldCustomCrudService.find(entity, commonField);
    }



}
