import { useNavigate, useParams } from 'react-router-dom';
// import { addEmployee, getEmployeeById } from '../service/localstorage';
// import { useForm } from './../hooks/useForm';
//import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
// import { editEmployee } from './../service/localstorage';

 const EmployeeForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    // const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    //     name: '',
    //     email: '',
    //     address: '',
    //     phone: ''
    // });

    // useEffect(() => {
    //     if (id) {
    //         const employee = getEmployeeById(id);
    //         setForm(employee);
    //     }
    // }, [id]);

    const handleSubmit = (e) => {
        // e.preventDefault();
        // id ? editEmployee(id, inputValues) : addEmployee({ id: uuid(), ...inputValues });
        // resetForm();
        // setshowAlert(true);
        // setTimeout(() => {
        //     setshowAlert(false);
        // }, 2000);
    };


    

    return (
        <div>

            <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/")}>Tache </button>
                <h1 className="text-center">{id ? "Edit" : "Add new"} tache </h1>
                <div />
            </div>

            <div className="card border-primary p-5 m-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Name project </label>
                        <input
                            name="name"
                            type="text"
                            // value={inputValues.name}
                            // onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">tache </label>
                        <input
                            type="text"
                            name="address"
                            // value={inputValues.address}
                            // onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">departements</label>
                        <input
                            name="phone"
                            type="text"
                            // value={inputValues.phone}
                            // onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-outline-primary btn-block">{id ? "Edit" : "Add"} tache</button>
                    </div>
                </form>
            </div>

            {
                showAlert && (
                    <div className="px-5">
                        <div className="alert alert-success">
                            <strong>Well done!</strong> {id ? "edit" : "added a new"} Employee.
                        </div>
                    </div>
                )
            }

        </div >
    )
}


export default EmployeeForm