# nest-grpc-crud

Grpc crud solution based on nest

English | [简体中文](./README-zh_CN.md)

## Table of Contents

  - [Features](#Features)
  - [Installing](#Installing)
  - [Example](#Example)
  - [Feedback](#Feedback)
  - [License](#License)
  

## Features

- Rapid construction of nest-based GRPC micro-service template
- Batch generate database crud operation
- Automatically generate proto3 contract files

## Installing

Using git:

```bash
$ git clone https://github.com/zhangtao25/nest-grpc-crud.git
```


## Example

### Please follow the "generate" folder
This folder holds the core files that generate the code.

```json
//modify data.json file
{
    "columns": [
        {
            "name": "student",
            "Name": "Student",
            "column": [
                {
                    "name": "id",
                    "type": "int32"
                },
                {
                    "name": "name",
                    "type": "string"
                }
            ]
        }
    ]
}
```

The terminal runs the command to generate the target file
```bash
$ node generate/test.js
```

Generated code
```ts
// app.controller.ts
@Controller()
export class AppController {
    constructor(
        private readonly studentCrudService: StudentCrudService,
    
    ) {
    }
    
    // student
    @GrpcMethod(StudentCrudService.service, 'Create' + StudentCrudService.method)
    async createStudent(req): Promise<any> {
    return await this.studentCrudService.create(req);
    }

    @GrpcMethod(StudentCrudService.service, 'Delete' + StudentCrudService.method)
    async deleteStudent(req): Promise<any> {
    const id = req.id;
    return await this.studentCrudService.delete(id);
    }

    @GrpcMethod(StudentCrudService.service, 'Update' + StudentCrudService.method)
    async updateStudent(req): Promise<any> {
    const id = req.id;
    delete req.id
    return await this.studentCrudService.update(id,req);
    }

    @GrpcMethod(StudentCrudService.service, 'Find' + StudentCrudService.method)
    async findStudent(req): Promise<any> {
    const commonField = req.commonField;
    const entity = req.entity;
    return await this.studentCrudService.find(entity, commonField);
    }
}
```

```protobuf
//Proto3 contract document
syntax = "proto3";
package grpcService;


message CommonField {
    string pageIndex = 1;
    string pageSize = 2;
}

service StudentService {
    rpc CreateStudent (CreateStudentRequestType) returns (CreateStudentResponseType) {}
    rpc DeleteStudent (DeleteStudentRequestType) returns (DeleteStudentResponseType) {}
    rpc UpdateStudent (UpdateStudentRequestType) returns (UpdateStudentResponseType) {}
    rpc FindStudent (FindStudentRequestType) returns (FindStudentResponseType) {}
}

//Student
message Student {
    
        int32 id = 1;
        string name = 2;
}

message CreateStudentRequestType{
    
        int32 id = 1;
        string name = 2;
}

message CreateStudentResponseType{
    int32 responseCode = 2;
    string responseDesc =  3;
}

message DeleteStudentRequestType{
    string id = 1;
}

message DeleteStudentResponseType{
    int32 responseCode = 2;
    string responseDesc =  3;
}

message UpdateStudentRequestType{
    
        int32 id = 1;
        string name = 2;
}

message UpdateStudentResponseType{
    int32 responseCode = 2;
    string responseDesc =  3;
}

message FindStudentRequestType{
    Student entity = 1;
    CommonField commonField = 2;
}

message FindStudentResponseType{
    repeated Student data = 1;
    int32 responseCode = 2;
    string responseDesc =  3;
}
    
```

```ts
// apps/student/student.crud.service.ts

@Injectable()
export class StudentCrudService extends CrudService<Student>{
    constructor(
        @InjectRepository(Student, 'regConnection') repo
    ) {
        super(repo)
    }

    public static method = 'Student';
    public static service = 'StudentService';

    public static request = {};
    public static response = {};
}
```

```ts
// apps/student/student.entity.ts

@Entity({
    name: 'student'
})
export class Student {

    @PrimaryGeneratedColumn({ name: 'Id' })
    id: number;

    @Column({ name: 'Name' })
    name: string;
}
```

```ts
// app.module.ts
// Add student entity classes and crud service to the file
@Module({
  imports: [
      TypeOrmModule.forRoot({
          name: '***',
          type: 'mysql',
          host: '***',
          port: '***',
          username: '***',
          password: '***',
          database: '***',
          entities:[Student],
          autoLoadEntities: true,
          synchronize: true
      }),
      TypeOrmModule.forFeature([Student], 'regConnection')
  ],
  controllers: [AppController],
  providers: [StudentCrudService],
})
export class AppModule {}

```

Grpc client invocation mode（Matching grpc client address [nest-grpc-crud-client](https://github.com/zhangtao25/nest-grpc-crud-client) ）
```ts
@Controller('')
export class AppController implements OnModuleInit {
    private studentService;

    constructor(@Inject(ClentServe) private readonly clentServe: ClentServe) {
    }

    onModuleInit() {
        this.studentService = this.clentServe.client.getService('StudentService');
    }

    // Student
    @Post('createStudent')
    createStudent(@Body() body) {
        return this.studentService.createStudent(body);
    }

    @Post('deleteStudent')
    deleteStudent(@Body() body) {
        return this.studentService.deleteStudent(body);
    }

    @Post('updateStudent')
    updateStudent(@Body() body) {
        return this.studentService.updateStudent(body);
    }

    @Post('findStudent')
    findStudent(@Body() body) {
        return this.studentService.findStudent(body);
    }
}

```


## Feedback

QQ Group: 1042755904


## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, zhangtao25
