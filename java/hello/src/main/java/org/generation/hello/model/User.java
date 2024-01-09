package org.generation.hello.model;

import java.util.ArrayList;
import java.util.List;

public class User {
	
	private String firstname;
	private String lastname;
	private int cohorte;
	
	
	/**
	 * @param firstname
	 * @param lastname
	 * @param cohorte
	 */
	public User(String firstname, String lastname, int cohorte) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.cohorte = cohorte;
	}
	
	public User(){
		
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public int getCohorte() {
		return cohorte;
	}
	public void setCohorte(int cohorte) {
		this.cohorte = cohorte;
	}
	
	public static User createTony() {
		User tony = new User();
		tony.setCohorte(34);
		tony.setFirstname("Tony");
		tony.setLastname("Tony");
		return tony;
	}
	
	public static List<User> usersMock() {
		List<User> users = new ArrayList<>();
		users.add(new User("Jorge","R",34));
		users.add(new User("Cinthia","C",34));
		users.add(new User("Rafael","C",34));
		users.add(new User("Jocelyn","P",34));

		return users;
	}
	
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("User [firstname=");
		builder.append(firstname);
		builder.append(", lastname=");
		builder.append(lastname);
		builder.append(", cohorte=");
		builder.append(cohorte);
		builder.append("]");
		return builder.toString();
	}
	
	/*
	 * @Override
	public String toString(){
		return "User [firstname =" + firstname  + " lastname= " + lastname + " cohorte= " + cohorte + " ]";
	}
	 */
	
	

}
