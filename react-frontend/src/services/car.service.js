import { BASE_API_URL } from '../common/constants';
import axios from 'axios';
import { authHeader } from './base.service';


const API_URL = BASE_API_URL + '/api/car';

class CarService {

    saveCar(car) {
        return axios.post(API_URL, car, {headers: authHeader()});
    }

    deleteCar(car) {
        return axios.delete(API_URL + '/' + car.id, {headers: authHeader()});
    }

    getAllCars() {
        return axios.get(API_URL);
    }
}

export default new CarService();
