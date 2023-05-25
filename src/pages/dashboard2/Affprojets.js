import {useEffect, useState} from "react" ;
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import axios from "axios";

const Table = () => {
  
  const [loading,setLoading] = useState(true); 
  const [taches,setTaches] = useState([]); 
  useEffect ( () => {
    axios.get('api/tache').then(res => {
       if(res.status === 200)
       {
       setTaches(res.data.data.tache)
       setLoading(false);
       }
     });
},[]);

if(loading){
  return ( 
      <Loading />
  )
}

//-------------Deliting_Tache---------//

const handleDelete = async(id) => {
  try {
   const res = await axios.delete(`api/tache/${id}/delete`);
    setTaches(taches.filter(taches => taches.id !==id));
    console.log(res); 
  }catch (error) {
     console.error('Error deleting Tache:', error); 
  }
};


//--------------Indexe_Tache-----------//

var Tache_HTMLTABLE = "" ;
Tache_HTMLTABLE = taches.map((item, index)=> {
    return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.nom_designeur}</td>
          <td>{item.tache}</td>
          <td>{item.duree}</td>
          <td>{item.departement}</td>
          <td>            
            <button  onClick={() => handleDelete(item.id)} className="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i className="material-icons">&#xE872;</i></button>             
            <Link to="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></Link>
            </td>
           <td>
           <Link to="#" className="btn btn-primary">Envoyer</Link>
           </td>
         </tr>
    );
});


    return (
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Envoyer   TACHE </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-center mb-4">. </h4>
              <div className="table-wrap">
                <table className="table">
                  <thead className="thead-primary">
                    <tr>
                      <th>ID</th>
                      <th>Nom_Désigneur</th>
                      <th>Tache</th>
                      <th>Duree_De_Taitement</th>
                      <th>Departement</th>
                      <th>Action</th>
                      <th>Envoyer_Tache</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Tache_HTMLTABLE}
                  </tbody>
                  </table>

</div>
</div>
</div>
</div></section>
    )}
  export default Table ;
