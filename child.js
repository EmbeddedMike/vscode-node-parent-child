console.log("Child started");
console.log(process.argv)

sender = () => {
    process.send({ foo: 'bar' });
}

process.on('message', (m) => {
  sender()
  console.log('CHILD got message:', m);
});
sender();

