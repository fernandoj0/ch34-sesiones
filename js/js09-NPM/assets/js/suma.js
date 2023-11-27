// Funcion suma que tenga de entradas dos parametros
// salida con el retorno con la sumatoria

const suma = (a,b) => {          // a: .1 , b: .2
    const numAEntero = a * 1000; // .1 * 1000 = 100
    const numBEntero = b * 1000; // .2 * 1000 = 200
    const result = numAEntero + numBEntero; // 100 + 200 = 300
    return result / 1000; //   300 / 1000 = .30 

} ;

module.exports = { suma };