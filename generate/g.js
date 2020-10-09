// eslint-disable-next-line @typescript-eslint/no-var-requires
var fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
var template = require('./template')
// template.generationString()

generationModule = (dbs)=>{
  //1.加载文件操作模块，fs 模块

  const catalogue = 'generate/'
    var msg = template.generationString(dbs);

    fs.writeFile(catalogue + `/grpc.proto`, msg, 'utf8', (err) => {
        if (err) {
            console.log('写入文件出错拉！具体错误：' + err)
        } else {
            console.log('ok');
        }
    });
}




// generationModule(dbs)


module.exports = generationModule