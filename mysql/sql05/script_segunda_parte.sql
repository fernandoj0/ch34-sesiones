
-- Write a SQL query that allows you to find all the Countries which name starts with 'Ca'.

CALL obtener_estudiantes_por_pais("Colombia");

-- Write a SQL query that allows you to find all the students in a given country.
    SELECT students.name,
			students.last_name,
			countries.name
	FROM students 
	INNER JOIN countries 
	ON students.nationality = countries.idCountries
	WHERE countries.Name LIKE 'Ca%';
    
-- Count all the students that are enrolled in the course 'JAVA-1'.

SELECT count(students.name)
FROM students
INNER JOIN courses_has_students
ON students.idStudent = courses_has_students.students_id_student
WHERE courses_has_students.course_code = "JAVA-1";

-- Calculate the *SUM* of the credits of all the courses that have the word 'JAVA' in the name. 

SELECT *
FROM courses
WHERE name LIKE "%JAVA%" AND name NOT LIKE "%JavaScript%" ;

SELECT sum(courses.credits)
FROM courses
WHERE name LIKE "%JAVA%" AND name NOT LIKE "%JavaScript%";

 -- Write a Query that allows you to count all the students that are enrolled in a given module.
 -- *Hint*: You need to count all the students enrolled in all the courses of the module.

SELECT students.name,
		courses.module_code
FROM students
INNER JOIN courses_has_students
ON students.idStudent = courses_has_students.students_id_student
INNER JOIN courses
ON courses_has_students.course_code = courses.code
WHERE courses.module_code = "JS";

SELECT count(students.name)
FROM students
INNER JOIN courses_has_students
ON students.idStudent = courses_has_students.students_id_student
INNER JOIN courses
ON courses_has_students.course_code = courses.code
WHERE courses.module_code = "JS";


 
 
