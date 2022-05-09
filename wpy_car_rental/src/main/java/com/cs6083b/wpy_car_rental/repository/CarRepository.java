package com.cs6083b.wpy_car_rental.repository;

import com.cs6083b.wpy_car_rental.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
// link to the DB
public interface CarRepository extends JpaRepository<Car, Long>{
} 