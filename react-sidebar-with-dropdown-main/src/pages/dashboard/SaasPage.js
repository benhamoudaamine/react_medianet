import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import axios from "axios";

function Home() {
 
    
   
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
  // const fetchData = async () => {
  //   try {
  //       const response = await axios.get('api/client');
  //       console.log(response.data); 
  //   }catch (error){
  //       console.error(error)
  //   }
  //  };

  //  useEffect(() => {
  //   fetchData();
  // }, []);


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
 
       <div className="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
             <div className="row ">
                <div className="col-sm-3 mt-5 mb-4 text-gred">
                    <div className="search">
                 </div>    
             </div>  
             <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:""}}>
               <h2><i>LIST OF CLIENTS </i></h2></div>
             </div>  
             <div className="row">
                <div className="table-responsive " >
                 <table className="table table-striped table-hover table-bordered">
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
       </div>    
      </div>  
  )
}
 
export default Home;