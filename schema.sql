CREATE DATABASE IF NOT EXISTS employees;

USE employees;

CREATE TABLE IF NOT EXISTS department (
	id INT NOT NULL AUTO_INCREMENT,
    department VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS role (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE IF NOT EXISTS employee (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

INSERT INTO department (department)
VALUES 
("Coach"),
("Scorer"),
("Role-Player"),
("All-around");

INSERT INTO role (title, salary, department_id)
VALUES
("Offensive Coach, 600000, 1"),
("Defensive Coach, 500000, 1"),
("Small Forward, 300000, 2"),
("Point Guard, 400000, 2"),
("Sixth Man, 100000, 3"),
("Seventh Man, 50000, 3"),
("Shoot First, 10000000, 4"),
("Dribble Finishing, 10000000, 4");

INSERT INTO employee (first_name, last_name, role_id)
VALUES
("Steve", "Kerr", 1),
("Doc", "Rivers", 2),
("Kevin", "Durant", 3),
("Stephen", "Curry", 4),
("J.R", "Smith", 5),
("Jamal", "Crawford", 6),
("Kyrie", "Irving", 7),
("Lebron", "James", 8);
