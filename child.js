console.log("Child started\nu");
console.log(process.argv)

sender = () => {
    process.send({ foo: 'bar' });
}

process.on('message', (m) => {
  console.log('CHILD got message:', m);
  sender()
  
});
//start by sending a message
sender();

