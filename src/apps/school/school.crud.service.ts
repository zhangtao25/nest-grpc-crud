import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { School } from './school.entity';
import { CrudService } from '../../common/crud.service';

@Injectable()
export class SchoolCrudService extends CrudService<School>{
    constructor(
        @InjectRepository(School, 'regConnection') repo
    ) {
        super(repo)
    }

    public static method = 'School';
    public static service = 'SchoolService';

    public static request = {};
    public static response = {};


}

