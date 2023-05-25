import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card , Form , Row , Button } from 'react-bootstrap';
;
const Register = () => {

    const [inpval, setInpval] = useState({
        date_fin :"",
        date_debut : "",
        option : "" , 
        debut : "",
        fin :"",
    
      
    });


    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target.value;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };
   
    const addUserdata = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
      
        const { date_fin, date_debut, motif , debut , fin   } = inpval;
        const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;
        const startDate = new Date(date_debut);
        const endDate = new Date(date_fin);
        let days = 0;
         
    if ((startDate.getDay() === 0 || startDate.getDay() === 6)|| (endDate.getDay() === 0 || endDate.getDay() === 6)) { // check if start date is a weekend
      toast.error("You cannot request weekend leave..", {
          position: "top-center"
      });
      return;
  } else if (endDate.getTime() < startDate.getTime()) {
      toast.error("End date cannot be before start date", {
          position: "top-center"
      });
  }
         
        if (endDate.getTime() < startDate.getTime()) {
          // Display a toast error if the end date is before the start date
          toast.error("End date cannot be before start date", {
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
          if (debut === "Morning" && fin === "Afternoon") {
            days -= 0.5;
          } else if (debut === "Afternoon" && fin === "Afternoon") {
            days -= 1.5;
          }  else if (debut === "Afternoon" && fin === "Afternoon") {
            days -= 1;
          } else if (debut === "Afternoon" && fin === "Afternoon") {
            days -= 1;
          }
     
        }
         // Check if the number of days is greater than the user's available leave days
    
    
      
        console.log(days);
      
        if (days === 0) {
          toast.error("the request must be at least one day  ", {
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
          const data = await fetch("", {
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
            toast.error("You already have a pending leave request", {
              position: "top-center"
            });
          } else if (res.status === 201) {
            toast.success("Request Registered  ", {
              position: "top-center"
            });
        }}
    };
return (
        <>
            
                   
     
            <h1 style={{ "fontFamily":"'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif"}} className="display-6 text-center mb-4"> import list vacation</h1>
  <Card className="card p-3">
      <Card.Body>
   
        <Form  onSubmit={addUserdata}>
        <br></br>
          <Row>
            <Form.Group  className="mb-3 col-lg-4">
              <Form.Label className='fw-bolder '>Start date</Form.Label>
              <Form.Control
                type="date"
                onChange={setVal} value={inpval.date_debut} name="date_debut" id="date_debut"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-4">
              <Form.Label className='fw-bolder '> Fin Date</Form.Label>
              <Form.Control
                 type="date" onChange={setVal} value={inpval.date_fin} name="date_fin" id="date_fin"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-4">
    <Form.Label>Début</Form.Label>
    <Form.Control as="select" name="debut" onChange={setVal} value={inpval.debut}>
        <option value="">-- Choose an option --</option>
        <option value="Matin">Morning
</option>
        <option value="Apres Midi">Afternoon</option>
    </Form.Control>
</Form.Group>
<Form.Group className="mb-3 col-lg-4">
    <Form.Label>Fin</Form.Label>
    <Form.Control as="select" name="fin" onChange={setVal} value={inpval.fin}>
        <option value="">-- Choose an option --</option>
        <option value="Matin">Morning</option>
        <option value="Apres Midi">Afternoon</option>
    </Form.Control>
</Form.Group>

            

           
         
          </Row>
          <br></br>
          <button className="btn btn-outline-success px-4 py-2" type="submit" onClick={addUserdata}>
  <i className="fa fa-send text-outline-success fa-fw"></i> SEND 
</button>

        </Form>
      </Card.Body>
    </Card>
                    <ToastContainer />




        </>
    )
    }


export default Register