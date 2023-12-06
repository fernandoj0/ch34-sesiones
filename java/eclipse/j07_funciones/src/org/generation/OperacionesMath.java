package org.generation;

public class OperacionesMath {
	// atributos de instancia (non-static fields)
	// atributos de clase (static fields) los que le corresponden a la clase y se heredan a cada objeto creado a partir de la clase
	
	// métodos constructores
	
	// métodos de instancia
	void sumSinRetorno(int a, int b ) {
		System.out.println("Resultado : " + (a + b));
	}
	
	int sumaConRetorno(int a, int b) {
		return a + b;
	}
	
	// métodos estáticos o de clase
	static double valorPI() {
		return Math.PI;
	}
}
