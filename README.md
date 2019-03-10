# CLI for getting information on Modules
```bash
$ npm install
```
`jq` is used to parse json on the command line; it's not necessary to install if you prefer to use another tool.
```bash
$ sudo apt-get install jq
```
```bash
$ git clone git@github.com:BertNik/node_package_info.git 
$ cd node_package_info/src
$ node index.js -p chai --path ../data_dir
$ cat ../data_dir/chai.json | jq
```
Output (partial file only; rest of the file is in `data_dir` directory:
```json
{
  "latestVersion": {
    "author": {
      "name": "Jake Luer",
      "email": "jake@alogicalparadox.com"
    },
    "name": "chai",
    "description": "BDD/TDD assertion library for node.js and the browser. Test framework agnostic.",
    "keywords": [
      "test",
      "assertion",
      "assert",
      "testing",
      "chai"
```
