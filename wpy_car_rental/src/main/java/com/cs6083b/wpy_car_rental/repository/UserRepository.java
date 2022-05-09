package com.cs6083b.wpy_car_rental.repository;

import java.util.Optional;

import com.cs6083b.wpy_car_rental.model.Role;
import com.cs6083b.wpy_car_rental.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UserRepository extends JpaRepository<User, Long>{
    //findBy + fieldName
    Optional<User> findByUsername(String username);

    @Modifying
    @Query("update User set role = :role where username = :username")
    void updateUserRole(@Param("username") String username, @Param("role")Role role);
}

