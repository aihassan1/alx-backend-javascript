// export default function getStudentsByLocation(listOfStudents, city) {
//   result = listOfStudents.filter((student) => {
//     return student.location === city;
//   });
//   return result;
// }

let student = [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' },
];
console.log(
  student.filter((obj) => {
    return obj.location;
  })
);
