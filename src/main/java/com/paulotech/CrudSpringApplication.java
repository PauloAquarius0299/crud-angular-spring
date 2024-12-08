package com.paulotech;

import com.paulotech.model.Anime;
import com.paulotech.repositories.AnimeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(AnimeRepository animeRepository){
		return args -> {
			animeRepository.deleteAll();

			List<Anime> animes = Arrays.asList(
					new Anime("1", "Dragon Ball Z", "ação", "Um jovem Saiyajin chamado Goku protege a Terra enfrentando inimigos poderosos."),
					new Anime("2", "Naruto", "aventura", "A história de Naruto Uzumaki, um ninja em busca de se tornar Hokage e ser reconhecido."),
					new Anime("3", "One Piece", "fantasia", "Luffy e sua tripulação navegam em busca do lendário tesouro One Piece."),
					new Anime("4", "Attack on Titan", "ação", "Humanos lutam pela sobrevivência contra titãs em um mundo pós-apocalíptico."),
					new Anime("5", "Death Note", "suspense", "Um estudante encontra um caderno que permite matar qualquer pessoa ao escrever seu nome."),
					new Anime("6", "My Hero Academia", "super", "Em um mundo onde a maioria tem superpoderes, Deku treina para se tornar um herói lendário."),
					new Anime("7", "Demon Slayer", "ação", "Tanjiro luta contra demônios para vingar sua família e salvar sua irmã Nezuko."),
					new Anime("8", "Fullmetal Alchemist: Brotherhood", "fantasia", "Os irmãos Elric buscam a Pedra Filosofal para restaurar seus corpos após uma transmutação falha."),
					new Anime("9", "Sword Art Online", "ficção", "Jogadores ficam presos em um MMORPG mortal e precisam vencer para sobreviver."),
					new Anime("10", "Bleach", "ação", "Ichigo Kurosaki obtém poderes de Shinigami e protege o mundo dos Hollows.")
			);

			animeRepository.saveAll(animes);
		};
	}

}
