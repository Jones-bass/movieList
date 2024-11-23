package com.br.movie.movie_list.movies;

import java.time.LocalDateTime;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "tb_movies")
public class MovieModel {

    @Id
    @GeneratedValue(generator = "UUID")
    private UUID id;

    private String title;
    private String category;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
