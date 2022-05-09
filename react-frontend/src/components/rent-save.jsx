import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import Rent from '../models/rent';
import RentService from '../services/rent.service';
import { Modal } from 'react-bootstrap';

//const currentUser = useSelector(state => state.user);
//const [infoMessage, setInfoMessage] = useState('');

const RentSave = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        //interaction with parent
        showRentModal() {
            setTimeout(() => {
                setShow(true);
            }, 0);
        }
    }));

    useEffect(() => {
        setRent(props.rent);
    }, [props.rent]);

    const [rent, setRent] = useState(new Rent('','','','','','','',''));
    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);

    const saveRent = (e) => {
      e.preventDefault();

      setSubmitted(true);

      //

      RentService.saveRent(rent).then(response => {
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

      setRent((prevState => {
          return {
              ...prevState,
              [name]: value
          };
      }));
    };

    return (
        
        <Modal show={show}>
            <form onSubmit={(e) => saveRent(e)}
            noValidate
            className={submitted ? 'was-validated' : ''}>


                <div className="modal-header">
                    <h5 className="modal-title">Order Details</h5>
                    <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                </div>

                <div className="modal-body">

                    {errorMessage &&
                    <div className="alert alert-danger">
                        {errorMessage}
                    </div>
                    }


                    <div className="form-group">
                        <label htmlFor="userId">userId: </label>
                        <input
                            type="number"
                            name="userId"
                            placeholder="Enter your userId"
                            className="form-control"
                            value={rent.userId}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            userId is required.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="carId">carId: </label>
                        <input
                            type="number"
                            name="carId"
                            placeholder="Enter your choosen carId"
                            className="form-control"
                            value={rent.carId}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            carId is required.
                        </div>
                    </div>


                    <div className="form-group">
                        <label htmlFor="price">Price: </label>
                        <input
                            type="number"
                            name="price"
                            placeholder="The Daily Service Fee is: "
                            className="form-control"
                            value={rent.price}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            The Daily Service Fee is required.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="start_odo">start_odo: </label>
                        <input
                            type="number"
                            name="start_odo"
                            placeholder="The Start Odometer is:"
                            className="form-control"
                            value={rent.start_odo}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            The Start Odometer is required.
                        </div>
                    </div>




                    <div className="form-group">
                        <label htmlFor="rental_days">Rental Days: </label>
                        <input
                            type="number"
                            name="rental_days"
                            placeholder="Rental Days"
                            className="form-control"
                            value={rent.rental_days}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Rental Days is required.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Choose a Pick Up Location</label>
                        <textarea
                            name="location"
                            placeholder="New York / Chicago / Seattle"
                            className="form-control"
                            value={rent.location}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Pick Up Location is required.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="coupon">Coupon Rate: </label>
                        <input
                            type="number"
                            min="0"
                            step="any"
                            name="coupon"
                            placeholder="Coupon Rate:  0 - 100"
                            className="form-control"
                            value={rent.coupon}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Coupon Rate Service is required and should be greater than 0.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="payment">Choose Payment: </label>
                        <input
                            type="text"
                            name="payment"
                            placeholder="Credit / Debit / Gift Card"
                            className="form-control"
                            value={rent.payment}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Payment is required.
                        </div>
                    </div>

                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>Cancel</button>
                    <button type="submit" className="btn btn-primary" >Confirm</button>
                </div>
            </form>
        </Modal>
    );

});

export {RentSave};

