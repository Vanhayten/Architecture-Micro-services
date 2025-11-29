package net.ayoub.gatewayservice.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    @Bean
    RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("customer-service", r -> r.path("/customers/**")
                        .uri("http://localhost:8081/"))
                .route("inventory-service", r -> r.path("/products/**")
                        .uri("http://localhost:8082/"))
                .build();
    }
}
