package org.generation.app;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


/*
 *  By extending CrudRepository, CustomerRepository inherits several methods for working with Customer persistence, 
 *  including methods for saving, deleting, and finding Customer entities.

Spring Data JPA also lets you define other query methods by 
declaring their method signature. For example, CustomerRepository includes the findByLastName() method.
 */
public interface CustomerRepository extends CrudRepository<Customer, Long> {

  List<Customer> findByLastName(String lastName);

  Customer findById(long id);
}