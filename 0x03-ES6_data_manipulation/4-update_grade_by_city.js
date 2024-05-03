export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const filterdList = studentList.filter(
    (student) => student.location === city,
  );

  // if id newgrade.id ==student_id -> add the grade to the student
  filterdList.forEach((student) => {
    student.grade = 'N/A';
  });

  filterdList.forEach((student) => {
    for (const studentGrade of newGrades) {
      if (studentGrade.studentId === student.id) {
        student.grade = studentGrade.grade;
      }
    }
  });

  return filterdList;
}
