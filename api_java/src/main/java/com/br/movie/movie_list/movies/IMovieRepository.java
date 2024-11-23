package com.br.movie.movie_list.movies;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;


public interface IMovieRepository extends JpaRepository<MovieModel, UUID> {
}
