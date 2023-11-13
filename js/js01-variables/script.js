console.log("Sesion JS01");

/*

Principales tipos de datos en JS

Datos primitivos:
String 
Boolean
Number
Undefine
Null
Big int
Symbol

Datos objeto:
Array
Object
*/

// String 
console.log("Tipos de datos String: " + "Hola " + "2345");

// Number: 12, -45, 56.892, +Infinity, -Infinitym NaN
// Los datos numerocos usan 64 bits para almacenar pero solo usn 53 bits
// para representar el número


console.log("Tipos de datos number: ", 12, -45, 56.892, 5/0, -23/0, 4*"hola")
console.log("Valor máximo representado en JS", Number.MAX_VALUE);
console.log("valor seguro: ", Number.MAX_SAFE_INTEGER);
console.log("Valor maximo + 1", Number.MAX_VALUE + 1);

console.log("1.7976931348623157e+308", 1.7976931348623157e+308);
console.log("1.7976931348623157e+309", 1.7976931348623157e+309); //Infinity

console.log("MAX_SASE_INTEGER + 1 ", Number.MAX_SAFE_INTEGER + 1); //9007199254740992
console.log("MAX_SAFE_INTEGER + 2 ", Number.MAX_SAFE_INTEGER + 2 ); // 9007199254740993
console.log("MAX_SAFE_INTEGER + 3 ", Number.MAX_SAFE_INTEGER + 3 ); // 9007199254740994
console.log("MAX_SAFE_INTEGER + 4 ", Number.MAX_SAFE_INTEGER + 4 ); // 9007199254740995

// bigInt
// represeta valores numericos enteros de los que el 
// tipo number no pueda representar(MAX_VALUE) o no es 
// seguro (MAX_SAFE_INTEGER).
// Para que se un BigInt se le agrega al ginal la letra n

let myBigInt = 9007199254740991n;
console.log(myBigInt);
console.log( "myBigInt + 1 :", myBigInt + 1n);
console.log( "myBigInt + 1 :", myBigInt + 2n);
console.log( "myBigInt + 1 :", myBigInt + 3n);
console.log( "myBigInt + 1 :", myBigInt + 4n);

// Boolean 
// Tenemos 2 estados: true/false
console.log("Boolean en true: ", true);
console.log("Boolean en false ", false);


//undefined
//un dato que es declarado (var, let, const) pero no esta definido
let myVar;
console.log("Tipo de dato undefined: ", undefined);

// null
//Intensionalmente se borra el tipo de dato
let myVarNull; // solo se declara
console.log(myVarNull); // undefined
myVarNull = "Quiero que Tan nos cuente como le fue en su consierto";
console.log(myVarNull); // string
myVarNull = null;
console.log(myVarNull); // null

// --------------------------------------
// Tipos de datos Object

// Object
// const misDatosDePerfil = { clave: valor, clave2 : valor };

const misDatosDePerfil = 

{ nombre: "Fernando",
 apellido: "Juarez",
 edad: 23,
 isBelicoso: true,
 "23": "Lo que sea",
 /* metodos */
 nombreCompleto: function fullName() {
    return misDatosDePerfil.nombre + misDatosDePerfil.apellido;
 }
};


console.log(`Nombre ${ misDatosDePerfil.nombre }`);
console.log(` Apellido ${ misDatosDePerfil["apellido"] } `)

console.log(`Lo que sea: ${misDatosDePerfil["23"]}`);
console.log(`El nombre completo es ${ misDatosDePerfil.nombreCompleto() }`);

// Arrays
//Tipo de objetos espaciales que si fortaleza radica ne los métodos con los que cuenta

const cancionesPesoPluma = [
    "Ella Baila Sola",
    "Lady Gaga",
    "Lou Lou",
    "Laguna",
    "El Gavilán",
    {
        2020: 5,
        2021: 30,
        2023: 56,
        total: 91
    }   
];

// indice del objeto de numero 
console.log("Canciones por año " + cancionesPesoPluma[5]); // [Object Object] 

//indice del objeto de numero de canciones del año 2020
console.log("Canciones por año 2020: " + cancionesPesoPluma[5]["2020"]);  // 
// Mostrar el total de canciones de PP
console.log("total de canciones: " + cancionesPesoPluma[5].total);

// Conversiones de datos (casting)
console.log("Hola CH " + 34);
console.log("3" + 5 + 6); //356 string
console.log("3"*3); // 9 number

// Conversiones explicitas
// String a number
// Number, parseInt, parseFloat
console.log("3" + 5 + 6); 

/* 
Number()
- Convierte directamente una cadena a numeros
- Si el string tiene caracteres no numericos se vuelve not a number
- Puede manejar decimales y exponentes (3e3)

ParseInt()
- Convierte una cadena a numeros enteros
- Ignora los caracteres no numericos despues del primero numero (12,56 -> 12)
- Puede aceptar como argumento la base numerica ("1000", 2) -> 8 decimal

parseFloat()
  - Convierte una cadena a números de punto flotante
  - Maneja decimales y exponentes
*/

console.log("3" + 5 + 6); // 356
console.log(Number(3) + 5 +6); // 14 
console.log(parseInt("3") + 5 + 6 ); // 14 
console.log(parseInt("$3")); // NaN
console.log( parseInt("3 MxN") ); // 3
console.log( Number("3 MxN") ); // NaN


console.log( parseInt("$3MNX") + 5 + 6 ); // NaN

console.log( "$3MNX".slice(1) + 5 + 6 ); // 3MNX56
console.log( parseInt("$3MNX".slice(1)) + 5 + 6   ); // 14
console.log( Number("$3MNX".slice(1)) + 5 + 6   ); // NaN

console.log( parseInt("$3MXN".replace('$','')) + 5 + 6 ); // 14
console.log( parseInt("$3333MXN".replace('$','')) + 5 + 6 ); // 3344

console.log( parseInt("$3333MXN".replace( /[^0-9.]/g ,'')) + 5 + 6 ); // 3344

console.log( parseInt("1000")) // 1000
console.log( parseInt("1000", 2)) // 8
console.log(Number("$3MxN".split("")[1]) + 5 + 6);
console.log()

// conversion a string
console.log( String(23.4) ) // 23.4
console.log( String(true) );
console.log( String([3,4,5,6]) );


console.log( {a:1,b:2} );

console.log( JSON.stringify( {a:1,b:2} ) );

// Conversion a boolean
/*
    Para que sea false, deber ser: "", 0, null, undefined
*/


console.log(Boolean("Hola")); // true
console.log(Boolean ("false")); // true
console.log(Boolean(" ")); // true
console.log(Boolean(undefined)); // false

console.log([]); // true

// Conversión a Number()
/*
 [] = 0;
 [30] = 30
 [40,23, 45] = NaN
 false = 0
 true = 1
*/
console.log( Number( [] ) ); // 0
console.log( Number( [9] ) ); // 9
console.log( Number( [3,6,7] ) ); // NaN


// Conversión a String()
/*
  [] = ""
  [1,2] = 1,2
  function(){} = function(){}
  {} = [object Object]
  
*/
