package com.br.movie.movie_list.model;

import java.time.LocalDateTime;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "table_movies")
public class MovieModel {

    @Id
    @GeneratedValue(generator = "UUID")
    private UUID id;

    @Column(length = 40)
    private String title;
    private String category;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
