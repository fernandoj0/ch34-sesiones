/*
 * TDD o Desarrollo Guiado por Pruebas 
 */

// importar la funcion
// palindromo: oracion que se lee igual de derecha a izquierda

const { esPalindromo } = require("../palindromo");

test("Verficar si una palabra es palindromo en minusculas", ()=> {
    expect(esPalindromo("oso")).toBe(true);
    expect(esPalindromo("solos")).toBe(true);
    expect(esPalindromo("hola")).toBe(false);
});

test("Verficar si una palabra es palindromo en tipo titulo", ()=>{
    expect(esPalindromo("Bob")).toBe(true);
    expect(esPalindromo("Radar")).toBeTruthy();
});

test("Verficar si una palabra es palindromo con espacios", ()=>{
    expect(esPalindromo("Luz azul")).toBe(true);
    expect(esPalindromo("Anita lava la tina")).toBeTruthy();
    expect ( esPalindromo("La ruta natural")).toBeTruthy() ;
    expect ( esPalindromo("La Ch34 rifa")).toBeFalsy();
});
