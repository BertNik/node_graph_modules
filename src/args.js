exports.getPackage = function(process){
    if(process.argv.indexOf('-p') !== -1 && typeof process.argv[process.argv.indexOf('-p')+1] === 'string')
        return process.argv[process.argv.indexOf('-p')+1];
    else return;
}
exports.getPath = function(){
    if(process.argv.indexOf('--path') !== -1 && typeof process.argv[process.argv.indexOf('--path')+1] === 'string')
        return process.argv[process.argv.indexOf('--path')+1];
    else return;
}