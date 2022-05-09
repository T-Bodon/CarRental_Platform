import { BASE_API_URL } from '../common/constants';
import axios from 'axios';
import { authHeader } from './base.service';


const API_URL = BASE_API_URL + '/api/rent';

class RentService {

    saveRent(Rent) {
        return axios.post(API_URL, Rent, {headers: authHeader()});
    }

    getAllRentItems() {
        return axios.get(API_URL, {headers: authHeader()});
    }

}

export default new RentService();
