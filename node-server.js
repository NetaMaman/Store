const fs=require('fs');
const http=require('http');
const url=require('url');

const homepageTxt= fs.readFileSync(`./index.txt`, 'utf-8'); 
const overview= fs.readFileSync(`./overview.html`, 'utf-8'); 
// const index=JSON.parse(homepageTxt);

const server=http.createServer((req,res)=>{
    const pathName=req.url; 
    if(pathName=== '/' || pathName=== '/homepage'){
        res.writeHead(200,{'Content-type': 'text/html'});
        const output=overview.replace('{%MAIN%}', homepageTxt);
        res.end(output);
    }
});

server.listen(8000, '127.0.0.1', ()=> {
    console.log("Listening to requests on port 8080");
    });