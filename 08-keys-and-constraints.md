# Keys and Constraints

## Keys
- **Primary Key**: Uniquely identifies a record
- **Foreign Key**: Links two tables

## Constraints
- `NOT NULL`
- `UNIQUE`
- `PRIMARY KEY`
- `FOREIGN KEY`
- `DEFAULT`
- `CHECK`

## Example
```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
