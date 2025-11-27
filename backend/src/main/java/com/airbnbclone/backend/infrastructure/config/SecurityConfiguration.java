package com.airbnbclone.backend.infrastructure.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Solo para dev
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll() // ⚠️ ¡OJO! Permite todo. Solo para empezar.
            );
        return http.build();
    }
}
