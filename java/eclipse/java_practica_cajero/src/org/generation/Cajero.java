package org.generation;

import java.util.ArrayList;
import java.util.Scanner;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Cajero {

	private int saldoDisponible = 10_000; // propiedad de para todos los objetos

	private double saldoTarjetaCredito = 0;

	public ArrayList<String> movimientos = new ArrayList<>();

	public int getSaldoDisponible() {
		return saldoDisponible;
	}

	public void setSaldoDisponible(int saldoDisponible) {
		this.saldoDisponible = saldoDisponible;
	}

	public double getSaldoTarjetaCredito() {
		return saldoTarjetaCredito;
	}

	public void setSaldoTarjetaCredito(double saldoTarjetaCredito) {
		this.saldoTarjetaCredito = saldoTarjetaCredito;
	}

	// -------------- inicia metodo de menu ---------------
	public void menu() {

		System.out.println("Seleciona una opcion");
		System.out.println("     1) Retirar dinero \n" + "     2) Hacer depósitos \n" + "     3) Consultar saldo \n"
				+ "     4) Quejas \n" + "     5) Ver últimos movimientos \n" + "     9) Salir del cajero");
		Scanner sc = new Scanner(System.in);
		int counterToExit = 0;
		
		while (sc.hasNextInt() == false) {

			counterToExit += 1;
			System.out.println("Escribe un numero entero del 1 al 10");
			sc.nextInt();
			// agregar un if para decir adios en caso de que counterToExit == 3
			if (counterToExit == 3) {
				System.out.println("Adios");
				break;
			}
		}
		int opcion = sc.nextInt();
		System.out.println("ya me sali del primer while");

		while (opcion < 1 || (opcion > 5 && opcion != 9)) {
			counterToExit += 1;
			System.out.println("Por favor escribe una opcion valida");
			if (counterToExit >= 3) {
				break;
			}
			opcion = sc.nextInt();
		}
		boolean hacerOtraConsulta = true;
		while (hacerOtraConsulta) {
			switch (opcion) {
			case 1:
				reitar(sc);
				System.out.println("Seleccione otra opcion que desea realizar");
				System.out.println("     1) Retirar dinero \n" + "     2) Hacer depósitos \n" + "     3) Consultar saldo \n"
						+ "     4) Quejas \n" + "     5) Ver últimos movimientos \n" + "     9) Salir del cajero");
				opcion = sc.nextInt();
				break;
			case 2:
				depositar(sc);
				System.out.println("Seleccione otra opcion que desea realizar");
				System.out.println("     1) Retirar dinero \n" + "     2) Hacer depósitos \n" + "     3) Consultar saldo \n"
						+ "     4) Quejas \n" + "     5) Ver últimos movimientos \n" + "     9) Salir del cajero");
				opcion = sc.nextInt();
				break;
			case 3:
				consultarSaldo();
				System.out.println("Seleccione otra opcion que desea realizar");
				System.out.println("     1) Retirar dinero \n" + "     2) Hacer depósitos \n" + "     3) Consultar saldo \n"
						+ "     4) Quejas \n" + "     5) Ver últimos movimientos \n" + "     9) Salir del cajero");
				opcion = sc.nextInt();
				break;
			case 4:
				expresarQueja();
				System.out.println("Seleccione otra opcion que desea realizar");
				System.out.println("     1) Retirar dinero \n" + "     2) Hacer depósitos \n" + "     3) Consultar saldo \n"
						+ "     4) Quejas \n" + "     5) Ver últimos movimientos \n" + "     9) Salir del cajero");
				opcion = sc.nextInt();
				break;
			case 5:
				consultarMovimientos(movimientos);
				System.out.println("Seleccione otra opcion que desea realizar");
				System.out.println("     1) Retirar dinero \n" + "     2) Hacer depósitos \n" + "     3) Consultar saldo \n"
						+ "     4) Quejas \n" + "     5) Ver últimos movimientos \n" + "     9) Salir del cajero");
				opcion = sc.nextInt();
				break;
			case 9:
				salirMenu();
				hacerOtraConsulta = false;
				break;
			default:
				System.out.println("No selecciono ninguna opcion valida. Intente nuevamente");
				hacerOtraConsulta = false;
				break;
			}
		}
	}

	// -------------- termina metodo de menu ---------------------

	// --------------- inicia metodo retirar ------------
	public void reitar(Scanner sc) {
		System.out.println("Tu saldo disponible a retirar es: " + getSaldoDisponible());
		System.out.println("Escribe tu cantidad a retirar(sólo una múltiplos de 50 y menor a 6000): ");

		if (sc.hasNextInt()) {
			int retiro = sc.nextInt();
			while (retiro % 50 != 0 || retiro > 6000) {
				System.out.println("Por favor escribe una cantidad que sea multiplo de 50 y menor a 6000");
				retiro = sc.nextInt();
			}
			
			almacenarMovimiento("Retiro", String.valueOf(retiro));
			System.out.println("procedo a retirar");
			setSaldoDisponible(getSaldoDisponible() - retiro);
			System.out.println("Su saldo final es de: " + getSaldoDisponible());

		} else {
			System.out.println("Lo siento, no ingresó un cantidad correcta. Intente nuevamente");
		}
	}

	// ----------------- termina metodo retirar -----------------

	// --------------- inicia metodo depositar --------------------
	public void depositar(Scanner sc) {
		System.out.println("     1) Cuenta de cheques \n" + "     2) Deposito a Tarjeta de crédito \n");

		int counterToExit = 0;

		while (sc.hasNextInt() == false) {
			counterToExit += 1;
			System.out.println("Por favor escoge una opcion correcta");
			System.out.println("     1) Cuenta de cheques \n" + "     2) Deposito a Tarjeta de crédito \n");

			int opcionDeposito = sc.nextInt();
			// agregar un if para decir adios en caso de que counterToExit == 3
			if (counterToExit == 3) {
				System.out.println("Adios");
				break;
			}
		}

		System.out.println("ya me sali del primer while");
		int opcionDeposito = sc.nextInt();
		while (opcionDeposito != 1 && opcionDeposito != 2) {
			counterToExit += 1;
			System.out.println("Por favor escribe una opcion valida");
			if (counterToExit >= 3) {
				break;
			}
			opcionDeposito = sc.nextInt();
		}

		switch (opcionDeposito) {
		case 1:
			System.out.println("Por favor ingrese la cantidad a depositar");
			int cantidadDepositoCuentaCheques = sc.nextInt();
			while (cantidadDepositoCuentaCheques % 50 != 0) {
				System.out.println("Por favor ingresa una cantidad para depositar multiplo de 50");
				cantidadDepositoCuentaCheques = sc.nextInt();
			}
			// codigo para deposito a cuenta de cheques
			setSaldoDisponible(getSaldoDisponible() + cantidadDepositoCuentaCheques);
			almacenarMovimiento("Deposito a cuenta de cheques", String.valueOf(cantidadDepositoCuentaCheques));
			System.out.println("la cantidad " + cantidadDepositoCuentaCheques
					+ " fue depostida correctamente a su cuenta de cheques. Adios");
			break;

		case 2:
			System.out.println("Por favor ingrese la cantidad a depositar");
			double cantidadDepositoTarjetaCredito = sc.nextDouble();
			// codigo para deposito a tarjeta de credito
			setSaldoTarjetaCredito(getSaldoTarjetaCredito() + cantidadDepositoTarjetaCredito);
			almacenarMovimiento("Deposito a TC", String.valueOf(cantidadDepositoTarjetaCredito));
			System.out.println("la cantidad " + cantidadDepositoTarjetaCredito
					+ " fue depostida correctamente a su tajeta de credito. Adios");
			break;
		default:
			System.out.println("No selecciono una opcion correctamente. Intente nuevamente");
			break;
		}
	}

	// ----------- termina metodo depositar -------------------

	// -------------- inicia metodo consultar saldo ---------------------
	public void consultarSaldo() {
		System.out.println("Su saldo es de " + getSaldoDisponible());
		System.out.println("Hasta pronto");
	}
	// -------------- termina metodo consultar saldo ---------------------

	// -------------- inicia metodo expresar queja ---------------------
		public void expresarQueja() {
			System.out.println("No disponible por el momento, intente más tarde");
			System.out.println("Hasta pronto");
		}
		// -------------- termina metodo consultar saldo ---------------------
	
	
	// ----------- inicia metodo almacenar movimientos -------------

	public void almacenarMovimiento(String accion, String monto) {

		LocalDateTime dateObj = LocalDateTime.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm");
		String date = dateObj.format(formatter);
		movimientos.add(date + " " + accion + " de $" + monto);

	}

	// ------------ termina metodo almacenar movimientos -----------------

	// -------------- inicia metodo consultar movimientos -----------

	public static void consultarMovimientos(ArrayList<String> lista) {
		int size = lista.size();

		// Imprime los últimos 5 elementos o menos si la lista tiene menos de 5
		// elementos
		for (int i = Math.max(size - 5, 0); i < size; i++) {
			String elemento = lista.get(i);
			if (elemento != null) {
				System.out.println(elemento);
			}
		}
	}

	// ----------------- termina metodo consultar movimietos -----------------
	
	
	// ----------      inicia metodo salir ---------------------------------
	public void salirMenu() {
		System.out.println("Gracias por su preferencia");
	}
}
