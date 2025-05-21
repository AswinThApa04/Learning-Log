```markdown
# SELECT Command in Detail
CREATE DATABASE XYZ;
USE XYZ;
CREATE TABLE info(
	id int PRIMARY KEY,
    name VARCHAR(50),
    salary INT NOT NULL
);
INSERT into info(id,name,salary)
values
(1,"ADAM",25000),
(2,"BOB",32000),
(020,"aswin",25000);
SELECT * FROM info;
SELECT DISTINCT id FROM info;
SELECT id,name FROM info;
- Filtering, Aliasing, Sorting to be added later
