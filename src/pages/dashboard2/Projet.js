import axios from "axios";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";
function PROJET (){
    
    const [loading,setLoading] = useState (true); 
    const [proj,setProjet] = useState([]); 

    useEffect(()=> {
      axios.get('api/projet').then(res => {
        if (res.status=== 200){
            setProjet(res.data.data.projet)
            setLoading(false);
          }
      });
    },[]);

    if (loading) {
        return (
        <Loading />
        )
    }

    var Projet_HTMLTABLE = "" ; 
    Projet_HTMLTABLE = proj.map((item, index)=> {
        return (
           <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name_projet}</td>
            <td>{item.société_du_production}</td>
            <td>{item.date_debut_traitement}</td>
            <td>{item.date_fin}</td>
            <td>{item.num_projet}</td>
          </tr>
        );
      });

   return (
    <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Liste des Projets</h2>
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
                      <th>Nom_Projet</th>
                      <th>Société_Du_production</th>
                      <th>Date_Debut_Tretement</th>
                      <th>Date_fin</th>
                      <th>Num_Projet</th>
                    </tr>
                  </thead>
                  <tbody>
                      {Projet_HTMLTABLE}
                  </tbody>
                      </table>

</div>
</div>
</div>
</div></section>
   )
}
export default PROJET; 