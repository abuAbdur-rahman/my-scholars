To work effectively with your database table, `lectures`, here are the most common and basic SQL queries you should know:

### 1. **Inserting Data**
To add new data to the `lectures` table, use the `INSERT INTO` statement:
```sql
INSERT INTO lectures (lecturer_name, lecture_title, audio_url, date_uploaded, description, duration, tags, category)
VALUES ('Dr. John Smith', 'Introduction to SQL', 'http://example.com/audio1.mp3', '2024-11-17', 'An introductory lecture on SQL basics', '01:30:00', 'SQL, Database, Intro', 'Education');
```

### 2. **Selecting Data**
To retrieve data, use the `SELECT` statement:
```sql
-- Select all columns from the lectures table
SELECT * FROM lectures;

-- Select specific columns
SELECT lecturer_name, lecture_title, date_uploaded FROM lectures;
```

### 3. **Filtering Data**
To filter data, use the `WHERE` clause:
```sql
-- Get all lectures by a specific lecturer
SELECT * FROM lectures WHERE lecturer_name = 'Dr. John Smith';

-- Get all lectures uploaded after a specific date
SELECT * FROM lectures WHERE date_uploaded > '2024-01-01';
```

### 4. **Sorting Data**
To sort the results, use the `ORDER BY` clause:
```sql
-- Order lectures by the date uploaded in descending order
SELECT * FROM lectures ORDER BY date_uploaded DESC;

-- Order by lecture duration in ascending order
SELECT * FROM lectures ORDER BY duration ASC;
```

### 5. **Updating Data**
To update existing records, use the `UPDATE` statement:
```sql
-- Update the description of a specific lecture
UPDATE lectures
SET description = 'An updated description for the SQL basics lecture'
WHERE id = 'some-uuid-value';
```

### 6. **Deleting Data**
To delete data from the table, use the `DELETE` statement:
```sql
-- Delete a lecture by its unique ID
DELETE FROM lectures WHERE id = 'some-uuid-value';

-- Delete all lectures by a specific lecturer
DELETE FROM lectures WHERE lecturer_name = 'Dr. John Smith';
```

### 7. **Counting Records**
To count the number of records, use the `COUNT` function:
```sql
-- Count the total number of lectures
SELECT COUNT(*) FROM lectures;

-- Count lectures with a specific tag
SELECT COUNT(*) FROM lectures WHERE tags LIKE '%SQL%';
```

### 8. **Grouping Data**
To group data, use the `GROUP BY` clause along with aggregate functions like `COUNT`, `SUM`, or `AVG`:
```sql
-- Count the number of lectures per category
SELECT category, COUNT(*)
FROM lectures
GROUP BY category;

-- Get the total number of lectures uploaded by each lecturer
SELECT lecturer_name, COUNT(*)
FROM lectures
GROUP BY lecturer_name;
```

### 9. **Using `LIKE` for Pattern Matching**
To search for patterns within text columns, use the `LIKE` operator:
```sql
-- Find all lectures with titles containing the word 'SQL'
SELECT * FROM lectures WHERE lecture_title LIKE '%SQL%';

-- Find all lectures tagged with 'Database'
SELECT * FROM lectures WHERE tags LIKE '%Database%';
```

### 10. **Checking for Null Values**
To check for `NULL` values, use `IS NULL` or `IS NOT NULL`:
```sql
-- Find all lectures without a description
SELECT * FROM lectures WHERE description IS NULL;

-- Find all lectures with a set duration
SELECT * FROM lectures WHERE duration IS NOT NULL;
```

### 11. **Joining Tables**
If you have more than one table and need to join them, use `JOIN`:
```sql
-- Example: Joining lectures with another table called 'categories'
SELECT lectures.lecture_title, categories.category_name
FROM lectures
JOIN categories ON lectures.category = categories.id;
```

### 12. **Common Date Functions**
SQL has several functions for handling dates:
```sql
-- Get lectures uploaded within the last 30 days
SELECT * FROM lectures WHERE date_uploaded >= NOW() - INTERVAL '30 days';

-- Extract the year from the date_uploaded
SELECT lecture_title, EXTRACT(YEAR FROM date_uploaded) AS year_uploaded
FROM lectures;
```

### Summary
These SQL queries cover the foundational operations needed to work with your `lectures` table effectively. By mastering these, you can efficiently manage and retrieve data as needed.

To work effectively with your database table, `lectures`, here are the most common and basic SQL queries you should know:

### 1. **Inserting Data**

To add new data to the `lectures` table, use the `INSERT INTO` statement:

```sql
INSERT INTO lectures (lecturer_name, lecture_title, audio_url, date_uploaded, description, duration, tags, category)
VALUES ('Dr. John Smith', 'Introduction to SQL', 'http://example.com/audio1.mp3', '2024-11-17', 'An introductory lecture on SQL basics', '01:30:00', 'SQL, Database, Intro', 'Education');
```

### 2. **Selecting Data**

To retrieve data, use the `SELECT` statement:

```sql
-- Select all columns from the lectures table
SELECT * FROM lectures;

-- Select specific columns
SELECT lecturer_name, lecture_title, date_uploaded FROM lectures;
```

### 3. **Filtering Data**

To filter data, use the `WHERE` clause:

```sql
-- Get all lectures by a specific lecturer
SELECT * FROM lectures WHERE lecturer_name = 'Dr. John Smith';

-- Get all lectures uploaded after a specific date
SELECT * FROM lectures WHERE date_uploaded > '2024-01-01';
```

### 4. **Sorting Data**

To sort the results, use the `ORDER BY` clause:

```sql
-- Order lectures by the date uploaded in descending order
SELECT * FROM lectures ORDER BY date_uploaded DESC;

-- Order by lecture duration in ascending order
SELECT * FROM lectures ORDER BY duration ASC;
```

### 5. **Updating Data**

To update existing records, use the `UPDATE` statement:

```sql
-- Update the description of a specific lecture
UPDATE lectures
SET description = 'An updated description for the SQL basics lecture'
WHERE id = 'some-uuid-value';
```

### 6. **Deleting Data**

To delete data from the table, use the `DELETE` statement:

```sql
-- Delete a lecture by its unique ID
DELETE FROM lectures WHERE id = 'some-uuid-value';

-- Delete all lectures by a specific lecturer
DELETE FROM lectures WHERE lecturer_name = 'Dr. John Smith';
```

### 7. **Counting Records**

To count the number of records, use the `COUNT` function:

```sql
-- Count the total number of lectures
SELECT COUNT(*) FROM lectures;

-- Count lectures with a specific tag
SELECT COUNT(*) FROM lectures WHERE tags LIKE '%SQL%';
```

### 8. **Grouping Data**

To group data, use the `GROUP BY` clause along with aggregate functions like `COUNT`, `SUM`, or `AVG`:

```sql
-- Count the number of lectures per category
SELECT category, COUNT(*)
FROM lectures
GROUP BY category;

-- Get the total number of lectures uploaded by each lecturer
SELECT lecturer_name, COUNT(*)
FROM lectures
GROUP BY lecturer_name;
```

### 9. **Using ****`LIKE`**** for Pattern Matching**

To search for patterns within text columns, use the `LIKE` operator:

```sql
-- Find all lectures with titles containing the word 'SQL'
SELECT * FROM lectures WHERE lecture_title LIKE '%SQL%';

-- Find all lectures tagged with 'Database'
SELECT * FROM lectures WHERE tags LIKE '%Database%';
```

### 10. **Checking for Null Values**

To check for `NULL` values, use `IS NULL` or `IS NOT NULL`:

```sql
-- Find all lectures without a description
SELECT * FROM lectures WHERE description IS NULL;

-- Find all lectures with a set duration
SELECT * FROM lectures WHERE duration IS NOT NULL;
```

### 11. **Joining Tables**

If you have more than one table and need to join them, use `JOIN`:

```sql
-- Example: Joining lectures with a table called 'lecturers' for more details
SELECT l.lecture_title, lec.name, lec.department
FROM lectures l
JOIN lecturers lec ON l.lecturer_name = lec.name;
```

### 12. **Advanced Queries**

Here are more complex SQL queries that can provide deeper insights:

#### a. **Subqueries**

A subquery is a query within another query:

```sql
-- Find lectures uploaded by lecturers who have more than 5 lectures
SELECT * FROM lectures
WHERE lecturer_name IN (
    SELECT lecturer_name
    FROM lectures
    GROUP BY lecturer_name
    HAVING COUNT(*) > 5
);
```

#### b. **Common Table Expressions (CTEs)**

CTEs make complex queries easier to read and manage:

```sql
-- Using a CTE to find the average duration of lectures per category
WITH AvgDuration AS (
    SELECT category, AVG(duration) AS avg_duration
    FROM lectures
    GROUP BY category
)
SELECT * FROM AvgDuration
WHERE avg_duration > '01:00:00';
```

#### c. **Window Functions**

Window functions perform calculations across a set of rows related to the current row:

```sql
-- Rank lectures by their upload date
SELECT lecture_title, date_uploaded,
       RANK() OVER (ORDER BY date_uploaded DESC) AS rank
FROM lectures;

-- Get the cumulative count of lectures uploaded by each lecturer
SELECT lecturer_name, lecture_title, date_uploaded,
       COUNT(*) OVER (PARTITION BY lecturer_name ORDER BY date_uploaded) AS cumulative_count
FROM lectures;
```

#### d. **Full-Text Search**

To perform a more flexible text search:

```sql
-- Search for lectures with advanced text search capabilities (requires database support for full-text search)
SELECT * FROM lectures
WHERE to_tsvector(lecture_title || ' ' || description) @@ to_tsquery('SQL & basics');
```

#### e. **JSON Data Handling**

If you have JSON data stored in columns:

```sql
-- Extract a specific value from a JSON field (assuming 'tags' is JSON formatted)
SELECT lecture_title, tags::json->>'key' AS specific_tag
FROM lectures;
```

Let me know if you need further examples or more details on any of these advanced queries!

More

