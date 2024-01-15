package org.generation.app.entity;

import java.security.Timestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Entity
@Table(name="product_order")
public class Order {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name ="total")
	private double totalAmount;
	@Column (name="fecha_compra")
	private Timestamp purchaseDate;
	
	@ManyToOne
	@JoinColumn(name="fk_user_id", nullable=false)
	@JsonIgnoreProperties({"role", "birthdate"})
	private User user;
	
}
