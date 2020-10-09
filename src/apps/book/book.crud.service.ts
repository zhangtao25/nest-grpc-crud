import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';
import { CrudService } from '../../common/crud.service';

@Injectable()
export class BookCrudService extends CrudService<Book>{
    constructor(
        @InjectRepository(Book, 'regConnection') repo
    ) {
        super(repo)
    }

    public static method = 'Book';
    public static service = 'BookService';

    public static request = {};
    public static response = {};


}

