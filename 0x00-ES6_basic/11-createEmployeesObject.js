export default function createEmployeesObject(departmentName, employees) {
  var EmployeesObject = {
    [departmentName]: employees,
  };
  return EmployeesObject;
}
