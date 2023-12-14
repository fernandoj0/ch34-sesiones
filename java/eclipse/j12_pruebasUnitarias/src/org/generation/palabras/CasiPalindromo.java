package org.generation.palabras;

public class CasiPalindromo {
	public boolean almostPalindrome(String word) {
	        word = word.toLowerCase().replaceAll("[^a-z]", ""); // Convertir a minúsculas y eliminar caracteres no alfabéticos
	        int longitud = word.length();
	        
	        for (int i = 0; i < longitud / 2; i++) {
	            if (word.charAt(i) != word.charAt(longitud - 1 - i)) {
	                // Si los caracteres no coinciden, intentamos reemplazar una letra y ver si se convierte en palíndromo
	                return esPalindromo(word.substring(0, i) + word.substring(i + 1))
	                        || esPalindromo(word.substring(0, longitud - 1 - i) + word.substring(longitud - i));
	            }
	        }
	        return true;
	    }

	    public static boolean esPalindromo(String str) {
	        return str.equals(new StringBuilder(str).reverse().toString());
	    }
	
}
