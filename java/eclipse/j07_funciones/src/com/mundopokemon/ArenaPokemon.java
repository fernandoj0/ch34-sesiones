package com.mundopokemon;

public class ArenaPokemon {

	public static void main(String[] args) {
		
		Pokemon.gritaPokemon();
		
		System.out.println(Double.MAX_VALUE);
		
		// Instacniando 
		Pokemon pikachu = new Pokemon();
		pikachu.nombre = "Pikachu";
		pikachu.tipo= "Electrico";
		
		Pokemon charmander = new Pokemon();
		charmander.nombre = "Charmander";
		charmander.tipo= "Fuego";
		
		Pokemon squirtle = new Pokemon();
		squirtle.nombre = "Squirtle";
		squirtle.tipo= "Agua";
		
		// Hacemos comer a Pikachu
		System.out.println(pikachu.comer("bayas", 100));
		
		// Hacemos dormir a charmander 
		charmander.dormir();
		
		// Mostrar el fabricante de los Pokemones
		System.out.println( Pokemon.nombreFabricante() );
		System.out.println( charmander.nombreFabricante() );
	
		String pelear(Pokemon pokemon) {
	    	// TODO confrontar a los pokemones y enviar el mensaje del pokemon
	    	// ganador, el ganador es el que tenga mayor puntos de poder
	    	
	    	return null;    	
	    }
	
	}
	

	
	
}
