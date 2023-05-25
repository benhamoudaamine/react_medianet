import { Link } from "react-router-dom";
import { useState } from "react";
import Loading from "../../components/Loading"; 
import axios from "axios";
function Add () {
    
    const [loading,setLoading] = useState(false); 
    const [inputErrorList,setInputErrorList]= useState({})
    const [users,setUsers] = useState ({
        first_name: '',
        last_name: '', 
        departement: '', 
        num_tell: '', 
        email: ''
    })

    const handleInput = (e) => {
        e.persist(); 
        setUsers({...users, [e.target.name]: e.target.value});
   } 

   const saveUser = (e) => {
    e.preventDefault(); 
    
    setLoading(true); 
    const data = {
        first_name: users.first_name,
        last_name: users.last_name, 
        departement: users.departement, 
        num_tell: users.num_tell, 
        email: users.email,
    }

   axios.post('api/employes/store', data).then(res => {
    alert (res.data.data.message); 
   setLoading(false);
    }).catch(function(error){
      if (error.response){

      if (error.response.status === 422){
           setInputErrorList(error.response.data.errors)
          setLoading(false);
      }    
      if (error.response.status === 500){
          alert(error.response.data)
         setLoading(false);
     }      

   }
}); 
}
if (loading){
    return (
        <Loading />
    )
  }  


return ( 
  <div className="container mt-5">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="car-header">
                          <h4>ADD USERS
                              <Link to="/dashboard/analytics" className="btn btn-danger float-end">Back</Link>
                          </h4>
                     </div>
                   <div className="card-body">
                        <form onClick={saveUser}>  
                          <div className="mb-3" >
                              <input type="text" name="first_name" value={users.first_name} onChange={handleInput} className="form-control" placeholder="First_Name" />
                              <span className="text-danger">{inputErrorList.first_name}</span> 
                          </div>
                          <div className="mb-3" >
                              <input type="text" name="last_name" value={users.last_name} onChange={handleInput} className="form-control" placeholder="Last_Name" />
                              <span className="text-danger">{inputErrorList.last_name}</span>
                          </div>
                          <div className="mb-3" >
                              <input type="text" name="departement" value={users.departement} onChange={handleInput} className="form-control" placeholder="Departement" />
                              <span className="text-danger">{inputErrorList.departement}</span>
                          </div>
                          <div className="mb-3" >
                              <input type="text" name="num_tell" value={users.num_tell} onChange={handleInput} className="form-control" placeholder="Num_tell" />
                              <span className="text-danger">{inputErrorList.num_tell}</span>
                          </div>
                          <div className="mb-3" >
                              <input type="text" name="email" value={users.email} onChange={handleInput} className="form-control" placeholder="Email" />
                              <span className="text-danger">{inputErrorList.email}</span>
                          </div>
                          <div className="mb-3">
                               <center> <button type="submit"  className="btn btn-primary">Save User </button></center>
                          </div>
                        </form>
                 </div>
             </div>
         </div>
     </div>
 </div> 
   )

}
export default Add ; 