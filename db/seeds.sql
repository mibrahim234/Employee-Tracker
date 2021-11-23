INSERT INTO departments (name)
VALUES
  ('Engineering'),
  ('Sales'),
  ('Legal'),
  ('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES
("Sales Lead", 100000, 1),
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer",190000, 4),
("Lead Engineer", 150000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Monkey", "Luffy", 1, 1),
("Roronoa", "Zoro", 2, 2),
("Blackleg", "Sanji", 3, 3),
("Burglar", "Nami", 4, NULL),
("Longnose", "Usopp", 5, 1),
("Tony", "Chopper", 6, NULL),
("Nico", "Robin", 7, 2),
("Franky", "Robot", 8, 3),
("Brook", "Skeleton", 9, NULL),
("Jimbei", "Fishman", 1, 4),
