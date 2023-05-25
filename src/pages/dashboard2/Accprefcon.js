
import { useState, useEffect } from "react";

import { Button, Container, Table,Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
//search

function RH() {
  // const [leave, setLeave] = useState([]);

  // const handleSearchChange = (event) => {
  //   // eslint-disable-next-line no-undef
  //   setSearch(event.target.value);
  // };
  // const [search, setSearch] = useState('');
  // useEffect(() => {
  //   axios.get('http://localhost:5000/FindCongeCompensation')
  //     // eslint-disable-next-line no-undef
  //     .then(res => setLeave(res.data))
  //     .catch(err => console.log(err));
  // }, []);
  // const handleAccept = (id) => {
  //   axios.put(`http://localhost:5000/acceptedCompensation/${id}`)
  //     .then((res) => {
    
       
  //       toast.info("Demande Acceptée", {
  //         position: "top-right"
  //       });
  //       setLeave(leave.map(leaves => {
  //         if (leaves._id === id) {
  //           leaves.status = "accepted";
  //         }
  //         return leaves;
  //       }));
  //     })
  //     .catch(err => console.log(err));
  // }
  // const handleReject = (id) => {
  //   axios.put(`http://localhost:5000/rejectCompensation/${id}`, { status: "rejected" })
  //     .then((res) => {
        
  //       toast.info("Demande refusée", {
  //         position: "top-center"
  //       });
  //       setLeave(leave.map(leaves => {
  //         if (leaves._id === id) {
  //           leaves.status = "rejected";
  //         }
  //         return leaves;
  //       }));
  //     })
  //     .catch(err => console.log(err));
  // }

  // if (!leave) {
  //   return <div>Loading...</div>;
  // }
  // const filteredUsers = leave.filter(leavess =>
  
  //   leavess.status.toLowerCase().includes(search.toLowerCase()) 
  // );
  const [loading,setLoading] = useState(true); 
  const [conge,setConge] = useState([]); 
  useEffect( () => {
    axios.get('api/conges').then(res => {
    if (res.status=== 200){
      setConge(res.data.data.conge)
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
  Conges_HTMLTABLE = conge.map((item, index)=> {
    return (
       <tr key={index}>
        <td>{item.id}</td>
        <td>{item.date_debut}</td>
        <td>{item.date_fin}</td>
        <td>{item.debut}</td>
        <td>{item.fin}</td>
        <td>{item.nom_prenom}</td>
        <td>{item.description}</td>
        <td>
          <Link to="#" className="btn btn-danger">REFUSE</Link>
          <Link to="#" className="btn btn-success">ACCEPT</Link>
          </td>
      </tr>
    );
  });
 
  return (
    <><div className="container my-5 py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-6 text-center mb-4">** <b> <i><font COLOR="green">Accepter</font></i> et <i><font COLOR="red"> Refuser  </font></i>Deamander du congées  .</b></h1>
          <hr className="w-25 mx-auto" />
          {/* <ReactBootStrap.FormGroup className="mb-6 col-lg-2 text-right">
            <ReactBootStrap.FormControl size="sm" className=" my-6 " type="text" placeholder="chercher ..." value={search} onChange={handleSearchChange} />
          </ReactBootStrap.FormGroup> */}
          <br></br>
          <br></br>
          {<Table responsive striped bordered hover>
           <thead>
              <tr>
              <th> ID</th>
                <th>date_debut </th>
                <th>date_fin date </th>
                <th> Debut</th>
                <th>fin</th>
                <th>nom et prénom </th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* {filteredUsers.map((leaves) => (
                <tr key={leaves._id}>

                  <td>{leaves.date_debut}</td>
                  <td>{leaves.date_fin}</td>

                  <td> {leaves.userid.Nom} {leaves.userid.Prenom}</td>
                  <td>{leaves.userid.email}</td>
                  <td>{leaves.userid.Scomposition}</td>
                  <td>{leaves.motif}</td>
                  <td>{leaves.status}</td>
                  <td>
                    {leaves.status === "waiting" &&
                      <>
                        <button className="btn btn-outline-success me-1 px-2 py-1" onClick={() => handleAccept(leaves._id)}> <i className="fa fa-check text-outline-success fa-fw"></i></button>
                        <button className="btn btn-outline-danger px-2 py-1" onClick={() => handleReject(leaves._id)}> <i className="fa fa-times text-outline-success fa-fw"></i></button>
                      </>}
                  </td>
                </tr>))} */}
                {Conges_HTMLTABLE}
            </tbody>
          </Table>}
          
 </div>

    </div>
    </div><ToastContainer /></>


  );
}

export default RH; 