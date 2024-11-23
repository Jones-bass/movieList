package com.br.movie.movie_list.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movies")
public class MovieController {

    @Autowired
    private IMovieRepository movieRepository;

    @PostMapping("/")
    public MovieModel create(@RequestBody MovieModel movieModel) {

        var task = this.movieRepository.save(movieModel);
        return task;
    }
}
