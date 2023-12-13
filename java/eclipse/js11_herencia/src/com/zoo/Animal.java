package com.zoo;

/**
 *  Las clases abstractas son clases que no se pueden instanciar.
 *  Estas clases se utilizan como modelos(plantillas) para
 *  crear subclases concretas que se puedan instanciar.
 *  
 *  una clase abstracta se declara en la firma de la clase
 *  con la palabra reservada "abstract"
 *  
 *  La clase abstracta puede contener métodos abstractos y
 *  métodos concretos.
 *  
 *  Los métodos abstractos no tienen implementación. La implementación
 *  se debe realizar en las subclases concretas.
 *  
 *  Las clases abstractas se recomienda utilizar para
 *  clases que estén estrechamente relacionadas ( is-A )
 */

public abstract class Animal {
	
	private String commonName;
	private String scientificNamme;
	private double age;
	
	
	/**
	 * @param commonName
	 * @param scientificNamme
	 * @param age
	 */
	
	protected Animal(String commonName, String scientificNamme, double age) {
		this.commonName = commonName;
		this.scientificNamme = scientificNamme;
		this.age = age;
	}


	public String getCommonName() {
		return commonName;
	}


	public void setCommonName(String commonName) {
		this.commonName = commonName;
	}


	public String getScientificNamme() {
		return scientificNamme;
	}


	public void setScientificNamme(String scientificNamme) {
		this.scientificNamme = scientificNamme;
	}


	public double getAge() {
		return age;
	}


	public void setAge(double age) {
		this.age = age;
	}
	
	public String eat( String food ) {
		return "El animal " + getCommonName() + " está comiendo" + food;
	} 
	
	/**
	 *  Un método abstracto no tiene implementación, solo
	 *  la definción del método.
	 *  Termina con punto y coma.
	 *  
	 *  Si tienes un método abastracto, tienes la obligación
	 *  de hacer tu clase abstracta.
	 */
	public abstract String sleep();
	
}
