package com.zoo;

public class Lobo extends Canino{
	
	private String wolfName;
	
	public String getPetName() {
		return wolfName;
	}

	public void setPetName(String wolfName) {
		this.wolfName = wolfName;
	}

	public Lobo(String wolfName, double age) {
		super("Lobo" , "Canis lupus", age, 2) ;
		this.wolfName = wolfName;
	}

	@Override
	public String sleep() {
		return "El lobo " + this.getPetName() + " duerme 6 horas";
	}
	
	public String eat(String food) {
		return "El lobo " + this.getPetName() + ", que tiene las garras de " + super.getClawLength() + " cm y tiene " + super.getAge() + " años, come "+ food +  " cuando logra cazar.";
	}

}
