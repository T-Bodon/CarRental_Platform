package com.cs6083b.wpy_car_rental.service;

import com.cs6083b.wpy_car_rental.model.User;

public interface AuthenticationService {
    
    User signInAndReturnJWT(User signInRequest);
}
