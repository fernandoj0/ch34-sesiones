 SELECT Students.*, 
	Countries.name country, 
	idtypes.name AS  "Nombre de tipo de ID",
    course_code
 FROM Students 
 INNER JOIN Countries
 ON Students.nationality = Countries.idCountries
 INNER JOIN idtypes
 ON Students.idType_id = idtypes.id_idTypes
 INNER JOIN courses_has_students
 ON Students.idStudent = courses_has_students.students_id_student ;
  

/* 4. Write a SQL query to join the CourseHasStudent table with
 the Courses table to get the name of the course information with 
 the student ID of students enrolled in the course.*/
 
SELECT 
courses_has_students.course_code,
courses_has_students.students_id_student,
courses.name
FROM courses_has_students
INNER JOIN courses
ON courses_has_students.course_code = courses.code;

/*
5. Now that you have the two queries, use an INNER JOIN to combine the results of the 
queries (this is called nested queries, and will allow you to 
combine SQL queries to order the data the way you like).
*/

 SELECT Students.*, 
	Countries.name country, 
	idtypes.name AS  "Nombre de tipo de ID",
    courses_has_students.course_code,
    courses.name
 FROM Students 
 INNER JOIN Countries
 ON Students.nationality = Countries.idCountries
 INNER JOIN idtypes
 ON Students.idType_id = idtypes.id_idTypes
 INNER JOIN courses_has_students
 ON Students.idStudent = courses_has_students.students_id_student
 INNER JOIN courses
 ON courses_has_students.course_code  = courses.code;

