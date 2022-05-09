package com.cs6083b.wpy_car_rental.service;

import java.time.LocalDateTime;
import java.util.List;

import com.cs6083b.wpy_car_rental.model.Car;
import com.cs6083b.wpy_car_rental.repository.CarRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service 
public class CarServiceImpl implements CarService {
    @Autowired
    private CarRepository carRepository;
     
    @Override
    public Car saveCar(Car car)
    {
        car.setCreateTime(LocalDateTime.now());

        return carRepository.save(car);
    }

    @Override
    public void deleteCar(Long id)
    {
        carRepository.deleteById(id);
    }

    @Override
    public List<Car> findAllCars()
    {
        return carRepository.findAll();
    } 
}
