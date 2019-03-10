const processArgs = require('./args');
const port = processArgs.getPort();
const fi = require('./file_s');
const p = require('path');

const http = require('http'); 
const qs = require('querystring');
const dd_root = processArgs.getRoot();

const server = http.createServer(function (req, resp) {
    let q = req.url.slice(req.url.indexOf("?")+1);
    let body = [];
    req.on('data',(c)=>{
        body.push(c);
    }).on('end',(f)=>{
        body = Buffer.concat(body).toString();
        let package = qs.parse(q)['package'];
        fi.read(dd_root,package).then((r)=>{
            if(!r)return;
            resp.setHeader('Content-Type', 'application/json;')
            resp.write(r);
            resp.end(false);
        }).catch((e)=>{
            resp.setHeader('Content-Type', 'application/json;')
            console.log(e.message);
            resp.write(e.custom_message+"\n");
            resp.end();
        });
    })
})
//server.on('request',(req,resp)=>{
//});    
server.listen(port); 
console.log(`Node.js web server at port ${port} is running..`)