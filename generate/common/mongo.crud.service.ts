// 通过泛型将所需类传递进来 Entity
import { Repository } from 'typeorm';
import { Document, Model } from 'mongoose';
import Util from '../untils/util';
import { ResponseType } from './ResponseType';

export class MongoCrudService<Document_ extends Document> {
    // 通过构造函数将外部typeorm包的Repository注入
    protected model: Model<Document_>;
    constructor(model: Model<Document_>) {
        this.model = model
    }


    async create(entity):Promise<any>{

        const responseType = new ResponseType();
        responseType.responseCode = 200;
        responseType.responseDesc = 'create success';
        responseType.ResponseStatus = null;
        return responseType
    }

    async delete(id:any):Promise<any>{


        const responseType = new ResponseType();
        responseType.responseCode = 200;
        responseType.responseDesc = 'delete success';
        responseType.ResponseStatus = null;
        return responseType
    }

    async update(id,entity):Promise<any>{

        const responseType = new ResponseType();
        responseType.responseCode = 200;
        responseType.responseDesc = 'update success';
        responseType.ResponseStatus = null;
        return responseType
    }


    // find操作
    async find(entity,commonField):Promise<any>{

        const {pageIndex,pageSize} = Util.getPageEntity(commonField);


        // 使用自定义通用ResponseType
        const responseType = new ResponseType();
        responseType.data = await this.model.find({})
        responseType.responseCode = 200;
        responseType.responseDesc = 'find success';
        responseType.ResponseStatus = null;
        // const pageEntity = Util.getPageContext(pageIndex, findAndCount, pageSize);
        // responseType.pageContext = pageEntity;
        console.log(responseType,'responseType')
        return responseType;

    }
}