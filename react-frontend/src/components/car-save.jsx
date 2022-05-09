import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import Car from '../models/car';
import CarService from '../services/car.service';
import { Modal } from 'react-bootstrap';


const CarSave = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        //interaction with parent
        showCarModal() {
            setTimeout(() => {
                setShow(true);
            }, 0);
        }
    }));

    useEffect(() => {
        setCar(props.car);
    }, [props.car]);

    const [car, setCar] = useState(new Car('', '', '', '', '', '', '', ''));
    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);

    const saveCar = (e) => {
      e.preventDefault();

      setSubmitted(true);

      if (!car.name || !car.description || !car.price) {
          return;
      }

      CarService.saveCar(car).then(response => {
          //...
          props.onSaved(response.data);
          setShow(false);
          setSubmitted(false);
      }).catch(err => {
          setErrorMessage('Unexpected error occurred.');
          console.log(err);
      });
    };

    //<input name="x" value="y">
    const handleChange = (e) => {
      const {name, value} = e.target;

      setCar((prevState => {
          return {
              ...prevState,
              [name]: value
          };
      }));
    };

    return (
        <Modal show={show}>
            <form onSubmit={(e) => saveCar(e)}
            noValidate
            className={submitted ? 'was-validated' : ''}>

                <div className="modal-header">
                    <h5 className="modal-title">Car Details</h5>
                    <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                </div>

                <div className="modal-body">

                    {errorMessage &&
                    <div className="alert alert-danger">
                        {errorMessage}
                    </div>
                    }

                    <div className="form-group">
                        <label htmlFor="name">Model: </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Model"
                            className="form-control"
                            value={car.name}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Model is required.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Type: </label>
                        <textarea
                            name="description"
                            placeholder="Type"
                            className="form-control"
                            value={car.description}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                             Type Description is required.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Daily Rate Service: </label>
                        <input
                            type="number"
                            min="1"
                            step="any"
                            name="price"
                            placeholder="Daily Rate Service"
                            className="form-control"
                            value={car.price}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Daily Rate Service is required and should be greater than 0.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="over_mil_fee">Over Mileage Fee: </label>
                        <input
                            type="number"
                            min="1"
                            step="any"
                            name="over_mil_fee"
                            placeholder="Over Mileage Fee"
                            className="form-control"
                            value={car.over_mil_fee}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Over Mileage Fee is required and should be greater than 0.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lic_pla_no">License Plate Number: </label>
                        <input
                            type="text"
                            name="lic_pla_no"
                            placeholder="License Plate Number"
                            className="form-control"
                            value={car.lic_pla_no}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            License Plate Number is required.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="year">Year: </label>
                        <input
                            type="text"
                            name="year"
                            placeholder="Year"
                            className="form-control"
                            value={car.year}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Year is required.
                        </div>
                    </div>


                    <div className="form-group">
                        <label htmlFor="start_odo">Odometer: </label>
                        <input
                            type="number"
                            min="1"
                            step="any"
                            name="start_odo"
                            placeholder="Start Odometer"
                            className="form-control"
                            value={car.start_odo}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Start Odometer is required and should be greater than 0.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="imgsrc">ADD Image URL: </label>
                        <input
                            type="text"
                            name="imgsrc"
                            placeholder="ADD Image URL"
                            className="form-control"
                            value={car.imgsrc}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Image URL is required.
                        </div>
                    </div>

                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>Close</button>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
            </form>
        </Modal>
    );

});

export {CarSave};
