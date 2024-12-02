const http = require('http');
const countStudents = require('./3-read_file_async');
require('process');

const port = 1245;

// Create http server
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    const databasePath = process.argv[2];
    countStudents(databasePath)
      .then((data) => {
        for (let i = 0; i < data.length; i += 1) {
          if (i === data.length - 1) {
            res.write(data[i]);
            break;
          }
          res.write(`${data[i]}\n`);
        }
        res.end();
      })
      .catch((err) => {
        res.end(err.message);
      });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
