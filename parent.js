console.log("Parent running")
const cp = require('child_process');
// process.execArgv =  ["--debug=5859"];
const child = cp.fork(`${__dirname}/child.js`,{
 //force the debug port to the one in the launch config
 execArgv: ["--debug=5859"]
 ,silent: true
//  ,stdio: 'ipc'
}
);

//Child data does not go to console with VS Code
//So do this.
child.stdout.on("data", (m) => console.log(m.toString()));

const sender = () => {
    child.send({ hello: 'world' });
}

child.on('message', (m) => {
  console.log('PARENT got message:', m);
  sender()
});
