package com.zoo;

public abstract class Feline extends Mammal {
	
	private double clawLength;
	
	public Feline(String commonName, String scientifcName, double age, double clawLength) {
		super(commonName, scientifcName, age, true);
		this.clawLength = clawLength;
	}

	public double getClawLength() {
		return clawLength;
	}

	public void setClawLength(double clawLength) {
		this.clawLength = clawLength;
	}


}

