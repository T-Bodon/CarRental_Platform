package com.cs6083b.wpy_car_rental.service;

import java.time.LocalDateTime;
import java.util.List;

import com.cs6083b.wpy_car_rental.model.Rent;
import com.cs6083b.wpy_car_rental.repository.RentRepository;
import com.cs6083b.wpy_car_rental.repository.projection.RentItem;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RentServiceImpl implements RentService
{
    /*
    @Autowired
    private RentRepository rentRepository;
    */
    private final RentRepository rentRepository;

    public RentServiceImpl(RentRepository rentRepository)
    {
        this.rentRepository = rentRepository;
    }

    @Override
    public Rent saveRent(Rent rent)
    {
        rent.setRentTime(LocalDateTime.now());

        return rentRepository.save(rent);
    }

    @Override
    public List<RentItem> findRentItemsOfUser(Long userId)
    {
        return rentRepository.findAllRentsOfUser(userId);
    }
}


