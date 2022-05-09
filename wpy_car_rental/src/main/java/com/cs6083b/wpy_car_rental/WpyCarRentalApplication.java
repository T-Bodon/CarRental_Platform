package com.cs6083b.wpy_car_rental;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class WpyCarRentalApplication {

	/*
	@Bean
	public PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}*/

	public static void main(String[] args) {
		SpringApplication.run(WpyCarRentalApplication.class, args);
	}

}
