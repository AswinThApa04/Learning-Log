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

