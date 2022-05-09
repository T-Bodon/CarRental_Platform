package com.cs6083b.wpy_car_rental.repository;

import java.util.List;

import com.cs6083b.wpy_car_rental.model.Rent;
import com.cs6083b.wpy_car_rental.repository.projection.RentItem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/*
public interface RentRepository extends JpaRepository<Rent, Long>{
    // 大坑
    @Query(value="select " +
            "prd.name as name, pur.price as price, pur.rentTime as rentTime " +
            "from Rent pur left join Car prd on prd.id = pur.carId " +
            "where pur.userId = :userId",nativeQuery=true)

    List<RentItem> findAllRentsOfUser(@Param("userId") Long userId);
}*/

public interface RentRepository extends JpaRepository<Rent, Long>
{
    @Query("select " +
            "prd.name as name, pur.price as price, pur.rentTime as rentTime " +
            "from Rent pur left join Car prd on prd.id = pur.carId " +
            "where pur.userId = :userId")
    List<RentItem> findAllRentsOfUser(@Param("userId") Long userId);
}

