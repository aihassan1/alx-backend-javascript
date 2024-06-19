const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const content = await fs.readFile(path, 'utf-8');

    const rows = content.split('\n').filter((row) => row.trim() !== '');

    const NumberOfStudents = rows.length - 1;

    rows.shift();
    const students = rows.map((row) => row.split(','));

    const SWE_SS = [];
    const CS_SS = [];

    students.forEach((student) => {
      if (student[3] === 'SWE') SWE_SS.push(` ${student[0]}`);
      else if (student[3] === 'CS') CS_SS.push(` ${student[0]}`);
    });

    const output = `Number of students: ${NumberOfStudents}\nNumber of students in CS: ${CS_SS.length}. List:${CS_SS}\nNumber of students in SWE: ${SWE_SS.length}. List:${SWE_SS}`;
    return output;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databaseName = process.argv[2];

    let output = 'This is the list of our students\n';
    const studentData = await countStudents(databaseName);

    output += `${studentData}`;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(output);
  }
});

app.listen(1245);
module.exports = app;
