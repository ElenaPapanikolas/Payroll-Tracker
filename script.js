// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employeesArray = []; // declaring the array
let employee = { // created the object that holds employee information, declaring it globally
  firstName: '',
  lastName: '',
  salary: '',
};

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  let addAnother = true;  // created a boolean variable to control the loop, if true keep adding employees

  while (addAnother) { // created a while loop, it will run until condition is no longer true

  employee = { // referencing the object
    firstName: '',
    lastName: '',
    salary: '',
  };

  employee.firstName = prompt("Please enter employee's first name.");  // created prompts, where user enters information
  employee.lastName = prompt("Please enter employee's last name.");
  employee.salary = parseInt(prompt("Please enter employee's salary.")); // added parseInt to ensure input is a number
  if (isNaN(employee.salary)) { // manually setting employee salary to 0 if user enters a non number
    employee.salary = 0;
  };

  if (!confirm("Do you want to add another employee?")) { // this is the 'yes' or 'cancel' button
    addAnother = false; // changing boolean to false if confirm is false
  };
  employeesArray.push(employee); // adds all employee information to employees array
  }
  return employeesArray; // returns all data entered from user as an array of objects

};
// console.log(employeesArray); // was going to console log employees array to the console, but its already being logged with console.table on line 111



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++) { // to find the sum of all salaries
    sum += employeesArray[i].salary;
  }
  let averageSalary = (sum / employeesArray.length).toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // to find the average of all salaries. Added method conversion to US dollars
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary}`); // is to console log the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  Math.floor(Math.random() * employeesArray.length);  // generates random employee
  console.log(`Congratulations ${employee.firstName} ${employee.lastName}, our random drawing winner!!!`); // logging random winner to the console
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
