package animales.zoologico;

public class Felino {

	/*
	 * Crear una clase de un animal 3 atributos no estáticos (instancia) 1 atributo
	 * estático (clase) 2 métodos constructores sobrecargados 2 métodos no estáticos
	 * (instancia) 1 método estático (clase)
	 * 
	 * Crear una clase de prueba de la Clase animal
	 * 
	 * 
	 * Crear una clase que contenga la clase animal creada.
	 */

	String nombre;
	String color;
	String altura;

	static int numeroPatas = 4;

	Felino() {
		System.out.println("Hola");
	}

	Felino(String sonido) {
		System.out.println(sonido);
	}

	void comer() {
		System.out.println("estoy comiendo");
	}

	void dormir() {
		System.out.println("estoy durmiendo");
	}

	static void existir() {
		System.out.println("Hola, existo");
	}
	
	public class Gato extends Felino{
		Gato() {
			super("Meeow");
		}
		
	}
	
	public static void main(String[] args) {
		Gato Botas = new Gato();
		
	}
}
