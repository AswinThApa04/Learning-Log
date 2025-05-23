# Advanced SQL Topics

## 🧩 Cascading Foreign Keys

### ON DELETE CASCADE
Deletes the child rows automatically when the parent row is deleted.

```sql
CREATE TABLE student (
  id INT PRIMARY KEY
);

CREATE TABLE marks (
  id INT,
  FOREIGN KEY (id) REFERENCES student(id)
  ON DELETE CASCADE
);
```
### ON UPDATE CASCADE
Updates the child rows automatically when the referenced parent row is updated.
```sql
CREATE TABLE marks (
  id INT,
  FOREIGN KEY (id) REFERENCES student(id)
  ON UPDATE CASCADE
);
```
## ALTER, ADD, DROP, RENAME, CHANGE, MODIFY, TRUNCATE
### ADD Column:
```sql
ALTER TABLE students ADD COLUMN age INT;
```
### DROP Column:
```sql
ALTER TABLE students DROP COLUMN age;
RENAME Table:
```

### RENAME Table
```sql
ALTER TABLE students RENAME TO student_data;
```

### MODIFY Column (change datatype/constraint)
```sql
ALTER TABLE students MODIFY name VARCHAR(100);
```

### CHANGE Column (rename + change datatype):
```sql
ALTER TABLE students CHANGE name full_name VARCHAR(100);
```
### TRUNCATE Table
```sql
TRUNCATE TABLE students;
```

## 🔗 Joins in SQL
### 1. INNER JOIN
Returns only matching records from both tables.
```sql
SELECT s.name, c.course_name
FROM student s
INNER JOIN course c ON s.student_id = c.student_id;
```

### 2. LEFT JOIN
Returns all rows from the left table and matched rows from the right.
```sql
SELECT s.name, c.course_name
FROM student s
LEFT JOIN course c ON s.student_id = c.student_id;
```

### 3. RIGHT JOIN
Returns all rows from the right table and matched rows from the left.
```sql
SELECT s.name, c.course_name
FROM student s
RIGHT JOIN course c ON s.student_id = c.student_id;
```

### 4. FULL JOIN (Emulated in MySQL using UNION)
```sql
SELECT * FROM student s
LEFT JOIN course c ON s.student_id = c.student_id
UNION
SELECT * FROM student s
RIGHT JOIN course c ON s.student_id = c.student_id;
```

### 5.SELF JOIN
```sql
SELECT e1.name AS Employee, e2.name AS Manager
FROM employees e1
JOIN employees e2 ON e1.manager_id = e2.id;
```

## 🔄 UNION in SQL
UNION (removes duplicates)
```sql
SELECT name FROM students
UNION
SELECT name FROM teachers;
```
UNION ALL (keeps duplicates)
```sql
SELECT name FROM students
UNION ALL
SELECT name FROM teachers;
```

## 🌀 SQL Subqueries
### Example 1: Basic Subquery
```sql
SELECT name FROM students
WHERE marks > (SELECT AVG(marks) FROM students);
```

### Example 2: Subquery with FROM
```sql
SELECT MAX(marks) FROM (
  SELECT * FROM students WHERE city = 'Delhi'
) AS delhi_students;
```
### Example 3: Subquery with IN
```sql
SELECT name FROM students
WHERE rollno IN (
  SELECT rollno FROM students WHERE rollno % 2 = 0
);
```

