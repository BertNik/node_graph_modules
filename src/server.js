const processArgs = require('./args');
const port = processArgs.getPort();
const http = require('http'); 
const qs = require('querystring');
const route = require('./routes');

const server = http.createServer(function (req, resp) {
    let q = req.url.slice(req.url.indexOf("?")+1);
    let body = [];
    req.on('data',(c)=>{
        body.push(c);
    }).on('end',(f)=>{
        body = Buffer.concat(body).toString();
        if(q === "/"){
            route.router(q, req, resp);
            resp.end();
        }else if('package' in qs.parse(q)){
            (async function (){
                await route.router('package', req, resp, q);
                resp.end();
            })()
        }else{
            resp.end();
        }
    })
})
server.listen(port); 
console.log(`Node.js web server at port ${port} is running..`)