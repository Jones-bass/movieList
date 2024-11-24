package com.br.movie.movie_list.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.movie.movie_list.model.MovieModel;
import com.br.movie.movie_list.repository.IMovieRepository;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    @Autowired
    private IMovieRepository movieRepository;

    @SuppressWarnings("rawtypes")
    @PostMapping("/create")
    public ResponseEntity create(@RequestBody MovieModel movieModel) {
        // Verifica se já existe um filme com o mesmo título
        var existingMovie = movieRepository.findByTitle(movieModel.getTitle());

        if (existingMovie.isPresent()) {
            return ResponseEntity.badRequest().body("Já existe Filme com esse título.");
        }

        var savedMovie = movieRepository.save(movieModel);
        return ResponseEntity.ok(savedMovie);
    }

    @GetMapping("/list")
    public ResponseEntity<List<MovieModel>> list() {
        // Busca todos os filmes no banco de dados
        List<MovieModel> movies = movieRepository.findAll();

        // Retorna a lista de filmes com status 200 OK
        return ResponseEntity.ok(movies);
    }

}
