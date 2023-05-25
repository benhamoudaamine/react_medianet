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
 const [client, setClient] = useState([]); 
 useEffect ( () => {
  axios.get('api/client').then(res => {
     if(res.status === 201)
     {
     setClient(res.data.data.client)
     setLoading(false);
    
     }
   });
 },[]);

 if (loading){
  return (
      <Loading />
  
  )}

  var ClienDetails = ""  
  ClienDetails = client.map((item, index)=> {
    return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name_client}</td>
          <td>{item.nom_entreprise}</td>
          <td>{item.date_debut_tretement}</td>
          <td>{item.date_fin}</td>
          <td>{item.prix_donneer}</td>
          <td>{item.num_client}</td>
           <td>
          <center><Link to="#" className="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i className="material-icons">&#xE417;</i></Link></center>
          </td> 
        </tr>
    );
 });



  return (
   <div class="container ">
     <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
        <div class="row ">
          <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search"></div>    
           </div>  
           <h1 style={{ "fontFamily":"'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif"}} className="display-6 text-center mb-4"><i><font color="navy" >Liste Des Clients </font></i></h1>

           {/* <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Liste des clients</b></h2></div> */}
         </div>  
         <div class="row">
           <div class="table-responsive " >
             <table class="table table-striped table-hover table-bordered">
               <thead>
                 <tr>
                   <th>ID </th>
                   <th>Name_Client</th>
                   <th>Company_Name</th>
                   <th>Date_Debut</th>
                   <th>Date_Fin</th>
                   <th>prix_donneer</th>
                   <th>Num_Client</th>
                   <th>Details</th>
                 </tr>
               </thead>
               <tbody>
                {ClienDetails}
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
       
 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
  
       {/* Model Box Finsihs */}
       </div>  
      </div>    
      </div>  
  );
}
 
export default Home;