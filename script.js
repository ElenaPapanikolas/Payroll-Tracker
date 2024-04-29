// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employeesArray = []; // declaring the array

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  let addAnother = true;  // created a boolean variable to control the loop

  while (addAnother) { // created a while loop, it will run until condition is no longer true

  let employee = { // created the object
    firstName: '',
    lastName: '',
    salary: '',
  };

  employee.firstName = prompt("Please enter employee's first name.");  // created prompts
  employee.lastName = prompt("Please enter employee's last name.");
  employee.salary = prompt("Please enter employee's salary.");

  if (isNaN(employee.salary)) { // manually setting employee salary to 0 if user enters a non number
    employee.salary = 0;
  };

  if (!confirm("Do you want to add another employee?")) { // this is the 'yes' or 'cancel' button
    addAnother = false; // changing boolean to false if confirm is false
  };
  employeesArray.push(employee); // to add all employee information to employees array
  }
  return employeesArray; // returns all data entered from user as an array of objects

};
console.log(employeesArray); // logging employees array to the console



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}






/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
