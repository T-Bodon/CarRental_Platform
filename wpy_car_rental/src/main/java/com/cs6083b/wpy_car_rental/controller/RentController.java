package com.cs6083b.wpy_car_rental.controller;

import com.cs6083b.wpy_car_rental.model.Rent;
import com.cs6083b.wpy_car_rental.security.UserPrinciple;
import com.cs6083b.wpy_car_rental.service.RentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/rent") //pre-path
public class RentController
{
    @Autowired
    private RentService rentService;


    @PostMapping //api/rent
    public ResponseEntity<?> saveRent(@RequestBody Rent rent)
    {
        return new ResponseEntity<>(rentService.saveRent(rent), HttpStatus.CREATED);
    }

    @GetMapping //api/rent
    public ResponseEntity<?> getAllRentsOfUser(@AuthenticationPrincipal UserPrinciple userPrinciple)
    {
        return ResponseEntity.ok(rentService.findRentItemsOfUser(userPrinciple.getId()));
    }
}