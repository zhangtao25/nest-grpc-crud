function generationString(dbs) {
    // ======header======
    const header = `
syntax = "proto3";
package grpcService; // 包名


message CommonField {
    string pageIndex = 1;
    string pageSize = 2;
}
`


    let res = ``
    for (let i = 0; i < dbs.length; i++) {
        const column = dbs[i].column
        const tableName = dbs[i].table


        // ======entity======
        let entity = ``

        for (let i = 0; i < column.length; i++) {
            entity = entity + `
        ${column[i].type} ${column[i].name} = ${i + 1};`
        }


        const main = `
service ${tableName}CrudService {
    rpc Create (Create${tableName}RequestType) returns (Create${tableName}ResponseType) {}
    rpc Delete (Delete${tableName}RequestType) returns (Delete${tableName}ResponseType) {}
    rpc Update (Update${tableName}RequestType) returns (Update${tableName}ResponseType) {}
    rpc Find (Find${tableName}RequestType) returns (Find${tableName}ResponseType) {}
}

//${tableName}
message ${tableName} {
    ${entity}
}

message Create${tableName}RequestType{
    ${entity}
}

message Create${tableName}ResponseType{
    int32 responseCode = 2;
    string responseDesc =  3;
}

message Delete${tableName}RequestType{
    string id = 1;
}

message Delete${tableName}ResponseType{
    int32 responseCode = 2;
    string responseDesc =  3;
}

message Update${tableName}RequestType{
    ${entity}
}

message Update${tableName}ResponseType{
    int32 responseCode = 2;
    string responseDesc =  3;
}

message Find${tableName}RequestType{
    ${tableName} entity = 1;
    CommonField commonField = 2;
}

message Find${tableName}ResponseType{
    repeated ${tableName} data = 1;
    int32 responseCode = 2;
    string responseDesc =  3;
}
    `
        res = res + (main)
    }

    return header + res
}

module.exports =  {
  generationString
}