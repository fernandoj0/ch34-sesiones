package org.generation;

import java.util.Scanner;

public class CondicionalIf {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		/**
		 * Sintaxis de la condicional if 
		 * Si la condicional es verdadera, se
		 * ejecuta la instrucción de if
		 * 
		 * if ( condicional ) sentencia;
		 * 
		 * if ( condicional ) { 
		 *  sentencias; 
		 * }
		 * 
		 * if ( condicional ) sentencia; 
		 * else sentencia_Si_condicional_es_falsa;
		 * ------------------------------------------------------ 
		 * if ( condicional ) sentencia; 
		 * else if ( nueva_condicional) sentencia; 
		 * . . . 
		 * else if ( * n_condición ) sentencia; 
		 * else sentencia;
		 * 
		 */
		// Verifiquen la edad de una persona.
		// Si es mayor de edad imprimir "Puede votar", caso contrario "No puede votar"
		byte edad = 5;
		
		if (edad >= 18) 
			System.out.println("Puede votar");
		else
			System.out.println("No puede votar");
		
		/*
		 * De una variable tipo int, evaluar si está en el rango de 1 a 10, si es así
		 * desplegar en consola "La selección está en el rango" En caso contrario
		 * "La selección está fuera de rango"
		 */
		int rango = -5;
		if( rango<=10 && rango >=1)
			System.out.println("La seleccion esta en el rango");
		else
			System.out.println("La seleccion esta fuera de rango");
		
		/*
		 * Operador ternario.
		 * 
		 * Sintaxis: expresión ? respuesta_si_es_true : si_es_false
		 * 
		 */
				
		String myRange = (rango >= 1 && rango <=10) ? 
				"La seleccion esta en rango" : "La seleccion esta fuera de rango";
		System.out.println(myRange);
		
		// ---------------------------------------------------------------------- Clase Scaner ---------------------
		int age;
		age = 20;
		
		Scanner myScan;
		myScan = new Scanner(System.in);
		
		System.out.println("Escribe tu nombre: ");
		String myName = myScan.nextLine(); // lee toda la linea hasta /n
		
		System.out.println("Tu nombre es: " + myName);
		
		System.out.println("Escribe una frase: ");
		String frase = myScan.next(); // lee hasta el delimitador
		
		System.out.println("La primera palabra de la frase es: " + frase);
		
		
		System.out.print("Escribe una cancion: ");
		String cancion = myScan.next(); // lee hasta el delimitador
		
		System.out.print("Tu cancion es: " + cancion);
		
	}

}
