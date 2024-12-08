package com.paulotech.controllers;


import com.paulotech.repositories.AnimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/animes")
public class Animes {

    @Autowired
    private AnimeRepository animeRepository;

    @GetMapping("/")
    public List<com.paulotech.model.Anime> listaAnimes() {
        return animeRepository.findAll();
    }
}
