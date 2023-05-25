
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading"; 
import axios from "axios";

function Update (props) {
    
    const[users,setUsers] = useState([]); 
   
    // useEffect(()=> {
    //     const user_id = props.match.params.id;
    //     axios.get(`api/employes/show/${user_id}`).then(res=> {
    //      if(res.data.status === 200){
    //          setUsers(res.data.employe); 
    //      }
    //      else if (res.data.status === 404){
    //          alert("error",res.data.message,"error");
    //      }
    //     });
    // },[props.match.params.id])

    const handleInput = (e) => {
        e.persist(); 
        setUsers({...users, [e.target.name]: e.target.value});
    }

    return ( 
        <div className="container mt-5">
              <div className="row">
                  <div className="col-md-12">
                      <div className="card">
                          <div className="car-header">
                                <h4>Modifier L'employes
                                    <Link to="/dashboard/analytics" className="btn btn-danger float-end">Back</Link>
                                </h4>
                           </div>
                         <div className="card-body">
                              <form >  
                                <div className="mb-3" >
                                    <input type="text" name="first_name" value={users.first_name} onChange={handleInput} className="form-control" placeholder="First_Name" />
                                    
                                </div>
                                <div className="mb-3" >
                                    <input type="text" name="last_name" value={users.last_name} onChange={handleInput} className="form-control" placeholder="Last_Name" />
                                    
                                </div>
                                <div className="mb-3" >
                                    <input type="text" name="departement" value={users.departement} onChange={handleInput} className="form-control" placeholder="Departement" />
                                   
                                </div>
                                <div className="mb-3" >
                                    <input type="text" name="num_tell" value={users.num_tell} onChange={handleInput} className="form-control" placeholder="Num_tell" />
                                    
                                </div>
                                <div className="mb-3" >
                                    <input type="text" name="email" value={users.email} onChange={handleInput} className="form-control" placeholder="Email" />
                                    
                                </div>
                                <div className="mb-3">
                                     <center> <button type="submit"  className="btn btn-primary">Update</button></center>
                                </div>
                              </form>
                       </div>
                   </div>
               </div>
           </div>
       </div> 
         )
    }    

export default Update; 