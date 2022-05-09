export default class Rent {
    constructor(userId, carId, price, location, start_odo, rental_days, coupon, payment, rentTime, id) {
        this.userId = userId;
        this.carId = carId;
        this.price = price;
        this.start_odo = start_odo;
        
        this.location = location;
        this.rental_days = rental_days;
        this.coupon = coupon;
        this.payment = payment;
        
        this.rentTime = rentTime;
        this.id = id;
    }
}
