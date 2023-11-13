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

