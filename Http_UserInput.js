const { writeFile, writeFileSync, appendFile } = require('fs');
const http = require('http');
const fs=require('fs');
const server = http.createServer((req, res)=>{
   const urlFromPage = req.url;
   //console.log(why);
   if(urlFromPage === '/'){

      res.write('<html>');
      res.write('<head> <title> Hello  </title> </head>');
      res.write(' <body> <form action="http://localhost:3000/username" method="GET"><textarea type="text" name="user"/></textarea><button type="submit">Submit</button> </body>');
      res.write('</html>');
      res.end();
      return;
   }
   else if(urlFromPage=== '/favicon.ico')
   {
       res.end();
   }
   else{
        const myURL = new URL(urlFromPage, 'https://localhost:3000/');
        let data= myURL.searchParams.get('user');
        fs.writeFileSync('userinputfile.txt',data,function(err){
            console.log(err);
        });

        for(let i=0; i<300;i++)
        {
            //console.log(i);
            fs.appendFileSync('userinputfile.txt',''+i+"\n",function(err){
                console.log(err);
            });
        }
        let dataFormfile= fs.readFileSync('userinputfile.txt','utf8');
        console.log(dataFormfile);
        res.end("information submitted");
   }
});
server.listen(3000);