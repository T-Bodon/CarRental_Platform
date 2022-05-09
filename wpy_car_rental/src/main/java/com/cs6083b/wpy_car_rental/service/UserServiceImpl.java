package com.cs6083b.wpy_car_rental.service;

import java.time.LocalDateTime;
import java.util.Optional;

import javax.transaction.Transactional;

import com.cs6083b.wpy_car_rental.model.Role;
import com.cs6083b.wpy_car_rental.model.User;
import com.cs6083b.wpy_car_rental.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User saveUser(User user){
        
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER);
        user.setCreateTime(LocalDateTime.now());

        return userRepository.save(user);
    }

    @Override
    public Optional<User> findByUsername(String username){
        return userRepository.findByUsername(username);
    }

    @Override
    @Transactional //Transactional is required when excuting delete/update query.  
    public void changeRole(Role newRole, String username){
        userRepository.updateUserRole(username, newRole);
    }
}
