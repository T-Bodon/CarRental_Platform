import { useEffect, useRef, useState } from 'react';
import CarService from '../../services/car.service';
import { CarSave } from '../../components/car-save';
import Car from '../../models/car';
import { CarDelete } from '../../components/car-delete';


const AdminPage = () => {

    const [carList, setCarList] = useState([]);
    const [selectedCar, setSelectedCar] = useState(new Car('', '', '', '', '', '', '', ''));
    const [errorMessage, setErrorMessage] = useState('');

    const saveComponent = useRef();
    const deleteComponent = useRef();

    useEffect(() => {
        CarService.getAllCars().then((response) => {
            setCarList(response.data);
        });
    }, []);

    const createCarRequest = () => {
        setSelectedCar(new Car('', '', '', '', '', '', '',''));
        saveComponent.current?.showCarModal();
    };

    const editCarRequest = (item) => {
      setSelectedCar(Object.assign({}, item));
        saveComponent.current?.showCarModal();
    };

    const deleteCarRequest = (car) => {
        setSelectedCar(car);
        deleteComponent.current?.showDeleteModal();
    };

    const saveCarWatcher = (car) => {
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

    const deleteCar = () => {
      CarService.deleteCar(selectedCar).then(_ => {
          setCarList(carList.filter(x => x.id !== selectedCar.id));
      }).catch(err => {
          setErrorMessage('Unexpected error occurred.');
          console.log(err);
      });
    };

    return (
        <div>
            <div className="container">
                <div className="pt-5">

                    {errorMessage &&
                    <div className="alert alert-danger">
                        {errorMessage}
                    </div>
                    }

                    <div className="card">
                        <div className="card-header">

                            <div className="row">
                                <div className="col-6">
                                    <h3>All Cars</h3>
                                </div>

                                <div className="col-6 text-end">
                                    <button className="btn btn-primary" onClick={() => createCarRequest()}>
                                        Create Car
                                    </button>
                                </div>

                            </div>

                        </div>
                        <div className="card-body">
                            <table className="table table-striped">

                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Daily Rate</th>
                                    <th scope="col">Over Mileage</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">License</th>
                                    <th scope="col">Odometer</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>

                                {carList.map((item, ind) =>
                                    <tr key={item.id}>
                                        <th scope="row">{ind + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{`$ ${item.price}`}</td>
                                        <td>{`$ ${item.over_mil_fee}`}</td>
                                        <td>{item.year}</td>
                                        <td>{item.lic_pla_no}</td>
                                        <td>{item.start_odo}</td>
                                        <td>{new Date(item.createTime).toLocaleDateString()}</td>
                                        <td>
                                            <button className="btn btn-primary me-1" onClick={() => editCarRequest(item)}>
                                                Edit
                                            </button>
                                            <button className="btn btn-danger" onClick={() => deleteCarRequest(item)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )}


                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>
            </div>

            <CarSave ref={saveComponent} car={selectedCar} onSaved={(p) => saveCarWatcher(p)}/>
            <CarDelete ref={deleteComponent} onConfirmed={() => deleteCar()}/>

        </div>
    );
};

export {AdminPage};
