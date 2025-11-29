package net.ayoub.billingservice.web;

import net.ayoub.billingservice.entities.Bill;
import net.ayoub.billingservice.repository.BillRepository;
import net.ayoub.billingservice.repository.ProductItemRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BillRestController {
    private BillRepository billRepository;
    private ProductItemRepository productItemRepository;

    public BillRestController(BillRepository billRepository, ProductItemRepository productItemRepository) {
        this.billRepository = billRepository;
        this.productItemRepository = productItemRepository;
    }

    @GetMapping("/bills/{id}")
    public Bill getBill(@PathVariable(name = "id") Long id) {
        return billRepository.findById(id).get();
    }
}
