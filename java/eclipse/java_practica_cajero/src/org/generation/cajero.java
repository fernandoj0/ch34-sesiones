package org.generation;

import java.util.Scanner;

public class cajero {
	public static void main(String[] args) {
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
		} else {
			System.out.println("Escribe un numero entero del 1 al 10");
		}
		
	}

}
