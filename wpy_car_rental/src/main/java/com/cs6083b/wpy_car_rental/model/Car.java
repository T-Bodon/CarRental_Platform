package com.cs6083b.wpy_car_rental.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "car")
public class Car
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false) // descrption -> type
    private String description;

    @Column(name = "price", nullable = false) // price -> daliy rate services
    private Double price;

    @Column(name = "over_mil_fee", nullable = false)
    private Double over_mil_fee;

    @Column(name = "lic_pla_no", nullable = false)
    private String lic_pla_no;

    @Column(name = "start_odo", nullable = false)
    private Double start_odo;

    @Column(name = "year", nullable = false)
    private String year;

    @Column(name = "imgsrc", nullable = false)
    private String imgsrc;

    @Column(name = "create_time", nullable = false)
    private LocalDateTime createTime;

    

    //@OneToMany(fetch = FetchType.LAZY, mappedBy = "car")
    //private Set<Rent> rentList;
}
