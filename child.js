console.log("Child started");
console.log(process.argv)
process.on('message', (m) => {
  console.log('CHILD got message:', m);
});


sender = () => {
    process.send({ foo: 'bar' });
}
setInterval(
    sender, 1000
)