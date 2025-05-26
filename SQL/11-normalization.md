# 11 - SQL Normalization (In-Depth)

---

## 🔍 What is Normalization?

**Normalization** is the process of organizing data in a database to minimize redundancy and ensure data integrity. It helps reduce data anomalies and makes the database more efficient.

---

## 🎯 Goals of Normalization

- Remove duplicate data
- Reduce data redundancy
- Improve data consistency
- Simplify maintenance
- Make relationships clear between entities

---

## 🧱 Types of Normal Forms

---

### ✅ 1NF – First Normal Form

**Rule:**  
- Each column must contain atomic (indivisible) values  
- No repeating groups or arrays

**Example (Not 1NF):**
| StudentID | Name    | Subjects        |
|-----------|---------|-----------------|
| 1         | Aswin   | Math, Science    |

**Convert to 1NF:**
| StudentID | Name    | Subject   |
|-----------|---------|-----------|
| 1         | Aswin   | Math      |
| 1         | Aswin   | Science   |

---

### ✅ 2NF – Second Normal Form

**Rule:**  
- Must be in 1NF  
- No partial dependency (i.e., non-prime attribute must depend on the whole primary key)

**Example (Not 2NF):**
Composite key: (`StudentID`, `Subject`)
| StudentID | Subject   | StudentName |
|-----------|-----------|-------------|
| 1         | Math      | Aswin       |

> `StudentName` depends only on `StudentID` → partial dependency

**Convert to 2NF:**
- Split into two tables:
  - `Students(StudentID, StudentName)`
  - `Enrollments(StudentID, Subject)`

---

### ✅ 3NF – Third Normal Form

**Rule:**  
- Must be in 2NF  
- No transitive dependency (non-prime attribute should not depend on another non-prime attribute)

**Example (Not 3NF):**
| StudentID | Name    | DeptID | DeptName |
|-----------|---------|--------|----------|
| 1         | Aswin   | D1     | CS       |

> `DeptName` depends on `DeptID`, not `StudentID` → transitive dependency

**Convert to 3NF:**
- `Students(StudentID, Name, DeptID)`
- `Departments(DeptID, DeptName)`

---

### ✅ BCNF – Boyce-Codd Normal Form

**Rule:**  
- Stronger version of 3NF  
- Every determinant must be a candidate key

**Example (Not BCNF):**
| Professor | Subject | Department |
|-----------|---------|------------|
| A         | Math    | Science    |

> If a professor can teach only one subject, but multiple professors can teach the same subject, this may violate BCNF.

**Fix:** Decompose the table based on dependencies to ensure every determinant is a candidate key.

---

### ✅ 4NF – Fourth Normal Form

**Rule:**  
- Must be in BCNF  
- No multi-valued dependencies

**Example (Not 4NF):**
| Student | Hobby     | Language  |
|---------|-----------|-----------|
| Aswin   | Reading   | English   |
| Aswin   | Painting  | Hindi     |

> Two independent multi-valued facts: Hobby and Language

**Fix:** Separate into:
- `StudentHobbies(Student, Hobby)`
- `StudentLanguages(Student, Language)`

---

### ✅ 5NF – Fifth Normal Form (Projection Join Normal Form)

**Rule:**  
- Must be in 4NF  
- Should not have join dependency anomalies

**Applied rarely** and mostly in very complex databases where lossless decomposition into smaller relations is needed.

---

## 🧠 Summary Table

| Normal Form | Key Rule                                           |
|-------------|----------------------------------------------------|
| 1NF         | Atomic values, no repeating groups                 |
| 2NF         | No partial dependency                              |
| 3NF         | No transitive dependency                           |
| BCNF        | Every determinant is a candidate key               |
| 4NF         | No multi-valued dependency                         |
| 5NF         | No join dependency anomalies                       |

---

## 💡 Real-World Tip
In most practical use cases, **3NF or BCNF** is sufficient for a well-designed relational database.

