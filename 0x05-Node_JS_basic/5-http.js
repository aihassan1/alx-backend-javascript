const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const databaseName = process.argv[2];

    try {
      const OriginalConsoleLog = console.log;
      let output = '';
      console.log = (msg) => {
        output += msg + '\n';
      };

      console.log('This is the list of our students');
      await countStudents(databaseName);
      console.log = OriginalConsoleLog;
      res.end(output);
    } catch (err) {
      res.end('Cannot load the database');
    }
  }
});

app.listen(1245);
