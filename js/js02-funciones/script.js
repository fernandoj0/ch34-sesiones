console.log("Sesion JS02 funciones ");



// ---------------- Funcion declarada, funcion definidas ---------------
// funcion declaration, function statement
// Una de las caracteristica de las funciones declaradas es que tienen hosting pueden ser llamadas antes de su declaracion


multiplica(5,3); // 15

/**
 * Multiplica dos números e imprime en consola
 * @param {number} a valor de multplicando 
 * @param {number} b valor de multiplicador
 * 
 */
function multiplica( a,b ){
    const resultado = a*b;
    console.log(resultado);
}

function divide(dividendo,divisor) {
    return dividendo/divisor;
}

console.log( divide(5,2) );  // 2.5
console.log( divide(5,"2") );  // 2.5
console.log( divide("5","2") );  // 2.5
console.log( divide("5 0","2") );  // NaN


// ---------------- Funcion expresadas ---------------
// ( function expressions )
/*
Funciones que son declaradas dentro de la asignacion de una variable

Estas funciones pueden ser anónimas (no tienen nombre)

Las functiones expresadaas no tienen histing, porque no se carga en memoria hasta que se utilice
*/

// console.log( sum(6, 20)); // error cannot access sum before initialization

const sum = function (a,b) {
    return a + b;
};

console.log( sum(6, 20)); // 26

const potencia = function( base,exponente ) {
    return base**exponente;
}

console.log(potencia(2,3)); // 8;


// ----------------- Funcion autoinvocadas ----------
// (self-invoking functions)
// se autoinvocan, no necesitan un llamado

( function setUp(){
    console.log("Me autoinvoco");
    console.log("Puedo servirte como inicializador de tu programa");
})();

// --------------- Funcion flecha ------------
//  ( arrow functions )
/*
Son similares a las funciones expresadas pero:

- no requieren la palabra function
- si tiene una sola instruccion no requiere llaves
- si la instruccion es el mismo retorno no requiere la palabra return  

*/

// Area rectangulo con funcion expresada


const areaRectangulo = function(length, width) {       
    return length*width;
}

console.log(areaRectangulo(10,6));

const areaRectanguloArrowFunction = (length, width) => length*width;

console.log(areaRectanguloArrowFunction(3,2));


const saludo = persona => `Hola ${persona}`;
const ellaBailaSola = () => `Compa que le parece esa chica?`;

console.log(saludo("Peso pluma"));


// ---------------- Parámetros default -------------

const saludoGeneration = ( persona = "persona", cohorte= "cohorte Mx") => 
`Hola ${persona}, que gusto que estés en la ${cohorte}`;

console.log( saludoGeneration("Joseph", "Ch-34") );
console.log( saludoGeneration() );  // Hola persona, que gusto que estés en la cohorte Mx
console.log( saludoGeneration("Chino") );  // Hola Chino, que gusto que estés en la cohorte Mx

// ---------------- Rest Parameters -------------
/*
Nos permite representar una serie de valores indefinidos
en los argumentos.
Estos se presentan como un array.
El rest parameter debe estar al final de la lista de parámetros.

*/

const sumatoriaVariosNumeros = ( a , b , ...manyMoreArgs) => {
let suma = a + b;  

/*   for (let index = 0; index < manyMoreArgs.length; index++) {
suma = suma + manyMoreArgs[index]; // suma += mamanyMoreArgs[index];
} */

suma += manyMoreArgs.reduce(  (accumulator, currentValue)=> accumulator+currentValue, 0 );

return suma;
}

console.log( `Sumatoria de 2 números 4 + 6 = ${ sumatoriaVariosNumeros(4,6)}` ); // 10
console.log( `Sumatoria de 4 números 4 + 6 + 5 + 7 = ${ sumatoriaVariosNumeros(4,6,5,7)}` ); // 22

// ---------------- Funciones de callback -------------
/*
Función que se pasa a otra función como argumento, para
luego invocarla para complementar algún tipo de rutina o acción.

*/

/*
// Función que obtenga un mensaje e imprima en consola.
function getMessageAndPrint( option = "console" ){
    const message = getUserMessage();
    if ( option === "console" ) {
        printToConsole( message );
    } else {
        printToAlert( message ); 
    }
}
  
const getUserMessage = () => `Martes de frescura`;

getMessageAndPrint("alert");

// podemos seguir agregando opciones y con ello ifs pero la solucion seran las funciones callback 

*/


// para las funciones callback solo se debe enviar la funcion como argumento. Si llevan parentesis seria el retorno de la funcion.


/*
Realizar 3 funciones.
1 función que reciba un mensaje e imprima en consola
1 función que reciba un mensaje e imprima en alert
1 función que reciba un mensaje e imprima en el DOM, en H2
*/

const printToConsole = message => console.log(message);

const printToAlert = message => alert(message);

const printToH2 = message => {
const refH2 = getH2Message();
    refH2.innerHTML = message;
};

const getH2Message = ()=> document.getElementById("message");

// Función que obtenga un mensaje e imprima en consola o alert o DOM o lo que se me ocurra.
function getMessageAndPrint( fncPrint  ){
const message = getUserMessage();
fncPrint( message );
}

const getUserMessage = () => `Martes de frescura`;

getMessageAndPrint( printToConsole );
// getMessageAndPrint( printToAlert );
getMessageAndPrint( printToH2 );

// Imprimir en el DOM en un paragraph
getMessageAndPrint( function( message){ 
document.getElementById("p-message").innerHTML = message;
});

getMessageAndPrint( message => document.getElementById("p-message2").innerHTML = message );

// -------------------------------------------------------------------
/*
Ejercicio 2
Escribe una función que tome un arreglo de números,
duplique el valor de cada número del arreglo,
e imprima el nuevo arreglo actualizado.
[5, 10, 15, 20, 25] -> [10, 20, 30, 40, 50]
*/

const double = (array) => {
const doubleNumbers = [];
for (let index = 0; index < array.length; index++) {
doubleNumbers.push( array[index] * 2 );
}
return doubleNumbers;  
}
const numbers = [5, 10, 15, 20, 25];
console.log( double( numbers) ); // [10, 20, 30, 40, 50]

// Usando callback con map
const fncCallBackforMap = (element, index, array) => element * 2;

const dobleUsingMap = (array) => array.map( fncCallBackforMap );

//[5, 10, 15, 20, 25];

console.log( dobleUsingMap( numbers) ); // [10, 20, 30, 40, 50]

const doubleUsingMapAndArrowFunction = (array) => array.map( element => element * 2 );
console.log( doubleUsingMapAndArrowFunction(numbers) ); // [10, 20, 30, 40, 50]

/*
Ejercicio 4
Crear un programa que itere sobre dos arreglos;
si hay cursos en común, imprimirlos en la consola.

salida: "Cursos en común: Programming, Music"
*/

const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];
const student3Courses = ["Math", "Music"];

const cursosEnComun = ( student1Courses, student2Courses  ) => {
    const commonCourses = [];
    for (let i = 0; i < student1Courses.length; i++) {
        for (let j = 0; j < student2Courses.length; j++) {
            if(student1Courses[i] === student2Courses[j]){
            commonCourses.push( student1Courses[i] );
            }
        }
    }
    return commonCourses;
}


console.log(`Cursos en común: ${cursosEnComun(student1Courses, student2Courses)}`)

// Resolviendo el ejercicio usando el metodo filter() y el metodo includes()

const commonCoursesUsingFilter = ( student1Courses, student2Courses) => 
          student1Courses.filter( (course,i,arr) => student2Courses.includes( course ));

console.log(`Cursos en común: ${ commonCoursesUsingFilter( student1Courses, student2Courses ) }`);


// comparando 3 arreglos

const commonCoursesStudent1And2 = commonCoursesUsingFilter(student1Courses, student2Courses);
const commonCoursesStudent1And2And3 = commonCoursesUsingFilter( commonCoursesStudent1And2, student3Courses );

console.log(`Cursos en común: ${commonCoursesStudent1And2And3}`);


// ------------------- Contar la cantidad de caracteres de una frase -----------
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p': 8
// resolverlo usando arrow function


const countSomeCharacter = (sentence, char) => {
    const myArray =  convertStringToArray(sentence);
    return myArray.filter((element) => element == char).length;
};

const convertStringToArray = sentence => sentence.toLowerCase().split("");


const mySentence = "Pepe pecas pica papas con un pico y una pala";

const characterToSearch = "p";
console.log(countSomeCharacter(mySentence,characterToSearch));

