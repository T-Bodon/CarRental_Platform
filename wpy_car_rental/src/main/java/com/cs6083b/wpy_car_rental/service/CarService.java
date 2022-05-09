package com.cs6083b.wpy_car_rental.service;

import java.util.List;
import com.cs6083b.wpy_car_rental.model.Car;

public interface CarService {
    
    Car saveCar(Car car);

    void deleteCar(Long id);

    List<Car> findAllCars();
}
