import { useEffect, useState } from 'react';
import User from '../../models/user';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticationService from '../../services/authentication.service';
import './register.page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


const RegisterPage = () => {

    const [user, setUser] = useState(new User('', '', ''));
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const currentUser = useSelector(state => state.user);

    const navigate = useNavigate();

    //mounted
    useEffect(() => {
        if (currentUser?.id) {
            //navigate
            navigate('/profile');
        }
    }, []);

    //<input name="x" value="y" onChange=(event) => handleChange(event)>
    const handleChange = (e) => {
      const {name, value} = e.target;

      setUser((prevState => {
          //e.g: prevState ({user: x, pass: x}) + newKeyValue ({user: xy}) => ({user: xy, pass: x})
          return {
              ...prevState,
              [name]: value
          };
      }));
    };

    const handleRegister = (e) => {

        e.preventDefault();

      setSubmitted(true);

      if (!user.username || !user.password || !user.name) {
          return;
      }

      setLoading(true);

      AuthenticationService.register(user).then(_ => {
          navigate('/login');
      }).catch(error => {
         console.log(error);
         if (error?.response?.status === 409) {
             setErrorMessage('username or password is not valid.');
         } else {
             setErrorMessage('Unexpected error occurred.');
         }
         setLoading(false);
      });
    };

    return (
        <div className="container mt">
            <div className="card ms-auto me-auto p-3 shadow-lg custom-card">

                <FontAwesomeIcon icon={faUserCircle} className="ms-auto me-auto user-icon"/>

                {errorMessage &&
                <div className="alert alert-danger">
                    {errorMessage}
                </div>
                }

                <form
                    onSubmit={(e) => handleRegister(e)}
                    noValidate
                    className={submitted ? 'was-validated' : ''}
                >

                    <div className="form-group">
                        <label htmlFor="name">Full Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="name"
                            value={user.name}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Full name is required.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="username"
                            value={user.username}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Username is required.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="password"
                            value={user.password}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Password is required.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="dr_lic_no">Diver License Number:</label>
                        <input
                            type="text"
                            name="dr_lic_no"
                            className="form-control"
                            placeholder="Diver License Number"
                            value={user.dr_lic_no}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Diver License Number is required.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone_no">Phone Number:</label>
                        <input
                            type="text"
                            name="phone_no"
                            className="form-control"
                            placeholder="Phone Number"
                            value={user.phone_no}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Phone Number is required.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="ins_po_no">Insurance Policy Number:</label>
                        <input
                            type="text"
                            name="ins_po_no"
                            className="form-control"
                            placeholder="Insurance Policy Number"
                            value={user.ins_po_no}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Insuranc Policy Number is required.
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="zipcode">Zipcode:</label>
                        <input
                            type="text"
                            name="zipcode"
                            className="form-control"
                            placeholder="Zipcode"
                            value={user.zipcode}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Zipcode is required.
                        </div>
                    </div>

                    <button className="btn btn-info w-100 mt-3" disabled={loading}>
                        Sign Up
                    </button>

                </form>

                <Link to="/login" className="btn btn-link" style={{color: 'darkgray'}}>
                    I have an Account!
                </Link>

            </div>
        </div>
    );
};

export {RegisterPage};
