-- Query all columns (fields) for every row in the CITY table.
SELECT * FROM CITY;

-- Display the fields of all the cities in the USA with a population greater than 100,000.
SELECT * FROM CITY WHERE COUNTRYCODE = 'USA' AND POPULATION > 100000;

-- Display the names entry of all the cities in the USA with a population greater than 120,000.
SELECT NAME FROM CITY WHERE COUNTRYCODE = 'USA' AND POPULATION > 120000;

-- Display all the cities with exact ID of 1661.
SELECT * FROM CITY WHERE ID = 1661;

-- Display all the fields in CITY table in the JPN country.
SELECT * FROM CITY WHERE COUNTRYCODE = 'JPN';

-- (DB2) Display the names (using c alias of CITY table) of all the cities in the JPN country.
SELECT c.NAME FROM CITY c WHERE COUNTRYCODE = 'JPN';

-- Display the names of all the cities and state columns in the STATION table.
SELECT CITY, STATE FROM STATION;

-- Display distinct city names from the STATION table with even ID values and order city in ascending order.
SELECT DISTINCT CITY FROM STATION WHERE MOD(ID, 2) = 0 ORDER BY CITY ASC;