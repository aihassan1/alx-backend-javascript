const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const content = fs.readFileSync(path, 'utf-8');
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

  console.log(`Number of students: ${NumberOfStudents}`);
  console.log(`Number of students in CS: ${CS_SS.length}. List:${CS_SS}`);
  console.log(`Number of students in SWE: ${SWE_SS.length}. List:${SWE_SS}`);
}

module.exports = countStudents;
