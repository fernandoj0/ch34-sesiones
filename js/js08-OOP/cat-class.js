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
    
    // El metodo constructor nos ayuda a inicializar los atributos de un objeto
    constructor ( name, numPatas, tieneGarras, size ) {
        this.nombre = name;
        this.numPatas = numPatas;
        this.tieneGarras = tieneGarras;
        this.size = size;
        console.log(`soy ${this.nombre} y  tengo vida, ja - ja - ja`);
    }

    comer(){
        return `Soy ${this.nombre} y estoy comiendo`;
    }
}

// Instanciar la clase Felino 

const chicharron = new Felino("Chicharron");

const wero = new Felino("Wero");

const pelusa = new Felino("Pelusa");

// Uso de la funcion comer
console.log( chicharron.comer() );
console.log( wero.comer() );
console.log( pelusa.comer() );


