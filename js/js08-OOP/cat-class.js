console.log("JS08 - CatClass");

/**
 * Clase Felino
 * El nombre de la clase se recomienda la convencion UpperCamelCase 
 */

class Felino {
    // nombre
    // numPatas
    // tieneGarras
    // size
    // atributo encapsulado #nombre_atributo_encapsulado
    #createdAt;
    
    // El metodo constructor nos ayuda a inicializar los atributos de un objeto
    constructor ( name, numPatas, tieneGarras, size ) {
        this.nombre = name;
        this.numPatas = numPatas;
        this.tieneGarras = tieneGarras;
        this.size = size;
        this.#createdAt = new Date().getTime();
        console.log(`soy ${this.nombre} y  tengo vida, ja - ja - ja`);
    }

    // Setter and getters
    get createdAt() {
        return this.#createdAt;
    }

    // set createdAt( newDate ) {
    //     return this.createdAt = new Date;
    // }

    comer(){
        return `Soy ${this.nombre} y estoy comiendo`;
    }

    /**
    * Tiempo de vida del animal desde la fecha de creación hasta la fecha actual.
    * @returns tiempo de vida en ms.
    */
    lifeSpan(){
        return new Date().getTime() - this.#createdAt; // Date.getTime() Obtener el valor en milisegundos
     }
    
}

/**
 *  Usando la palabra reservada extends podemos heredar 
 *  atributos y métodos de otra clase.
 */
class Gato extends Felino {
    
    constructor( nombre, size, domesticado ) {
       super(nombre, 4, true, size); // super debe ser la primera linea despues del constructor
       this.domesticado = domesticado;
    }
 }
 
 
 // Instanciar la clase Felino
 const chicharron = new Felino("Chicharron", 4, true, "grande");
 const wero = new Felino("Wero", 4, true, "grande");
 const pelusa = new Felino("Pelusa", 4, true, "chica");
 
 // Uso de la función comer
 console.log(  chicharron.comer()  );
 console.log(  wero.comer()  );
 console.log(  pelusa.comer()  );
 


 // Instanciar la clase gato
 const naranjo = new Gato("Naranjo", "grande");
 const kiara = new Gato("Kiara", "mediana");
 const tsuki = new Gato("Tsuki", "grande", false);


 console.log( naranjo.comer() );
 console.log( kiara.comer() );
 console.log( tsuki.comer() );

 console.log( `${ naranjo.nombre } es un gato ${naranjo.domesticado ? "domesticado": "salvaje"}` );
 console.log( `${ tsuki.nombre } es un gato ${tsuki.domesticado ? "domesticada": "salvaje"}` );

 // Accediendo a un atributo encapsulado 

 setTimeout ( 
    () => {
    console.log(` Tiempo de vida de ${ naranjo.nombre } : ${naranjo.lifeSpan()} `);} , 2000 
); // si pones new Date().getTime - naranjo.lifeSpan() sale NaN porque new Date().getTime devuelve un string

 