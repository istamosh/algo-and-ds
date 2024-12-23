-- Query all columns (fields) for every row in the CITY table.
SELECT * FROM CITY;

-- Display all columns for cities in the USA with a population greater than 100,000.
SELECT * FROM CITY WHERE COUNTRYCODE = 'USA' AND POPULATION > 100000;

-- Display the names of all cities in the USA with a population greater than 120,000.
SELECT NAME FROM CITY WHERE COUNTRYCODE = 'USA' AND POPULATION > 120000;

-- Display all columns for the city with an exact ID of 1661.
SELECT * FROM CITY WHERE ID = 1661;

-- Display all columns for cities in the JPN country.
SELECT * FROM CITY WHERE COUNTRYCODE = 'JPN';

-- Display the names of all cities in the JPN country using an alias for the CITY table.
SELECT c.NAME FROM CITY c WHERE COUNTRYCODE = 'JPN';

-- Display the names of all cities and their states from the STATION table.
SELECT CITY, STATE FROM STATION;

-- Display distinct city names from the STATION table with even ID values, ordered in ascending order.
SELECT DISTINCT CITY FROM STATION WHERE MOD(ID, 2) = 0 ORDER BY CITY ASC;

-- Display the difference between the total number of cities and the number of distinct cities in the STATION table.
SELECT (COUNT(CITY)-COUNT(DISTINCT CITY)) FROM STATION;

-- Display the city with the shortest name length and the city with the longest name length from the STATION table and order by alphabet.
SELECT CITY, CHAR_LENGTH(CITY) FROM STATION WHERE CHAR_LENGTH(CITY) = (SELECT MIN(CHAR_LENGTH(CITY)) FROM STATION) ORDER BY CITY ASC LIMIT 1;
SELECT CITY, CHAR_LENGTH(CITY) FROM STATION WHERE CHAR_LENGTH(CITY) = (SELECT MAX(CHAR_LENGTH(CITY)) FROM STATION) ORDER BY CITY ASC LIMIT 1;