const readline = require('readline');

r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

r1.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  r1.close();
});

r1.on('close', () => {
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});
