const getParam = (param, process)=>{
    if(process.argv.indexOf(param) !== -1 && typeof process.argv[process.argv.indexOf(param)+1] === 'string')
        return process.argv[process.argv.indexOf(param)+1];
    else return;
}
exports.getPackage = function(process){
    const param = "-p";
    return getParam(param, process);
    
}
exports.getPath = function(){
    const param = "--path";
    return getParam(param, process);
}
exports.getPort = function(){
    const param = "--port";
    return getParam(param, process);
}
exports.getRoot = function(){
    const param = "--dd";
    return getParam(param, process);
}