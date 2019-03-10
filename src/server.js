const processArgs = require('./args');
const port = processArgs.getPort();
const fi = require('./file_s');
const p = require('path');

const http = require('http'); 
const qs = require('querystring');
const dd_root = processArgs.getRoot();

const server = http.createServer(function (req, res) {

});
server.on('request',(req,resp)=>{
    let q = req.url.slice(req.url.indexOf("?")+1);
    let body = [];
    req.on('data',(c)=>{
        body.push(c);
    }).on('end',()=>{
        body = Buffer.concat(body).toString();
        let package = qs.parse(q)['package'];
        fi.read(dd_root,package).then((r)=>{
            resp.write(r);
            resp.end("\n");
        }).catch((e)=>{
            console.log(e.message);
            resp.write(e.custom_message+"\n");
            resp.end();
        });
    })
});    
server.listen(port); 
console.log(`Node.js web server at port ${port} is running..`)