const http = require('http');
const server = http.createServer((req,res)=> { 
    if (req.url== "/home") {
        res.statusCode = 200
        res.write("vous  etes  sur  la  page dacceuil ")
     }else if(req.url== "/contact")   {
        res.statusCode= 200 
        res.write('vous  etes  sur des contacts  ')  
     }else {
        res.statusCode= 400
        res.write('page not found ')
     }
     res.end()

})
server.listen(3000,()=> { 
    console.log("server is  running ")
})