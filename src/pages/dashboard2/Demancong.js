import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card , Form , Row } from 'react-bootstrap';
import { useState } from 'react';



const Register = () => {

    const [dconge,setDconge] = useState({
      
    })

return (

 <div className="container">
   <div className="container my-5 py-5">
     <div className="row">
      <div className="col-12">
        <h1 style={{ "fontFamily":"'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif"}} className="display-6 text-center mb-4"><i><font color="navy" >Demander     congée </font></i></h1>
       <Card className="card p-3">
          <Card.Body>
          <Form ><br></br>
           <Row>
             
              <Form.Group  className="mb-3 col-lg-4">
                <Form.Label className='fw-bolder '><font color="indigo">Date Debut</font></Form.Label>
                <Form.Control type="date" name="date_debut" id="date_debut"/>
             </Form.Group>
             <Form.Group className="mb-3 col-lg-4">
                <Form.Label className='fw-bolder '><font color="indigo">Date Fin</font></Form.Label>
                <Form.Control type="date"  name="date_fin" id="date_fin"/>
             </Form.Group>
             
             <Form.Group className="mb-3 col-lg-4">
                <Form.Label   className='fw-bolder '><font color="indigo">Début </font></Form.Label>
                <Form.Control as="select" name="debut" >
                  <option value=""><font color="indigo">-- Choisir une option --</font></option>
                  <option value="Matin"><font color="indigo">Matin</font></option>
                  <option value="Apres Midi"><font color="indigo">Après-midi </font></option>
               </Form.Control>
             </Form.Group>
             
             <Form.Group className="mb-3 col-lg-4">
                <Form.Label className='fw-bolder ' ><font color="indigo">Fin </font></Form.Label>
                <Form.Control as="select" name="fin" >
                  <option value="">-- Choisir une option --</option>
                  <option value="Matin">Matin</option>
                  <option value="Apres Midi">Après-midi</option>
               </Form.Control>
             </Form.Group>

            <Form.Group className="mb-6 col-lg-4">
                <Form.Label className='fw-bolder '> <font color ="indigo">Nom et prénom </font> </Form.Label>
                <Form.Control type="text"name="motif" id="motif" placeholder=' Nom et prénom'></Form.Control>
            </Form.Group>
         </Row><br></br>
         <button className="btn btn-outline-success px-4 py-2" type="submit" >
            <i className="fa fa-send text-outline-success fa-fw"></i> Envoyer
         </button>
       </Form>
     </Card.Body>
   </Card>
   </div>
  </div>
  </div>
</div>


       
    )
    }


export default Register