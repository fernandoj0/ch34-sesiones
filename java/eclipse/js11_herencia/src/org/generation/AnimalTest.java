package org.generation;

import com.zoo.Cat;
import com.zoo.Mammal;

public class AnimalTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Mammal mamifero = new Mammal("Mamifero", "Mamiferous Gigantescus", 2, true);
		// System.out.println(mamifero.eat("tamalitos de ayer"));
	
	
	Cat wero = new Cat("Wero", 10);
	Cat tecate = new Cat("Tecate", 1);
	Cat pelusa = new Cat("Pelusa", 0.9);
	
	System.out.println(wero.sleep());  // metodo de la clase cat
	System.out.println(wero.eat("croquetas de pescado")); // metodo de la clase Mammal
	
	}

}
