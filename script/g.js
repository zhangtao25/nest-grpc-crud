// eslint-disable-next-line @typescript-eslint/no-var-requires
var fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
var template = require('./template')
// template.generationString()

generationModule = (dbs)=>{

  const catalogue = 'script/'
    var msg = template.generationString(dbs);

    fs.writeFile(catalogue + `/grpc.proto`, msg, 'utf8', (err) => {
        if (err) {
            console.log('' + err)
        } else {
            console.log('ok');
        }
    });
}


const dbs = [
    {
        table:"Activity",
        column: [
            {
                name:"id",
                type:"int32"
            },
            {
                name:"name",
                type:"string"
            },
            {
                name:"cost",
                type:"int32"
            },
            {
                name:"numberLimit",
                type:"int32"
            },
            {
                name:"creater",
                type:"int32"
            },
            {
                name:"posters",
                type:"int32"
            },
            {
                name:"startTime",
                type:"string"
            },
            {
                name:"endTime",
                type:"string"
            },
            {
                name:"content",
                type:"string"
            }
        ]
    },
    {
        table:"User",
        column: [
            {
                name:"id",
                type:"int32"
            },
            {
                name:"unionid",
                type:"string"
            },
            {
                name:"phone",
                type:"string"
            },
            {
                name:"email",
                type:"string"
            }
        ]
    }
]

generationModule(dbs)