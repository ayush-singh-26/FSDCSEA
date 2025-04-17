import http from 'http'
import fs from 'fs/promises'
const PORT = 8000;

const server= http.createServer(async(req, res) => {

    if(req.url=='/' && req.method=='GET'){

        res.setHeader('Content-Type', 'text/html');
        res.end('Welcom to my website!');
    }
    else if(req.url == '/student' && req.method == 'GET'){
        res.setHeader('Content-Type', 'text/html');
        const data=await fs.readFile('student.json',{encoding: 'utf8'});
        console.log(data);
        const htmlData = await fs.readFile('index.html',{encoding: 'utf8'});

        const template= `<h2 style=color:red>${data}</h2>`;
        res.end(htmlData);
    }
    else{
        res.setHeader('Content-Type', 'text/html');
        const errorPage=await fs.readFile('error.html',{encoding: 'utf8'});
        res.end(errorPage);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});