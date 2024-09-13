// You are given an object representing employees and their respective departments. Your task is to:
// 1) Convert the object into an array of key-value pairs.
// 2) Filter out employees who belong to the “HR” department.
// 3) Transform the filtered data into an array of objects with employeeId and department properties.

// Here’s the employee data:
const employees = {
  emp1: 'Engineering',
  emp2: 'HR',
  emp3: 'Marketing',
  emp4: 'HR',
  emp5: 'Engineering'
};

// Step 1: Convert the object into an array of key-value pairs
const employeesValue = Object.entries(employees)
// console.log(employeesValue)

// Step 2: Filter out employees who belong to the "HR" department
const filterEmployees = employeesValue.filter(([a, b]) => b !== 'HR')
// console.log(filterEmployees)


// Step 3: Transform the filtered data into an array of objects with employeeId and department properties
const filteredData = filterEmployees.map(([employeeId, department]) => ({
  employeeId,
  department
}))
console.log(filteredData)



