// Creates a report object
export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      const keysArray = Object.keys(employeesList);
      return keysArray.length;
    },
  };
  return reportObject;
}
