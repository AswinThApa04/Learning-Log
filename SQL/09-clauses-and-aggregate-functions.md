# Clauses and Aggregate Functions

## Clauses
### WHERE
```sql
SELECT * FROM student WHERE marks > 80;
```

### LIMIT
```sql
SELECT * FROM student LIMIT 3;
```

### ORDER BY
```sql
SELECT * FROM student ORDER BY marks DESC;
```

### GROUP BY
```sql
SELECT grade, COUNT(*) FROM student GROUP BY grade;
```

### HAVING
```sql
SELECT grade, AVG(marks) FROM student GROUP BY grade HAVING AVG(marks) > 80;
```

## Operators
- Arithmetic: `+`, `-`, `*`, `/`
- Comparison: `=`, `!=`, `<`, `>`, `<=`, `>=`
- Logical: `AND`, `OR`, `NOT`
- Bitwise: `|`, `&`, `<<`, `>>`

## Aggregate Functions
```sql
SELECT COUNT(*) FROM student;
SELECT AVG(marks) FROM student;
SELECT MAX(marks), MIN(marks) FROM student;
```

## UPDATE and DELETE
```sql
UPDATE student SET city = 'Mumbai' WHERE name = 'Anil';
DELETE FROM student WHERE rollno = 106;
```

## WHERE vs HAVING
- **WHERE** filters rows **before** grouping.
- **HAVING** filters groups **after** aggregation.

## College Database Example
```sql
CREATE DATABASE college;
USE college;
CREATE TABLE student (
    rollno INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(50),
    marks INT NOT NULL,
    grade VARCHAR(1)
);
INSERT INTO student (rollno, name, marks, city, grade) VALUES
(101, "Anil", 78, "pune", "C"),
(102, "Bikash", 93, "Ahmedabad", "A"),
(103, "Chad", 86, "Delhi", "A"),
(104, "Deepak", 91, "Jharkhand", "A"),
(105, "Eric", 83, "Nagaland", "B"),
(106, "Farhan", 45, "Bihar", "D");
```
