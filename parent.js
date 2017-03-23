console.log("Parent running")
const cp = require('child_process');
process.execArgv =  ["--debug=5859"];
const n = cp.fork(`${__dirname}/child.js`);

n.on('message', (m) => {
  console.log('PARENT got message:', m);
});

n.send({ hello: 'INITIALLY' });

const sender = () => {
    console.log("parent")
    n.send({ hello: 'world' });
}
setInterval(sender, 1000);
/*
//const cp = require('child_process');
console.log("Parent");
var childProcessDebug = require('child-process-debug');
var cp = require("child_process");

for (var i = 0; i < 1; i++) {
    //if this script wasn't run with --debug this will spawn node example.js [0-3]
    //if this script was run with --debug, this will spawn node --debug=[5859-5862] example.js [0-3]
    let n = 10;
    // process.execArgv = ["--debug=5858"];
    // n = childProcessDebug.fork('./child.js', ['./child.js', '--debug-brk=5858',"child " + i]);
    // n = cp.fork('./child.js', ['./child.js', '--debug-brk=5859',"child " + i]);
    n = cp.fork(`${__dirname}/child.js`);

    n.on('message', (m) => {
    console.log('PARENT got message:', m);
    });

    const sender = () => {
        n.send({ hello: 'world' });
        console.log("parent")
    }
    setInterval(sender, 1000);
}
*/