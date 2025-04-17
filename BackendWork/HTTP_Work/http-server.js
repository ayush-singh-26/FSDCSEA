import http from 'http'
const PORT= 5000;
const server = http.createServer(async(req,res)=>{

    if(req.url == '/msg' && req.method == 'GET'){
        res.setHeader('Content-Type', 'text/html');
        res.end('<h2>Hi!! , Greeting of the day</h2>');
    }

    if(req.url=='/' && req.method == 'POST'){
        res.setHeader('Content-Type', 'text/html');
        res.end(JSON.stringify({
            message: 'Successfully hit the api'
        }));
    }

    

    // res.setHeader('Content-Type','application/json');
    // console.log(Object.keys(req));
    // console.log("Request url " + req.url+"Response method " + req.method);
    // res.end('Welcome to ABES Engineering College');
})

server.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}/`);
})