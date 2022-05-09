export default class Car {
    constructor(name, description, price, createTime, id, over_mil_fee, year, lic_pla_no, start_odo, imgsrc) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.over_mil_fee = over_mil_fee;
        this.year = year;
        this.lic_pla_no = lic_pla_no;
        this.start_odo = start_odo;
        this.imgsrc = imgsrc;
        this.createTime = createTime;
        this.id = id;
    }
}
