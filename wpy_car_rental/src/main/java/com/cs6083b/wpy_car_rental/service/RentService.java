package com.cs6083b.wpy_car_rental.service;

import java.util.List;

import com.cs6083b.wpy_car_rental.model.Rent;
import com.cs6083b.wpy_car_rental.repository.projection.RentItem;

public interface RentService {
    Rent saveRent(Rent rent);

    List<RentItem> findRentItemsOfUser(Long userId);

}
