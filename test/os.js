const os = require("os");
const freeMem = os.freemem();
console.log(`${freeMem/1024/1024/1024}`);

const totMem = os.totalmem();
console.log(`${totMem/1024/1024/1024}`);

console.log(os.hostname());

console.log(os.version());