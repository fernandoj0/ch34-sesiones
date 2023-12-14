package test.org.generation.math;


import static org.junit.jupiter.api.Assertions.assertEquals;

import org.generation.palabras.CasiPalindromo;
import org.junit.jupiter.api.Test;

/**	
 * 
 * Ejercicio Casi Palíndromo
 * 
 * Verificar si una palabra es casi palíndromo,
 * con el cambio de una sola letra.
 * 
 * La función debe aceptar un texto y retornar
 * con true si la palabra es casi palíndromo,
 * de lo contrario retornar false.
 * 
 * Ej.
 *  Oso -> false ( por que ya es un palíndromo)
 *  Ver -> true (si reemplazo la v por r -> vev)
 *  Hola -> false (no es casi un palíndromio: holh, hooa)
 *  Ocho -> true ( occo)
 *  Veronica -> false ( veronicv, veroniea, veronrca, verooica)
 *  Anita lavó la tina - > true (  Anita L[a]v[a] la tina )
 * 
 */
public class CasiPalindromoTest {
	CasiPalindromo casiPalindromo = new CasiPalindromo();
	
	@Test
	void casiPalindromoTest() {
		assertEquals( false, casiPalindromo.almostPalindrome("Oso"), "Oso"   );
		assertEquals( true, casiPalindromo.almostPalindrome("Ver"), "Ver"   );
		assertEquals( false, casiPalindromo.almostPalindrome("Hola"), "Hola"   );
		assertEquals( true, casiPalindromo.almostPalindrome("Ocho"), "Ocho"  );
		assertEquals( false, casiPalindromo.almostPalindrome("Veronica"), "Veronica"   );
		assertEquals( true, casiPalindromo.almostPalindrome("Anita lavó la tina"), "Anita"  );
	}

}
