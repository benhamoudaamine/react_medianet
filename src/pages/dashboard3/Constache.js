import React, { Fragment } from 'react';





function Table (){
    return (
   
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section"> Liste  des   Taches </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-wrap">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                
                    <th>TACHE </th>
                    <th>DUREE</th>
                    <th>Nom Désigneur</th>
                    <th>Action </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td> </td>
                    <td></td>
                    <td></td>
           
                    <td><a href="#" className="btn btn-success">En train </a></td>
                  </tr>

                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                 
                    <td><a href="#" className="btn btn-warning">En train </a></td>
                  </tr>

                  <tr>
                    <th scope="row"></th>
                    <td> </td>
                    <td></td>
                    <td></td>
                    
                    <td><a href="#" className="btn btn-danger">Terminé</a></td>
                  </tr>

                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                   
                    <td><a href="#" className="btn btn-success">read</a></td>
                  </tr>

                  <tr>
                    <th scope="row"></th>
                    <td> </td>
                    <td></td>
                    <td></td>
                 
                    <td><a href="#" className="btn btn-danger">Terminé</a></td>
                  </tr>

                  <tr>
                    <th scope="row"></th>
                    <td> </td>
                    <td></td>
                    <td></td>
                  
                    <td><a href="#" className="btn btn-warning">Read</a></td>
                  </tr>

                  <tr>
                    <th scope="row"></th>
                    <td> </td>
                    <td></td>
                   
                    <td></td>
                    <td><a href="#" className="btn btn-warning">Read</a></td>
                  </tr>

                  <tr>
                    <th scope="row"></th>
                    <td> </td>
                    <td></td>
                   
                    </tr></tbody></table>
                    </div></div>
                    
</div>   
</div>  )}
export default Table ;