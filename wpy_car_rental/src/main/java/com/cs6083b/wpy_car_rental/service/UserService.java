package com.cs6083b.wpy_car_rental.service;

import java.util.Optional;

import com.cs6083b.wpy_car_rental.model.Role;
import com.cs6083b.wpy_car_rental.model.User;

public interface UserService {
    User saveUser(User user);

    Optional<User> findByUsername(String username);
    
    void changeRole(Role newRole, String username);
}
