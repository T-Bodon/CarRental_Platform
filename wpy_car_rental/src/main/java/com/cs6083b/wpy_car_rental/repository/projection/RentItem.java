package com.cs6083b.wpy_car_rental.repository.projection;

import java.time.LocalDateTime;

public interface RentItem{
    // Add 3 methods for Rent which are not given by API
    String getName();
    Double getPrice();
    LocalDateTime getRentTime();
}
