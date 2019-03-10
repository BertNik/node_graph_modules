const https = require('https'), registryurl = 'registry.npmjs.org', 
fetch = require('node-fetch'), fi = require('./file_s'), processArgs = require('./args');

let packageName = processArgs.getPackage(process),
path = processArgs.getPath(process),
getdetails = function (packagename) {
    return fetch(`http://${registryurl}/${packagename}`);
},checkFileDir;

if(checkFileDir = ((path, packageName) => {
    return fi.exists(path, packageName);
})(path, packageName) !== false)return;

const a = (async function a(packageName) {
    return await getdetails(packageName);
})(packageName).then((res,rej)=>res.json()).then((j)=>{
    if(j.error)throw JSON.stringify(j);
    return new Promise((res,rej)=>{
        res({keys : Object.keys(j), values:Object.values(j), wholeObj:j, versions:j.versions});
    });
}).then((res,rej)=>{
    const api_data = ((res) => {
        let k = Object.keys(res.versions).slice(-1)[0];
        return {
            latestVersion : res.versions[k],
            devDependencies : res.versions[k].devDependencies,
            dependencies : res.versions[k].dependencies,
            packageName: packageName,
        }
    })(res);
    fi.write(path, packageName, api_data);
}).catch((reason)=>console.log(reason));