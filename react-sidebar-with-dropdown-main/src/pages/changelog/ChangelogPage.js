
import { useState, useEffect } from "react";

import { Button, Container, Table,Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';
//search

function RH() {
  const [leave, setLeave] = useState([]);

  const handleSearchChange = (event) => {
    // eslint-disable-next-line no-undef
    setSearch(event.target.value);
  };
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios.get('http://localhost:5000/FindCongeCompensation')
      // eslint-disable-next-line no-undef
      .then(res => setLeave(res.data))
      .catch(err => console.log(err));
  }, []);
  const handleAccept = (id) => {
    axios.put(`http://localhost:5000/acceptedCompensation/${id}`)
      .then((res) => {
    
       
        toast.info("Demande Acceptée", {
          position: "top-right"
        });
        setLeave(leave.map(leaves => {
          if (leaves._id === id) {
            leaves.status = "accepted";
          }
          return leaves;
        }));
      })
      .catch(err => console.log(err));
  }
  const handleReject = (id) => {
    axios.put(`http://localhost:5000/rejectCompensation/${id}`, { status: "rejected" })
      .then((res) => {
        
        toast.info("Demande refusée", {
          position: "top-center"
        });
        setLeave(leave.map(leaves => {
          if (leaves._id === id) {
            leaves.status = "rejected";
          }
          return leaves;
        }));
      })
      .catch(err => console.log(err));
  }

  if (!leave) {
    return <div>Loading...</div>;
  }
  const filteredUsers = leave.filter(leavess =>
  
    leavess.status.toLowerCase().includes(search.toLowerCase()) 
  );
  return (
    <div className="container my-5 py-5">
    <div className="row">
        <div className="col-12">
            <h1 className="display-6 text-center mb-4">Liste <b>Approve and reject a leave.</b></h1>
            <hr className="w-25 mx-auto"/>
        <ReactBootStrap.FormGroup className="mb-6 col-lg-2 text-right">
           <ReactBootStrap.FormControl  size="sm" className=" my-6 " type="text" placeholder="Search..." value={search} onChange={handleSearchChange} />
           </ReactBootStrap.FormGroup>
        <br></br>
        <br></br>
        {
      
      <Table responsive striped bordered hover>

      <thead>
        <tr>
      
          <th>Date Debut</th>
          <th>Date Fin</th>
          <th>Nom & Prenom</th>
        
          <th>Email</th>
          <th>Solde</th>
          <th>Motif</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        </tr>
      </thead>
     
     
    </Table>
    
        
        
             
            }
 
    
    </div>
        
    </div>
                            <ToastContainer />

    </div>
  );
}

export default RH; 