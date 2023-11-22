console.log("JS07 - Promise");

/*
 La promesa(promise) es un patrón asincrónico que se utiliza
 para manejar operaciones asíncronas.

 Las promesas permite realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.

 Las promesas tiene 3 estados:

 1.- Pending: El estado inicial de una promesa antes de que se resuelva o rechace
 2.- Resolved: La promesa se resuelve con un valor
 3.- Rejected: La promesa se rechaza con un razón

Resolve y reject son funciones de callback.
Para crear una promesa se usa el constructor de la clase Promise.

Las promesas proporcionan una forma más estructurada y legible de 
manejar el código asíncrono en comparación con los callbacks 
tradicionales, y son la base para características m
ás modernas como async/await.


sintaxis:
    const pinkyPromise = new Promise ( fncCallBack );

*/

// const pinkyPromise = new Promise ( ()=>{} );
// const pinkyPromise = new Promise ( ( fncCallBackResolve, fncCallBackReject )=>{});
const pinkyPromise = new Promise((fncCallBackResolve, fncCallBackReject) => {

    const isTeenager = false;

    if (isTeenager)
        fncCallBackResolve("Hay que estar siempre juntos");
    else
        fncCallBackReject({ code: 404, message: "Ni te topo" });
});


console.log("====> Promesas <======");
console.log("Antes de consumir la promesa");

// pinkyPromise(): pinkPromise is not a function
// Consumir las promesas
// Se usa los métodos then, catch y finally

/*pinkyPromise
    .then( fncCallback  ) // Se ejecuta una función de callback si la promesa fue resuelta
    .catch( fncCallback  ) // se ejecuta una función de callback si la promesa fue rechazada
    .finally( fncCallback ); // se ejecuta una función de callback 
                //después de que la promesa fue resuelta o rechazada
 */
pinkyPromise
    .then( response => console.log(response) )
    .catch( error => console.log(error)  )
    .finally( ()=> console.log("Función de Finally")  );

console.log("Después de consumir la promesa");

const greeting = (name) => {
    
    // const myPromise = new Promise( ()=> {} );
    const myPromise = new Promise( (resolve,reject)=> {
        // saludar a la persona pero:
        // si su nombre comienza con A retardar 5 segundos
        // si comienza con G, retardar 2 segundos
        // en otro caso, rechazar la promesa

        if (name.charAt(0) === 'a' || name.charAt(0) ==='A') 
            setTimeout( () => resolve(`Hola ${name}`) , 5000);
        else if (name.charAt(0) === 'g' || name.charAt(0) ==='G') 
            setTimeout( () => resolve(`Hola ${name}`) , 2000);
        else
            reject(`Te vi pero te ignoré ${name}`);
    } );

    return myPromise;
};

/*
greeting("Antonio")
.then( response => console.log(response) )
.catch( error => console.log(error) )
.finally();

greeting("Gaby")
.then( response => console.log(response) )
.catch( error => console.log(error) )
.finally();

greeting("Sergio")
.then( response => console.log(response) )
.catch( error => console.log(error) )
.finally();
*/

//---------------- consumir las promesas con async y await-------------
/*
 Async y Await facilita la escritura y lectura de código asíncrono.
 Permite escribir código asíncrono de manera similar a cómo se escribiría
 código síncrono.

*/

async function greetingCh43 (name) {
    console.log(">>> Inicio de saludo");
    const result = await greeting(name);
    console.log( result );
    console.log("<<< Fin de saludo");
};

const greetingAll = async() => {
    await greetingCh43( "Antonio II" );
    await greetingCh43( "Geo" );
    await greetingCh43( "Luis" );
}

const greetingAllUsingTryCatch = async() => {
    try {
        await greetingCh43( "Antonio II" );
        await greetingCh43( "Geo" );
        await greetingCh43( "Luis" );
    }
    catch( error ) {
        console.log("La promesa fue rechazada");
        console.error( error );
    }
}

greetingAllUsingTryCatch();