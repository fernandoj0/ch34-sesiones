/*
  ============ Condicional if - else ====================

  La condicional if ejecuta una sentencia si una condición
  especificada es evaluada como verdadera. En caso contrario
  podemos usar la sentencia else.

  Sintaxis:

  if ( condición ) sentencia;

  if (condición ) {
   sentencia1;
   sentencia2;
   sentencia3;
   sentenciaN;
  }

  if ( condición ) 
    sentenciaVerdadera;
  else 
    sentenciaFalsa;

  if ( condición ) sentenciaVerdadera;
  else sentenciaFalsa;


*/

const temperatura = 22;

// Verificar temperatura, si es mayor o igual a 26 grados
// imprimir en consola "Team Calor"
// en caso contrario "Team frio"

if ( temperatura >= 26) {
    console.log("Team calor");
} else {
    console.log("Team frio");
}

if ( temperatura === 21 ) 
console.log("Temperatura sabrudoski");

console.log("Me pongo short con calcetines");


// ===================================

const age = 25;

if (age === 50);
 console.log("Estás en el 5o piso");
console.log("Fin de analizar tu edad");


/*
 ================= Sentencia if- else if - else ========
  if (condición ) sentencia;
  else if (condición2 ) sentencia2;
  else if (condiciónN ) sentenciaN;
  else sentenciaFalse;
*/

const color = "negro";
let mensaje = "";
/*
if (color === "negro") {
    mensaje = "Color negro";
}
else {
    if (color === "verde"){
        mensaje = "color verde";
    }
    else {
        if (color === "azul"){            
            mensaje = "color azul";
        }
        else {
            mensaje = "No tengo el color registrado";
        }
    }
}
*/


if (color === "negro")  mensaje = "Color negro";
else if (color === "verde") mensaje = "color verde";    
else if (color === "azul") mensaje = "color azul";           
else mensaje = "No tengo el color registrado";
        

/*
============== Sentencia Switch ================= 
La sentencia switch evalua una expresión y se compara con el valor de cada instancia en "case" y se ejecuta las sentencias asociadas a ese "case" hasta que se encuentre la sentencia break o que finalice el switch

// default no obligatorio pero es convencion
// el break despues de cada case tambien es opcional, si necesitas que siga comparando después no lo pongas.


La evaluación es estrcita (===)

Sintaxis: 

switch( expresión ) {
    case valor1:
        sentencias;
        break;
    case valor2:
        sentencias;
        break;
    case valorN:
        sentencias;
        break;
    default:
}

 */



const person = "Sergio";
mensaje = "";

switch ( person ) {
    case "Sergio":
        mensaje = "Hola Sergio, instructor";
        break;
    case "Tony":
        mensaje = "Ey, Tony";
        console.log("Estoy atendiendo a Tony");
        break;
    case "Gaby":
        mensaje = "Hola, Gaby";
        break;
    default:
        mensaje = "persona desconocida";
       
}
// return mensaje;

console.log( mensaje );



//====================================================
/*
  Imprimir aprobado si la calificación es 7,8,9,10
  Imprimir reprobado fuera de esos números

  Realizarlo con switch dentro de una función.
  
*/


const califica = ( number ) =>{
    let message = "";
    switch( number ){
        case 10:
        case 9:
        case 8:
        case 7:
            message = "aprobado";
            break;
        default:
            message = "reprobado";
    }
    return  message;
}

console.log(`Persona con 9 : ${califica(9)}`); // aprobado
console.log(`Persona con 7 : ${califica(7)}`); // aprobado
console.log(`Persona con 5 : ${califica(5)}`); // reprobado


// =====================================================
/*
 Realizar dos funciones, una usando switch y otra con if-else if-else
  
 Donde verifique el mes del 1 al 12 y despliegue la estación del año.

 mes 12 , 1, 2 = Invierno
 mes 3, 4, 5 = Primavera
 mes 6, 7, 8 = Verano
 mes 9, 10, 11 = Otoño

*/


const giveTheSeasonSwitch = number => {
    let season = "";
    switch (number) {
        case 3:
        case 4:
        case 5:
            season = "spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "fall";
            break;
        case 12:
        case 1:
        case 2:
            season = "winter"
            break;
        default:
            season = "mes no valido";
    }
    return season;
}


console.log(giveTheSeasonSwitch(12));
console.log(giveTheSeasonSwitch(1));
console.log(giveTheSeasonSwitch(5));
console.log(giveTheSeasonSwitch(8));




const giveTheSeasonIf = number => {
    let season = "";
    
    if (number <= 2 || number === 12) {
        season = "winter";
    } else if (number <= 5) {
        season = "spring";
    } else if (number <= 8) {
        season = "summer";
    } else if (season <= 11) {
        season = "fall";
    } else {
        season = "mes no valido";
    }
    return season;
}
  
console.log(giveTheSeasonIf(12));
console.log(giveTheSeasonIf(4));
console.log(giveTheSeasonSwitch(98));
console.log(giveTheSeasonSwitch(8));


/* 
 =================== Operador ternario ===============
 Es el único operador que tiene tres operandos

 Generalmente se usa como opción simplifcada a la sentencia if-else
 
 Sintaxis:

 condición ? (expresionSiCondiciónEsVerdadera : expresiónSiCondiciónEsFalsa);

*/

const subtotal = 1_000_000; // guion bajo no afecta al string o numeros solo ayuda a la lectura
const esFrontera = true;
let total;

if ( esFrontera )
    total = subtotal * 1.08;
else 
    total = subtotal*1.16;

console.log(`El total es ${total}`);

// Aplicando el operador ternario
const totalConIVA = esFrontera ? subtotal * 1.08 : subtotal * 1.16;

console.log(`Operador ternario ${totalConIVA}`);

// Reduccion con el operador ternario
console.log(`Total:${subtotal * (esFrontera ? 1.08 : 1.16)}`)


/*  
  Evaluar la edad de una persona
  Si la persona es igual o mayor a 18 : puede votar
  En caso contrario: no puede votar

*/

const edadPersona = 5;

console.log(`La persona: ${edadPersona>=18 ? `puede votar ` : `no puede votar`}`)