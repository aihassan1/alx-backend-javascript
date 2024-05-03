export default function getStudentIdsSum(studentsList) {
  const sumOfId = studentsList.reduce(
    (accumulator, obj) => accumulator + obj.id,
    0,
  );

  return sumOfId;
}
