// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs =require('fs')

let arguments = process.argv.splice(2);
let env = arguments[0]

console.log('Environment set successfully!');

fs.writeFile('./build/env.txt', env, 'utf8', (err) => {
    if (err) throw err;
});