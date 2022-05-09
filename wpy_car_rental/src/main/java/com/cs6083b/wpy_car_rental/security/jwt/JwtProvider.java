package com.cs6083b.wpy_car_rental.security.jwt;

import com.cs6083b.wpy_car_rental.security.UserPrinciple;
import org.springframework.security.core.Authentication;
import javax.servlet.http.HttpServletRequest;


public interface JwtProvider
{
    String generateToken(UserPrinciple auth);

    Authentication getAuthentication(HttpServletRequest request);

    boolean isTokenValid(HttpServletRequest request);
}
