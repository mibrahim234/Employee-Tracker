INSERT INTO department (department)
VALUES 
("Coach"),
("Scorer"),
("Role-Player"),
("All-around");

INSERT INTO role (title, salary, department_id)
VALUES
("Offensive Coach", 600000, 1),
("Defensive Coach", 500000, 1),
("Small Forward", 30000, 2),
("Point Guard", 400000, 2),
("Sixth Man", 100000, 3),
("Seventh Man", 50000, 3),
("Shoot First", 1000000, 4),
("Dribble Finishing", 1000000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Steve", "Kerr", 1, null),
("Doc", "Rivers", 2, 1),
("Kevin", "Durant", 3, 2),
("Stephen", "Curry", 4, 3),
("J.R", "Smith", 5, 4),
("Jamal", "Crawford", 6, 5),
("Kyrie", "Irving", 7, 6),
("Lebron", "James", 8, 7);
