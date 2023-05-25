import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card , Form , Row , Button } from 'react-bootstrap';
import './App.scss';


const Register = () => {

    const [inpval, setInpval] = useState({
        date_fin :"",
        date_debut : "",
        option : "" , 
        debut : "",
        fin :""
       
    
      
    });


    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };
   
    const addUserdata = async (e) => {
        e.preventDefault();
      
        const { date_fin, date_debut, motif , debut , fin   } = inpval;
        const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;
        const startDate = new Date(date_debut);
        const endDate = new Date(date_fin);
        let days = 0;
         
    if ((startDate.getDay() === 0 || startDate.getDay() === 6)|| (endDate.getDay() === 0 || endDate.getDay() === 6)) { // check if start date is a weekend
      toast.error("Vous ne pouvez pas demander un congé le week-end.", {
          position: "top-center"
      });
      return;
  } else if (endDate.getTime() < startDate.getTime()) {
      toast.error("La date de fin ne peut pas être avant la date de début", {
          position: "top-center"
      });
  }
         
        if (endDate.getTime() < startDate.getTime()) {
          // Display a toast error if the end date is before the start date
          toast.error("La date de fin ne peut pas être avant la date de début", {
            position: "top-center"
          });
        } else {
          // If start date is on a weekend, set it to the next weekday
          while (startDate.getDay() === 0 || startDate.getDay() === 6) {
            startDate.setTime(startDate.getTime() + ONE_DAY_IN_MS);
          }
      
          // If end date is on a weekend, set it to the previous weekday
          while (endDate.getDay() === 0 || endDate.getDay() === 6) {
            endDate.setTime(endDate.getTime() - ONE_DAY_IN_MS);
          }
      
          // Calculate the number of weekdays between the start and end date
          while (startDate <= endDate) {
            const dayOfWeek = startDate.getDay();
            const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
      
            if (!isWeekend) {
              days++;
            }
      
            startDate.setTime(startDate.getTime() + ONE_DAY_IN_MS);
          }
      
          // Adjust for debut/fin times
          if (debut === "Matin" && fin === "Apres Midi") {
            days -= 0.5;
          } else if (debut === "Apres Midi" && fin === "Matin") {
            days -= 1.5;
          }  else if (debut === "Matin" && fin === "Matin") {
            days -= 1;
          } else if (debut === "Apres Midi" && fin === "Apres Midi") {
            days -= 1;
          }
     
        }
         // Check if the number of days is greater than the user's available leave days
    
    
      
        console.log(days);
      
        if (days === 0) {
          toast.error("La demande doit être d'au moins un jour", {
            position: "top-center"
          });
        } else if (date_fin === "") {
          toast.warning("La date de fin est requise", {
            position: "top-center"
          });
        
        } else if (date_debut === "") {
          toast.error("La date de début est requise", {
            position: "top-center"
          });
        } else {
          const data = await fetch("http://localhost:5000/compensationRequest", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              date_fin,
              date_debut,
              days,
              debut,
              fin,
              motif,
            })
          });
      
          const res = await data.json();
      
          if (res.status === 403 && res.message === 'You already have a pending leave request') {
            toast.error("Vous avez déjà une demande de congé en attente", {
              position: "top-center"
            });
          } else if (res.status === 201) {
            toast.success("Demande Enregistrée 😃", {
              position: "top-center"
            });
        }}
    };
return (
  <>
 <div className="container">
   <div className="container my-5 py-5">
     <div className="row">
       <div className="col-12">
            <h1 style={{ "fontFamily":"'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif"}} className="display-6 text-center mb-4"><i><font color="navy" >Importer  liste des congées </font></i></h1>
               <Card className="card p-3">
      <Card.Body>
   
        <Form  onSubmit={addUserdata}>
        <br></br>
          <Row>
           
            <Form.Group  className="mb-3 col-lg-4">
              <Form.Label className='fw-bolder '><font color="indigo">Date Debut</font></Form.Label>
              <Form.Control
                type="date"
                onChange={setVal} value={inpval.date_debut} name="date_debut" id="date_debut"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-4">
              <Form.Label className='fw-bolder '><font color="indigo">Date Fin</font></Form.Label>
              <Form.Control
                 type="date" onChange={setVal} value={inpval.date_fin} name="date_fin" id="date_fin"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-4">
    <Form.Label   className='fw-bolder '><font color="indigo">Début </font></Form.Label>
    <Form.Control as="select" name="debut" onChange={setVal} value={inpval.debut}>
        <option value=""><font color="indigo">-- Choisir une option --</font></option>
        <option value="Matin"><font color="indigo">Matin</font></option>
        <option value="Apres Midi"><font color="indigo">Après-midi </font></option>
    </Form.Control>
</Form.Group>
<Form.Group className="mb-3 col-lg-4">
    <Form.Label className='fw-bolder ' ><font color="indigo">Fin </font></Form.Label>
    <Form.Control as="select" name="fin" onChange={setVal} value={inpval.fin}>
        <option value="">-- Choisir une option --</option>
        <option value="Matin">Matin</option>
        <option value="Apres Midi">Après-midi</option>
    </Form.Control>
</Form.Group>

            <Form.Group className="mb-6 col-lg-4">
                <Form.Label className='fw-bolder '> <font color ="indigo">Nom et prénom </font> </Form.Label>
                <Form.Control type="text" onChange={setVal} value={inpval.motif}  name="motif" id="motif" placeholder=' Nom et prénom'></Form.Control>
            </Form.Group>
            

           
         
          </Row>
          <br></br>
          <button className="btn btn-outline-success px-4 py-2" type="submit" onClick={addUserdata}>
  <i className="fa fa-send text-outline-success fa-fw"></i> Envoyer
</button>

        </Form>
      </Card.Body>
    </Card>
                    <ToastContainer />

       </div>
          </div>
             </div>
             
  
</div>


        </>
    )
    }


export default Register