package test.org.generation.math;

import static org.junit.jupiter.api.Assertions.*;

import org.generation.math.MathOperations;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class MathOperationsTest {
	// TODO Auto-generated constructor stub
	
	MathOperations op;
	MathOperations calc;
	@BeforeEach
	void setUp() {
		op = new MathOperations(10);
		calc = new MathOperations(10);
	}
	@Test
	@DisplayName("Sumatoria de números")
	void additionTest() {
		assertEquals(15, op.addition(5));
		assertEquals(30, op.addition(15));
		assertEquals(130, op.addition(100));
		assertEquals(110, op.addition(-20));
	}
	
	
	// Pruebas unitarios con la resta
	@Test
	void subtractionTest() {
		assertEquals ( 9 , op.substraction(1) );
		assertEquals ( 5 , op.substraction(4) );
		assertEquals ( 0 , op.substraction(5) );

	}
	
	
}
