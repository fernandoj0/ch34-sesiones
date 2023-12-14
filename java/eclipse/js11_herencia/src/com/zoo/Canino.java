package com.zoo;

public abstract class Canino extends Mammal{
	
private double clawLength;
	
	public Canino(String commonName, String scientifcName, double age, double clawLength) {
		super(commonName, scientifcName, age, true); // true es para el atributo isViviaprous de Mammal
		this.clawLength = clawLength;
	}

	public double getClawLength() {
		return clawLength;
	}

	public void setClawLength(double clawLength) {
		this.clawLength = clawLength;
	}


}

