package net.ayoub.billingservice;

import net.ayoub.billingservice.entities.Bill;
import net.ayoub.billingservice.entities.ProductItem;
import net.ayoub.billingservice.repository.BillRepository;
import net.ayoub.billingservice.repository.ProductItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;
import java.util.Random;

@SpringBootApplication
public class BillingServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(BillingServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner start(BillRepository billRepository, ProductItemRepository productItemRepository) {
        return args -> {
            Bill bill1 = billRepository.save(new Bill(null, new Date(), 1L, null));
            productItemRepository.save(new ProductItem(null, 1L, 1200, 5, bill1));
            productItemRepository.save(new ProductItem(null, 2L, 12000, 2, bill1));
            productItemRepository.save(new ProductItem(null, 3L, 300, 10, bill1));
        };
    }
}
