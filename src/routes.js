const cont = require('./controller');
exports.router = function(route, req, resp, ...t){
    switch(route){
        case "/":
            cont.rootController(req,resp, ...t);
            break;
        case "package":
            return new Promise((res,rej)=>{
                res(cont.packageController(req,resp, ...t)) 
            });
    }
}