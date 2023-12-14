package com.zoo;

import com.pet.Pet;

public class Cat extends Feline implements Pet{
	
	private String petName;
	
	public String getPetName() {
		return petName;
	}

	public void setPetName(String petName) {
		this.petName = petName;
	}

	public Cat(String petName, double age) {
		super("Gato" , "Felis catus", age, 1) ;
		this.petName = petName;
	}

	@Override
	public String sleep() {
		return "El michi " + this.getPetName() + " duerme 10 horas";
	}
	
	public String eat(String food) {
		return "El michi " + this.getPetName() + ", que tiene las garras de " + super.getClawLength() + " cm y tiene " + super.getAge() + " años, come deliciosas "+  food +  " cuando se le da la gana.";
	}

	@Override
	public String trick() {
		// TODO Auto-generated method stub
		return "El michi " + this.getPetName() + " ronronea y deja que le acaricies";
	}
	
	

	

}
