const express = require('express');
const countStudents = require('./3-read_file_async');
require('process');

const app = express();
const port = 1245;
const hostname = '127.0.0.1';

// Home route
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Students route
app.get('/students', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('This is the list of our students\n');

  const databasePath = process.argv[2];
  countStudents(databasePath)
    .then((data) => {
      for (let i = 0; i < data.length; i += 1) {
        if (i === data.length - 1) {
          res.write(data[i]);
        } else {
          res.write(`${data[i]}\n`);
        }
      }
      res.end();
    })
    .catch((err) => {
      res.end(err.message);
    });
});

// Start the server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
