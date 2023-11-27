const esPalindromo = (frase) => {
    // TODO realizar la implementacion, considerando mayusculas y espacios
    const fraseOriginal = frase.toLowerCase().split(' ').join("");
    console.log(fraseOriginal);
    const fraseInvertida = frase.toLowerCase().split(' ').reverse().join("");
    console.log(frase.toLowerCase().split(' ').reverse().join(""));

    
    if (fraseOriginal == fraseInvertida) {
        return true;
    } else {
        return false;
    }
}

console.log(esPalindromo("Luz azul"));

module.exports = {esPalindromo};