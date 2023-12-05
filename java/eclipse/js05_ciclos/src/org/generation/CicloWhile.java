package org.generation;

import java.util.Scanner;

public class CicloWhile {
	public static void main(String[] args) {
		/**
		 * Ciclo While
		 * Mientras la condición sea verdadera, se realiza un nuevo ciclo.
		 * 
		 * Sintaxis:
		 *     
		 *     while( condicion ) instruccion;
		 *     
		 *     while( condicion ) {
		 *        instrucciones;
		 *     }
		 * 
		 * Ciclo Do While()
		 * 
		 * Sintaxis:
		 *     do{
		 *      instrucciones;
		 *     }while(condicion);
		 *   
		 * 
		 */
		
		Scanner sc = new Scanner(System.in);
		System.out.println("quieres continuar? ");
		char input = sc.nextLine().toLowerCase().charAt(0);
		do {
			System.out.println("quieres continuar? ");
			input = sc.nextLine().toLowerCase().charAt(0);
			if (input != 's') {
				System.out.println("Adios ");
				break;
			}
		} while (input == 's' );
		
	}
}
