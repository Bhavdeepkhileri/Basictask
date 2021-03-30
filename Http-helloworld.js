const dotenv = require('dotenv');
const http=require('http')
dotenv.config();
const server=http.createServer((req,res)=>{
    try{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write("I'm on a sugar crash");
    }
    catch(err)
    {
        console.log("you can't create simple server, maybe start looking for new line of work",err);
    }
    res.end();
});
console.log(process.env.PORT);
server.listen(process.env.PORT);

