package com.paulotech;

import com.paulotech.model.Anime;
import com.paulotech.repositories.AnimeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(AnimeRepository animeRepository){
		return args -> {
			animeRepository.deleteAll();

			Anime c = new Anime();
			c.setName("Dragon Ball Z");
			c.setCategory("ação");
			c.setDescription("lorem cmdcom cmcoxmc,sc smcomcso.");

			animeRepository.save(c);
		};
	}

}
