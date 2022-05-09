package com.cs6083b.wpy_car_rental.controller;

import com.cs6083b.wpy_car_rental.model.Car;
import com.cs6083b.wpy_car_rental.service.CarService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/car")//pre-path
public class CarController
{
    @Autowired
    private CarService carService;

    @PostMapping //api/car
    public ResponseEntity<?> saveCar(@RequestBody Car car)
    {
        return new ResponseEntity<>(carService.saveCar(car), HttpStatus.CREATED);
    }

    @DeleteMapping("{carId}") //api/car/{carId}
    public ResponseEntity<?> deleteCar(@PathVariable Long carId)
    {
        carService.deleteCar(carId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping //api/car
    public ResponseEntity<?> getAllCars()
    {
        return new ResponseEntity<>(carService.findAllCars(), HttpStatus.OK);
    }
}
