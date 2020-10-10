import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ActivityFieldCustomDocument } from './activityFieldCustom.schema';
import { MongoCrudService } from '../../common/mongo.crud.service';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ActivityFieldCustomCrudService extends MongoCrudService<ActivityFieldCustomDocument>{
    constructor(
        @InjectModel('activity_field_custom') model
    ) {
        super(model)
    }

    public static method = 'ActivityFieldCustom';
    public static service = 'ActivityFieldCustomCrudService';

    public static request = {};
    public static response = {};


}

