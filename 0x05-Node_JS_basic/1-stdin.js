process = require('process');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  userInput = input.toString().trim();
  process.stdout.write(`Your name is: ${input}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
