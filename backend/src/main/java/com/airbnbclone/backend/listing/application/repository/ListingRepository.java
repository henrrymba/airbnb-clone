package com.airbnbclone.backend.listing.application.repository;

import com.airbnbclone.backend.listing.domain.Listing;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface ListingRepository extends JpaRepository<Listing, UUID> {
    // Spring Data JPA ya nos da findById y findAll
}
