package com.airbnbclone.backend.listing.domain;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;
import java.util.List;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Entity
@Table(name = "listing")
@Data // de Lombok (getter, setter, toString)
public class Listing {

    @Id
    private UUID id;

    private String title;
    
    private String description;
    
    @Column(name = "price_per_night")
    private BigDecimal pricePerNight; // Usar BigDecimal para dinero

    private String location;

    @Column(name = "guest_count")
    private Integer guestCount;

    // Mapea la columna ARRAY de Postgres a una Lista de Strings en Java
    @Column(name = "image_url_list")
    @JdbcTypeCode(SqlTypes.ARRAY)
    private List<String> imageUrlList;

    @Column(name = "is_guest_favorite")
    private Boolean isGuestFavorite;
    
    @Column(name = "created_at")
    private Instant createdAt;
}
