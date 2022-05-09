import { useEffect, useState } from 'react';
import RentService from '../../services/rent.service';
import { useDispatch, useSelector } from 'react-redux';
import { Role } from '../../models/role';
import UserService from '../../services/user.service';
import { clearCurrentUser } from '../../store/actions/user';
import { useNavigate } from 'react-router-dom';


const ProfilePage = () => {

    const [rentList, setRentList] = useState([]);
    const [customerList, setCustomerList] = useState([]);

    const [errorMessage, setErrorMessage] = useState('');

    const currentUser = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        RentService.getAllRentItems().then((response) => {
            setRentList(response.data);
        });
    }, []);

    useEffect(() => {
        UserService.getAllUsers().then((response) => {
            setCustomerList(response.data);
        });
    }, []);

    const changeRole = () => {

        const newRole = currentUser.role === Role.ADMIN ? Role.USER : Role.ADMIN;

        UserService.changeRole(newRole).then(() => {
           //clear session
            dispatch(clearCurrentUser());
            navigate('/login');
        }).catch((err) => {
            setErrorMessage('Unexpected error occurred.');
            console.log(err);
        });
    };

    return (
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
                                <h3>All Orders</h3>
                            </div>
                            <div className="col-6 text-end">
                                Current role is <strong>{currentUser?.role} </strong>
                                <button className="btn btn-primary" onClick={() => changeRole()}>
                                    Change Role
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="card-body">
                        <table className="table table-striped">

                            <thead>
                            <tr>
                                <th scope="col"># Order ID</th>
                                <th scope="col">Model</th>
                                <th scope="col">Date</th>
                            </tr>
                            </thead>
                            <tbody>

                            {rentList.map((item, ind) =>
                                <tr key={ind}>
                                    <th scope="row">{ind + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{new Date(item.rentTime).toLocaleDateString()}</td>
                                </tr>

                            )}

                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export {ProfilePage};

