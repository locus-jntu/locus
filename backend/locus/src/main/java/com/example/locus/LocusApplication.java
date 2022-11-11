package com.example.locus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class LocusApplication {

	public static void main(String[] args) {
		SpringApplication.run(LocusApplication.class, args);
	}

}
