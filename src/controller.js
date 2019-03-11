const processArgs = require('./args');
const dd_root = processArgs.getRoot();
const qs = require('querystring');
const fi = require('./file_s');

exports.rootController = function(req, resp){
    resp.write('test');
}
exports.packageController = function(req, resp, ...t){
    let package = qs.parse(t[0])['package'];
    return new Promise((res,rej)=>{
        fi.read(dd_root,package).then((r)=>{
            resp.setHeader('Content-Type', 'application/json;')
            resp.write(r);
            res();
        }).catch((e)=>{
            resp.setHeader('Content-Type', 'application/json;')
            console.log(e.message);
            resp.write(e.custom_message+"\n");
            res();
        });
    });
}