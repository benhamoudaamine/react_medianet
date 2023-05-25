import axios from "axios";
import Loading from "../../components/Loading";
import {useEffect ,useState } from "react";

function List() {

    const [loading,setLoading] = useState(true);
    const [conges,setConges] = useState([]); 
   
    useEffect( () => {
        axios.get('api/conges').then(res => {
        if (res.status=== 200){
          setConges(res.data.data.conge)
          setLoading(false);
        }
        });
      },[]);
     
      if(loading){
        return ( 
            <Loading />
        )
    }

    var Conges_HTMLTABLE = "" ; 
  Conges_HTMLTABLE = conges.map((item, index)=> {
    return (
       <tr key={index}>
        <td>{item.id}</td>
        <td>{item.date_debut}</td>
        <td>{item.date_fin}</td>
        <td>{item.debut}</td>
        <td>{item.fin}</td>
        <td>{item.nom_prenom}</td>
        <td>{item.description}</td>
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
           <h1 style={{ "fontFamily":"'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif"}} className="display-6 text-center mb-4"><i><font color="navy" >Liste Des congée </font></i></h1>
         </div>  
         <div class="row">
           <div class="table-responsive " >
             <table class="table table-striped table-hover table-bordered">
               <thead>
                 <tr>
                   <th>ID </th>
                   <th>Date_Debut</th>
                   <th>Date_Fin</th>
                   <th>Debut</th>
                   <th>Fin</th>
                   <th>Nom_Prenom</th>
                   <th>Description</th>
                   
                 </tr>
               </thead>
               <tbody>
                {Conges_HTMLTABLE}
               </tbody>
             </table>
           </div>   
         </div>  
 
         
      </div>    
      </div> 
  )
}
export default List; 