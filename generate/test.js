const fs = require('fs')
const ejs = require('ejs')
const data = require('./data.json')
const g = require('./g')


// 准备数据
// let data = {
//
// }


let dbs = []

for (let i = 0; i < data.columns.length; i++) {
    dbs.push({
            table:data.columns[i].Name,
            column: data.columns[i].column
    })
}

g(dbs)


let options = {}


// 删除原来的目录
const p=require("path");
let path='./generate/apps'
console.log(path,'path')
deleteFolder(path);
function deleteFolder(path) {
    let files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            let curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) {
                deleteFolder(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}


// 创建好目录
fs.mkdirSync("./generate/apps/");
for (let i = 0; i < data.columns.length; i++) {
    fs.mkdirSync(`./generate/apps/${data.columns[i].name}/`);
}
// fs.mkdirSync("./generate/apps/user/");
// fs.mkdirSync("./generate/apps/activity/");


// app.controller.ts
ejs.renderFile('./generate/app.controller.ejs', data, options, function(err, str){
    fs.writeFile('./generate/app.controller.ts', str, 'utf8', (err) => {
        if (err) {
            console.log('app.controller.ts' + err)
        } else {
            console.log('ok');
        }
    });
});


// template.crud.service.ejs

for (let i = 0; i < data.columns.length; i++) {

    if (data.columns[i].type === 'mongodb'){
        ejs.renderFile('./generate/mongo.template.crud.service.ejs', {column:data.columns[i]} , options, function(err, str){
            console.log(err,str)
            fs.writeFile(`./generate/apps/${data.columns[i].name}/${data.columns[i].name}.crud.service.ts`, str, 'utf8', (err) => {
                if (err) {
                    console.log('template.crud.service.ts' + err)
                } else {
                    console.log('ok');
                }
            });


        })




        ejs.renderFile('./generate/mongo.template.schema.ejs', {column:data.columns[i]} , options, function(err, str){
            fs.writeFile(`./generate/apps/${data.columns[i].name}/${data.columns[i].name}.schema.ts`, str, 'utf8', (err) => {
                if (err) {
                    console.log('template.entity.ts' + err)
                } else {
                    console.log('ok');
                }
            });


        })
    } else {
        ejs.renderFile('./generate/template.crud.service.ejs', {column:data.columns[i]} , options, function(err, str){
            console.log(err,str)
            fs.writeFile(`./generate/apps/${data.columns[i].name}/${data.columns[i].name}.crud.service.ts`, str, 'utf8', (err) => {
                if (err) {
                    console.log('template.crud.service.ts' + err)
                } else {
                    console.log('ok');
                }
            });


        })



        ejs.renderFile('./generate/template.entity.ejs', {column:data.columns[i]} , options, function(err, str){
            fs.writeFile(`./generate/apps/${data.columns[i].name}/${data.columns[i].name}.entity.ts`, str, 'utf8', (err) => {
                if (err) {
                    console.log('template.entity.ts' + err)
                } else {
                    console.log('ok');
                }
            });


        })
    }










}

