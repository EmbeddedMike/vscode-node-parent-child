var size = require("sizeof").sizeof;
console.log(size)
var deepcopy = require("deepcopy")

console.log( size(global));
console.log(global);

var childProcessDebug = require('child-process-debug');

for (var i = 0; i < 4; i++) {
    //if this script wasn't run with --debug this will spawn node example.js [0-3]
    //if this script was run with --debug, this will spawn node --debug=[5859-5862] example.js [0-3]
    childProcessDebug.spawn(['example.js', i]);
}