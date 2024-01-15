package org.generation.app.entity;


import org.generation.app.entity.compositeKey.OrderProductKey;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Entity
@Table(name="order_has_product")
public class order_has_products {

	// Llave compuesta
	@EmbeddedId
	OrderProductKey id;
	
	@Column(name = "quantity")
	private int quantity;
	
	@ManyToOne
	@MapsId("oderId")
	@JsonIgnoreProperties("user")
	private Order order;
	
	@ManyToOne
	@MapsId("productId")
	private Product product;
	
}

