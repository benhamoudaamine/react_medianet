import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
 
function Home() {
 
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
 
       <div className="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
              <div className="row ">
                  <div class="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded" style={{color:"blue"}}>  
                       <h2><b>LIST OF TACHE</b></h2>
                    </div>
              </div>  
             <div className="row">
                  <div className="table-responsive " >
                     <table className="table table-striped table-hover table-bordered">
                           <thead>
                              <tr>
                                 <th>Name Projets </th>
                                 <th> TACHE </th>
                                 <th> DEPARTEMENTS</th>
                              </tr>
                           </thead>
                           <tbody>
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
                      keyboard={false}>
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