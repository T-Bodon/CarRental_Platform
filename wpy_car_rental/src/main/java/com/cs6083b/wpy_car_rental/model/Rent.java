package com.cs6083b.wpy_car_rental.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "rent")
public class Rent
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id", insertable = false, updatable = false)//It is only for foreign key.
    private User user;

    @Column(name = "car_id", nullable = false)
    private Long carId;

    // ADD
    @Column(name = "rental_days", nullable = false)
    private int rental_days;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "car_id", referencedColumnName = "id", insertable = false, updatable = false)
    //@JoinColumn(name = "start_odo", referencedColumnName = "start_odo", insertable = false, updatable = false)
    private Car car;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "rent_time", nullable = false)
    private LocalDateTime rentTime;

    // ADD
    @Column(name = "location", nullable = false)
    private String location;

    @Column(name = "start_odo", nullable = false)
    private String start_odo;
   
    @Column(name = "coupon", nullable = false)
    private int coupon;

    @Column(name = "payment", nullable = false)
    private String payment;

}