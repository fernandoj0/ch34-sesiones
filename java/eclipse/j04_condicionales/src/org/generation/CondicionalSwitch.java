package org.generation;

import java.util.Scanner;

public class CondicionalSwitch {

	public static void main(String[] args) {
		/**
		 * Sintaxis:
		 * 
		 *  switch( expresión ){ 
		 *    case valor1 : expresión; 
		 *                  break; 
		 *    case valor2 : expresión;
		 *                  break; 
		 *    default: expresión; 
		 *             break; 
		 *   }
		 * 
		 * La expresión a evaluar debe ser un tipo entero, string o enum. La condicional
		 * Switch usa el método equals para comparar los Strings.
		 */
		Scanner sc = new Scanner(System.in);
		System.out.println("Introduce tu numero de mes: ");
		if (sc.hasNextInt()) { // Verifica si existe un valor numerico entero
			int numeroMes = sc.nextInt();
			String nombreMes;
			switch (numeroMes) {
			case 1: 
				nombreMes = "ENERO";
				break;
			case 2:
				nombreMes = "FEBRERO";
				break;
			case 3:
				nombreMes = "MARZO";
				break;
			case 4:
				nombreMes = "ABRIL";
				break;
			case 5:
				nombreMes = "MAYO";
				break;
			case 6:
				nombreMes = "JUNIO";
				break;
			case 7:
				nombreMes = "JULIO";
				break;
			case 8:
				nombreMes = "AGOSTO";
				break;
			case 9:
				nombreMes = "SEPTIEMBRE";
				break;
			case 10:
				nombreMes = "OCTUBRE";
				break;
			case 11:
				nombreMes = "NOVIEMBRE";
				break;
			case 12:
				nombreMes = "DICIEMBRE";
				break;
			default:
				nombreMes = "NO EXISTE ESE MES";
				break;
			}
			System.out.println("Tu mes de nacimiento es: " + nombreMes);
			sc.nextLine(); // limpiar la terminal
			
			String estacion;
			switch(numeroMes) {
			case 1,2,12: 
				estacion = "INVIERNO ";
				break;
			case 3,4,5:
				estacion = "PRIMAVERA";
				break;
			case 6,7,8:
				estacion = "VERANO";
				break;
			case 9,10,11:
				estacion = "OTOÑO";
				break;
			default:
				estacion = "NO HAY ESTACION PARA ESE MES";
				break;
			}
			System.out.println("Tu estacion de nacimiento es: " + estacion);
			sc.nextLine(); // limpiar la terminal

		} else {
			System.out.println("No introdujiste un numero entero ");
			sc.nextLine(); // limpiar la terminal

		}
		
		
		
		
		sc.close();
	}
}
