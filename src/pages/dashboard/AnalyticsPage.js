import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
function Home() {
 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loading,setLoading] = useState(true); 
    const [users,setUsers] = useState([]); 
  
    useEffect ( () => {
        axios.get('api/employes').then(res => {
           if(res.status === 200)
           {
           setUsers(res.data.data.employe)
           setLoading(false);
           }
         });
    },[]);

    if(loading){
        return ( 
            <Loading />
        )
    }

   //------------Deliting_User-----------//

  
    const handleDelete = async(id) => {
      try {
       const res = await axios.delete(`api/employes/delete/${id}`);
        setUsers(users.filter(users => users.id !==id));
        console.log(res); 
      }catch (error) {
         console.error('Error deleting user:', error); 
      }
    };
     
    //-------------Index_User------------//

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
                 {/* <Link to="#" className="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i className="material-icons">&#xE417;</i></Link> */}
                 <Link to={`/dashboard/EditUser/${item.id}`} className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></Link>
                <button onClick={() => handleDelete(item.id)} className="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i className="material-icons">&#xE872;</i></button>              </td>
            </tr>
        );
    });
  
  
    return (
      <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
               <div class="row ">
               <h1 style={{ "fontFamily":"'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif"}} className="display-6 text-center mb-4"><i><font color="navy" >Liste Des Employées </font></i></h1>

                   <div class="col-sm-3 mt-5 mb-4 text-gred">
                       <div className="chercher">
                          <form class="form-inline">
                              <input class="form-control mr-sm-2" type="chercher" placeholder="chercher  " aria-label="chercher"/>
                          </form>
                       </div>    
                  </div>  

                  {/* <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b> 
                       <i>Liste des employées</i> </b></h2>
                 </div> */}
                 <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
                 <Link to="/dashboard/adduser" variant="primary" className="btn btn-primary float-end">Ajouter Employées</Link>
                      {/* <Button variant="primary" onClick={handleShow}>Ajouter employées</Button> */}
                 </div>
               </div>  
               <div class="row">
                   <div class="table-responsive " >
                       <table class="table table-striped table-hover table-bordered" border={2}> 
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
      </div>    
      </div>  
  );
}
 
export default Home;