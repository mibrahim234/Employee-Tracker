const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employees"
});

  connection.connect(function(err) {
    if (err) throw err;
    console.log();
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

 var departments = [];
var deptIDS = [];
var roles = [];
var rolesIDS = [];
var employees = [];
var employeeIDS = [];

// all departments
function getDepartment() {
    connection.query("SELECT id, department FROM department", function (
        err,
        res
    ) {
        departments = [];
        res.forEach((item) => {
            departments.push(item.department);
        });
        res.forEach((item) => {
            var obj = {
                id: item.id,
                department: item.department,
            };
            deptIDS.push(obj);
        });
    });
}

// all roles
 function getRoles() {
    connection.query("SELECT id, title FROM role", function (err, res) {
        roles = [];
        res.forEach((item) => {
            if (roles.indexOf(item.title) === -1) {
                roles.push(item.title);
            }
        });
        res.forEach((item) => {
            var obj = {
                id: item.id,
                role: item.title,
            };
            rolesIDS.push(obj);
        });
    });
}
 
// all employees
function getEmployees() {
    connection.query(
        "SELECT id, first_name, last_name FROM employee",
        function (err, res) {
            employees = [];
            res.forEach((item) => {
       var fullName = `${item.first_name} ${item.last_name}`;
                employees.push(fullName);
            });
            employeeIDS = [];
            res.forEach((item) => {
                var obj = {
                    id: item.id,
                    firstName: item.first_name,
                    lastName: item.last_name,
                };
                employeeIDS.push(obj);
            });
        }
    );
}


  function init() {
      getDepartment();
      getRoles();
      getEmployees();
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

// view all employees
function viewAllEmployees() {
    const query = `
        SELECT a.id, a.first_name, a.last_name, b.title, c.department, b.salary
        FROM employee a
        INNER JOIN role b ON (a.role_id = b.id)
        INNER JOIN department c ON (b.department_id = c.id)
        ORDER BY a.id
        `;
    connection.query(query, function (err, res) {
        console.table(res);
        init();
    });
}

// view all departments 
function viewAllDepartments() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "dept",
                message: "Which department would you like to view?",
                choices: departments,
            },
        ])
        .then(function (response) {
            const query = `
                SELECT a.id, a.first_name, a.last_name, b.title, c.department, b.salary
                FROM employee a
                INNER JOIN role b ON (a.role_id = b.id)
                INNER JOIN department c ON (b.department_id = c.id)
                WHERE c.department = ?
            `;
            connection.query(query, response.dept, function (err, res) {
                console.table(res);
                init();
            });
        });
        }

// view all roles 
function viewAllRoles() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "Which role would you like to view?",
                choices: roles,
            },
        ])
        .then(function (response) {
            const query = `
                SELECT a.id, a.first_name, a.last_name, b.title, c.department, b.salary
                FROM employee a
                INNER JOIN role b ON (a.role_id = b.id)
                INNER JOIN department c ON (b.department_id = c.id)
                WHERE b.title = ?
            `;
            connection.query(query, response.role, function (err, res) {
                console.table(res);
                init();
            });
        });
}

// add new employee 
function addEmployee() {

}
  
// add department  
function addDepartment() {
    
}

// add role 
function addRole() {
    
}