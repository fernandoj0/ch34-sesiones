package org.generation;

public class CajeroTest {
	
	public static void main(String[] args) {
		Cajero cliente1 = new Cajero();
		cliente1.menu(); // deposita a cuenta de cheques 500 pesos
		cliente1.menu(); // consulta movimientos
		System.out.println(cliente1.getSaldoDisponible());
	}
	
}
