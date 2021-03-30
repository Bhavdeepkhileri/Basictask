const fs = require('fs');
var a=0;
function LOG(a){
    console.log(a);
}
console.log(__filename);
fs.readFile(__filename,'', (err,data) => {
    setTimeout(() => {
      console.log('timeout');
    }, 3);
    setTimeout(()=>{console.log('timeout 2')},100)
    setImmediate(() => {
      console.log('immediate');
      //console.log(data);
    });
  });
process.nextTick(()=>{LOG("nextTick")});