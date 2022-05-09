import { useEffect, useState, useRef } from 'react';
import CarService from '../../services/car.service';
import RentService from '../../services/rent.service';
import { useSelector } from 'react-redux';
import Rent from '../../models/rent';
import './home.page.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { RentSave } from '../../components/rent-save';
import carIcon from "../../123.jpg";


const HomePage = () => {

    //const carIconUrl = carIcon;
    //const imgUrl = 'logo.png';
    const saveComponent = useRef();

    const [selectedRent, setSelectedRent] = useState(new Rent('','','','','','','',''));

    const [carList, setCarList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [infoMessage, setInfoMessage] = useState('');

    const currentUser = useSelector(state => state.user);

    useEffect(() => {
        CarService.getAllCars().then((response) => {
            setCarList(response.data);
        });
    }, []);

    
    const editRentRequest = (item) => {
        setSelectedRent(Object.assign({}, item));
          saveComponent.current?.showRentModal();
      };
  
    
      
    const rent = (car) => {
        if (!currentUser?.id) {
            setErrorMessage('You should login to buy a car.');
            return;
        }

        const rent = new Rent('','','','','','','','');

        RentService.saveRent(rent).then(() => {
            //createRentRequest()
            //editRentRequest(car)
            setInfoMessage('Mission is completed.');
            
        }).catch((err) => {
            setErrorMessage('Unexpected error occurred.');
            console.log(err);
        });
    };

    const createRentRequest = () => {
        //rent(car)
        setSelectedRent(new Rent('','','','','','','',''));
        saveComponent.current?.showRentModal();
        setInfoMessage('Completed');
    };


    const saveRentWatcher = (car) => {
        let itemIndex = carList.findIndex(item => item.id === car.id);

        if (itemIndex !== -1) {
            const newList = carList.map((item) => {
                if (item.id === car.id) {
                    return car;
                }
                return item;
            });
            setCarList(newList);
        } else {
            const newList = carList.concat(car);
            setCarList(newList);
        }
    };


    return (
        <div className="container p-3">

            {errorMessage &&
            <div className="alert alert-danger">
                {errorMessage}
            </div>
            }

            {infoMessage &&
            <div className="alert alert-success">
                {infoMessage}
            </div>
            }

            <div className="d-flex flex-wrap">
                {carList.map((item, ind) =>
                    <div key={item.id} className="card m-2 home-card">

                        

                        <div className="card-body">
                            <img className="car-icon" src={require('../../' + item.imgsrc)} alt=""/>
                            <div className="card-title text-uppercase">{item.name}</div>
                            <div className="card-subtitle text-muted">{item.description}</div>
                        </div>

                        
                        


                        <div className="row mt-2 p-2">
                            <div className="col-6 mt-2 ps-3">
                                {`$ ${item.price}  / Day`}
                            </div>
                            <div className="col-6">
                                <button
                                    
                                    className="btn btn-outline-success w-100" onClick={() => createRentRequest()}>
                                    Rent
                                </button>

                                
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                )}
            
            </div>

            <RentSave ref={saveComponent} rent={selectedRent} onSaved={(p) => saveRentWatcher(p)}/>
            
        </div>
        
    );
};

export {HomePage};
