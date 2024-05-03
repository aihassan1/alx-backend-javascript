export default function getListStudents() {
  const Guillaume = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  const James = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  const Serena = {
    id: 3,
    firstName: 'Serena',
    location: 'San Francisco',
  };
  const arrayOfObjects = [Guillaume, James, Serena];
  return arrayOfObjects;
}

console.log(getListStudents());

