package com.airbnbclone.backend.listing.infrastructure.controller;

import com.airbnbclone.backend.listing.application.repository.ListingRepository;
import com.airbnbclone.backend.listing.domain.Listing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/listings")
public class ListingController {

    @Autowired
    private ListingRepository listingRepository;

    // 1. Obtener todos los listings (Para la Home Page)
    @GetMapping
    public List<Listing> getAllListings() {
        return listingRepository.findAll();
    }

    // 2. Obtener un listing por ID (Para Listing Details)
    @GetMapping("/{id}")
    public ResponseEntity<Listing> getListingById(@PathVariable UUID id) {
        return listingRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
