const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employees",
});

  connection.connect(function(err) {
    if (err) throw err;
    console.log ();
    init();
  });

 var choices = [
                 "View All Employees",
                "View All Departments",
                "View All Roles",
                "Add new Employee",
                "Add new Department",
                "Add new Role",
                "Update Employee Role",
                "Exit",
 ];

  function init() {
      getDepartment();
      getRoles();
      getEmployee();
      inquirer
      .prompt([
          {
              type: "list",
              name: "choice",
              message: "What would you like to do?",
              choices: choices,
          },
        ])
            .then(function(answer) {
              switch (answer.choice) {
        
            // Necessary cases
            case "View All Employees":
        viewAllEmployees();
        break;

      case "View All Departments":
        viewAllDepartments();
        break;

      case "View All Roles":
        viewAllRoles();
        break;

      case "Add new Employee":
        addEmployee();
        break;

      case "Add new Department":
        addDepartment();
        break;

      case "Add new Role":
        addRole();
        break;

      case "Update Employee Role":
          updateRole();
          break;

    // Bonus case
      case "View All Employees by Department":
        allEmployeesDepartment();
        break; 
        
      case "Exit":
        connection.end();
        break;
      }
    });
}
