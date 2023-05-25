import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";

function Home() {
     
   const [loading,setLoading] = useState(true); 
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // relation entre bdd et frontend index 
      
   const [users, setUsers] = useState([]); 

    useEffect ( () => {
         axios.get('api/employes').then(res => {
            if(res.status === 200)
            {
            setUsers(res.data.data.employe)
            setLoading(false);
            }
          });
     },[]);



     const fetchData = async () => {
      try {
          const response = await axios.get('api/employes');
          console.log(response.data); 
      }catch (error){
          console.error(error)
      }
     };
  
     useEffect(() => {
      fetchData();
    }, []);

    if (loading){
      return (
          <Loading />
      
      )}

      //----------------------Delete Butten-----------------------------//
     
      const handleDelete = async(id) => {
        try {
          await axios.delete('api/employes/${id}/delete');
          setUsers(users.filter(users => users.id !==id)); 
        }catch (error) {
           console.error('Error deleting user:', error); 
        }
      };

    //------------------------------------------------//

    var Users_HTMLTABLE = "" ;
    Users_HTMLTABLE = users.map((item, index)=> {
        return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.departement}</td>
              <td>{item.num_tell}</td>
              <td>{item.email}</td>
              <td>
                 <Link to="#" className="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i className="material-icons">&#xE417;</i></Link>
                 <Link to="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></Link>
                 <button onClick={() => handleDelete(users.id)} className="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i className="material-icons">&#xE872;</i></button>
              </td>
            </tr>
        );
    });
   
    return (
 
       <div className="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div className="row ">
           
           <div className="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form className="form-inline">
                 <input className="form-control mr-sm-2" type="search" placeholder="Search user" aria-label="Search"/>
                
                </form>
              </div>    
              </div>  
              <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:""}}><h2>
                <b>LIST OF USERS</b></h2></div>
              <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Link to="/dashboard/AddUsers" variant="primary" className="btn btn-primary float-end">Add New USER</Link>
             </div>
           </div>  
            <div className="row">
                <div className="table-responsive " >
                 <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>ID </th>
                            <th>Farst_name</th>
                            <th>Last_name</th>
                            <th> departments </th>
                            <th> Num_tell</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                         {Users_HTMLTABLE}
                    </tbody>
                </table>
            </div>   
        </div>  
 
        {/* <!--- Model Box ---> */}
       
       
       <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
           <Modal.Header closeButton>
              <Modal.Title>Add User </Modal.Title>
           </Modal.Header>
            <Modal.Body>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" name ="first_name" /*value={aduser.first_name} onChange={handleInput}*/ id="examp1" aria-describedby="nameHelp" placeholder="first_name"/>
                    {/*<span className="text-danger">{inputErrorList.first_name}</span>*/}
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name="last_name" /*value={aduser.last_name} onChange={handleInput}*/ id="example1" aria-describedby="IDHelp" placeholder="last_name"/>
                    {/*<span className="text-danger">{inputErrorList.last_name}</span>*/}
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name="departement" /*value={aduser.departement} onChange={handleInput}*/ id="exampleail1" aria-describedby="depHelp" placeholder="departement"/>
                    {/*<span className="text-danger">{inputErrorList.departement}</span>*/}
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name="num_tell" /*value={aduser.num_tell} onChange={handleInput}*/ id="num" placeholder="num_tell"/>
                    {/*<span className="text-danger">{inputErrorList.num_tell}</span>*/}
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name="email" /*value={aduser.email} onChange={handleInput}*/ id="exampleInputPassword1" placeholder="Email"/>
                    {/* <span className="text-danger">{inputErrorList.email}</span>*/}
                </div>
                
                  <button type="submit" className="btn btn-success mt-4">Add User</button>
                </form>
              </Modal.Body>
 
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
              </Modal.Footer>
           </Modal>
  
             {/* Model Box Finsihs */}
          </div> 
      </div>   
      </div>  
  );
}
 
export default Home;