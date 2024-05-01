# Payroll-Tracker


## Description

For this project I was given starter code for a payroll tracker application. Originally, the code just had a form and a button that was trying to run functions that weren't yet complete. To start, I created an employee object to store the employee information; first name, last name, and salary. Then I needed to create the prompts for the user to enter their information. At first I had "+prompt" for the salary prompt, but then I learned a better way to ensure the input is a number is to use "parseInt". Then a while loop with a boolean was created so that the user could add as many employees as they wanted. Next, I had to define the "employeesArray", and also return it so that the user entered information would log to the table. Then I created the function to get the average employee salary, and logged it to the console. Lastly, I needed to create a function with a method to generate a random employee, using "Math.random". I was having trouble here because at first the console log was showing the last entered employee as the random winner each time. I had to declare a variable of "randomWinner" with the random winner value to connect the first name and last name with the randomization. After doing that, and console logging, using template literal, I was able to get a truly randomized winner.


## Installation

N/A


## Usage
The user is presented with an empty Employee Roster. By clicking the "Add Employee" button you're prompted with three separate prompts to enter the employee's first name, last name, and salary. For the salary field, the user is is expected to enter a number, and if they enter something other than a number, the application will enter 0. This is made possible with the isNaN function. The user either keeps adding as many employees as they want, or clicks the cancel button to stop adding more employees, and then all the entered information will be put into the roster list. It is displayed on the page, sorted alphabetically by last name. If the user inspects the page with DevTools, they will see the average employee salary has been logged to the console. They will also see a randomized drawing winner has been logged to the console as well.


## Credits

N/A


## License

N/A