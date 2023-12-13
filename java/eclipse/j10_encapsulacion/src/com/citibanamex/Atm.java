package com.citibanamex;

public class Atm {
	
	private int serialNumber;
	private double balance;
	
	static int counter = 0;
	
	public Atm() {
		this.serialNumber = ++counter;
		this.balance = 10_000;
	}
	
	// agregar un constructor sobrecargado que acepte un monto para iniciar el balance
	public Atm(double balance) {
		this();
		this.balance = balance;
	}
	
	/**
	 * Constructor sobrecargado que acepta un balance en formato String
	 */
	
	public Atm(String balance) {
		this(Double.parseDouble(balance));
	}
	
	
	public int getSerialNumber() {
		return this.serialNumber;
	}
	
	private void setSerialNumber(int serialNumber) {
		this.serialNumber = serialNumber;
	}
	
	public double getBalance(){
		return this.balance;
	}
	
	private void setBalance(double balance) { 
		this.balance = balance;
	}
	
	public void setBalance(String balance) {
		setBalance( Double.parseDouble(balance) );
	}
	
	public void deposit(double amount){
		if ( amount > 0) {
			setBalance(getBalance() + amount);
		} else {
			// System.out.println("No se permiten despósitos igual o menor a cero");
			throw new IllegalArgumentException("No se permiten depositos ifua o menor a cero");
		}
	}
	
	// sobrecarga de deposito con string
	
	public void deposit(String amount) {
		deposit(Double.parseDouble(amount));
	}
	
	// Verificar que el amount no sea negativo o mayor al balance 
	// enviar un mensaje acorde
	public void withdraw(double amount) {
		if( amount <= 0 ) {
			throw new IllegalArgumentException("Cantidad menor o igual a cero");
		} else if( amount > getBalance() ) {
			throw new IllegalStateException("Fondos insuficientes");
		} else {
			setBalance( getBalance() - amount  );
		}
	}
	
	public void withdraw(String amount) {
		withdraw(Double.parseDouble(amount));
	}
	
}
