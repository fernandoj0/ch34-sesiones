package org.generation;

public class OperacionesMathTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		OperacionesMath operaciones;
		operaciones = new OperacionesMath();
		
		operaciones.sumSinRetorno(2, 3);
		
		int resultado = operaciones.sumaConRetorno(8, 9);
		System.out.println("Resultado: " + resultado);
		
		double valorPi = OperacionesMath.valorPI();
		System.out.println(valorPi);
	}

}
