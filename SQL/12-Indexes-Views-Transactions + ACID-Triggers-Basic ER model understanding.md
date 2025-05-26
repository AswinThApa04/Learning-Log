#  Additional SQL Topics

---

## 🧭 1. Indexes

### ✅ What is an Index?
An **index** is a data structure that improves the speed of data retrieval operations on a table at the cost of additional space and slower insert/update/delete.

### 🧠 Key Points:
- Similar to an index in a book: helps find rows faster
- Automatically created on primary keys
- Can be created on any column

### 📌 Syntax:
```sql
-- Create index
CREATE INDEX idx_student_name ON student(name);

-- Drop index
DROP INDEX idx_student_name ON student;
```
⚠️ When not to use:
- On small tables

- On columns with lots of duplicate values

- On columns frequently updated

## 👁️ 2. Views
### ✅ What is a View?
A view is a virtual table based on a SQL query. It doesn't store data physically but acts as a layer of abstraction.
```sql
-- Create view
CREATE VIEW student_view AS
SELECT name, marks FROM student WHERE grade = 'A';

-- Use view
SELECT * FROM student_view;

-- Drop view
DROP VIEW student_view;
```
### 🧠 Why Use Views?
- To simplify complex queries

- To restrict access to certain columns

- To provide a customized representation of data

## 🌀 3. Stored Procedures & Functions (Intro Only)
### ✅ Stored Procedure
A stored procedure is a group of SQL statements stored in the database and executed as a unit.
```sql
DELIMITER //
CREATE PROCEDURE GetAllStudents()
BEGIN
    SELECT * FROM student;
END //
DELIMITER ;
```
### ✅ SQL Function (returns a value)
```sql
DELIMITER //
CREATE FUNCTION getGrade(marks INT)
RETURNS VARCHAR(1)
BEGIN
    DECLARE g VARCHAR(1);
    IF marks >= 90 THEN SET g = 'A';
    ELSEIF marks >= 75 THEN SET g = 'B';
    ELSE SET g = 'C';
    END IF;
    RETURN g;
END //
DELIMITER ;
```
## 🧲 4. Triggers
### ✅ What is a Trigger?
A trigger is a block of code that automatically executes in response to events like INSERT, UPDATE, or DELETE.

### 📌 Example:
```sql
CREATE TRIGGER logInsert
AFTER INSERT ON student
FOR EACH ROW
BEGIN
    INSERT INTO log_table (msg) VALUES (CONCAT('New student added: ', NEW.name));
END;
```
Triggers are useful for:

- Logging actions

- Enforcing complex business rules

- Auditing

## 🔁 5. Transactions & ACID
### ✅ What is a Transaction?
A transaction is a sequence of operations performed as a single logical unit of work.

- Begins with: BEGIN or implicit action

- Ends with: COMMIT or ROLLBACK

### 📌 Example:
```sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 1000 WHERE id = 1;
UPDATE accounts SET balance = balance + 1000 WHERE id = 2;
COMMIT;
```
If something fails: use ROLLBACK to undo changes.

### ✅ ACID Properties
| Property        | Description                                     |
| --------------- | ----------------------------------------------- |
| **A**tomicity   | All operations in a transaction succeed or none |
| **C**onsistency | Data remains valid before and after transaction |
| **I**solation   | Transactions don’t interfere with each other    |
| **D**urability  | Once committed, changes are permanent           |

## 🧩 6. ER Model (Entity-Relationship Model)
### ✅ Relationships in Databases
| Type | Example             |
| ---- | ------------------- |
| 1:1  | Person ↔️ Passport  |
| 1\:M | Teacher → Students  |
| M\:N | Students ↔️ Courses |

## ✅ Cardinality:
Defines how many entities in one table relate to another.

### 🔄 Converting to Tables:
- M:N requires a junction table
```sql
-- M:N relationship
CREATE TABLE student_course (
    student_id INT,
    course_id INT,
    PRIMARY KEY(student_id, course_id),
    FOREIGN KEY(student_id) REFERENCES student(id),
    FOREIGN KEY(course_id) REFERENCES course(id)
);
```

