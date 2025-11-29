package net.ayoub.inventoryservice;

import net.ayoub.inventoryservice.entities.Product;
import net.ayoub.inventoryservice.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class InventoryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventoryServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start(ProductRepository productRepository) {
		return args -> {
			productRepository.save(new Product(null, "Computer Desk", 1200, 5));
			productRepository.save(new Product(null, "MacBook Pro", 12000, 2));
			productRepository.save(new Product(null, "Printer", 300, 10));
			productRepository.findAll().forEach(p -> {
				System.out.println(p.toString());
			});
		};
	}
}
