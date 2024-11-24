package com.br.movie.movie_list.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.movie.movie_list.model.MovieModel;

public interface IMovieRepository extends JpaRepository<MovieModel, UUID> {
  Optional<MovieModel> findByTitle(String title);
}
