package org.generation;

import java.util.Scanner;

public class cajero {
	public static void main(String[] args) {
		
		int saldoDisponible = 10_000;
		
		System.out.println("Seleciona una opcion");
		System.out.println("     1) Retirar dinero \n"
				+ "     2) Hacer depósitos \n"
				+ "     3) Consultar saldo \n"
				+ "     4) Quejas \n"
				+ "     5) Ver últimos movimientos \n"
				+ "     9) Salir del cajero");
		Scanner sc = new Scanner(System.in);
		int counterToExit = 0;
		if (sc.hasNextInt()) {
			int opcion = sc.nextInt();
			
			while (opcion < 1 || (opcion > 5 && opcion != 9)) {
				counterToExit += 1;
				System.out.println("Por favor escribe una opcion valida");
				if(counterToExit >= 3) {
					break;
				}
				opcion = sc.nextInt();
			}
			boolean hacerOtraConsulta = true;
			
			while (hacerOtraConsulta) {
				
				switch (opcion) {
					case 1:
						retiro(saldoDisponible);
						break;
					case 2:
						break;
					case 3:
						break;
					case 4:
						break;
					case 5:
						break;
					case 9:
						break;
					default:
						System.out.println("Nos vemos");
						break;
				}
			}
				
		} else {
			System.out.println("Escribe un numero entero del 1 al 10");
			counterToExit += 1;
		}
		
	}
	
	public static void retiro(int cantidadDineroInicial) {
		System.out.println("Tu saldo disponible a retirar es: " + cantidadDineroInicial);
		System.out.println("Escribe tu cantidad a retirar: ");
		Scanner sc = new Scanner(System.in);
		if (sc.hasNextInt()) {
			int retiro = sc.nextInt();
			if(retiro % 50 == 0 && retiro <= 6000){
				System.out.println("procedo a retirar");
				cantidadDineroInicial -= retiro;
			} else {
				System.out.println("Por favor escribe una cantidad que sea multiplo de 50 y menor a 6000");
			}
		} else {
			System.out.println("Escribe un numero multiplo de 50");
		}
		
	}

}
