import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './R.png';
function Team() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
        <h4 className="display-5 mb-4" style={{textAlign: "center", fontWeight: "bold", textTransform: "uppercase", color: "#333"}}>
  Meet Our Team
</h4>

<h1 className="display-5 mb-4 text-primary text-dark">Creative Architecture Team<br />For Your Dream Home</h1>

        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item position-relative">
              <div className="position-relative">
              <img src={require('./R.png')} alt="Logo" />
                
              </div>
              <div className="bg-light text-center p-4">
                <h3 className="mt-2 text-primary">Malek Gharbi</h3>
                <span className="text-secondary">Designation</span>
              </div>
            </div>
          </div>
          
          </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item position-relative">
              <div className="position-relative">
              <img src={require('./R.png')} alt="Logo" />
                
              </div>
              <div className="bg-light text-center p-4">
                <h3 className="mt-2 text-primary">Malek Gharbi</h3>
                <span className="text-secondary">Designation</span>
              </div>
            </div>
          </div>
          </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item position-relative">
              <div className="position-relative">
              <img src={require('./R.png')} alt="Logo" />
                
              </div>
              <div className="bg-light text-center p-4">
                <h3 className="mt-2 text-primary">Malek Gharbi</h3>
                <span className="text-secondary">Designation</span>
              </div>
            </div>
          </div>
          </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item position-relative">
              <div className="position-relative">
              <img src={require('./R.png')} alt="Logo" />
                
              </div>
              <div className="bg-light text-center p-4">
                <h3 className="mt-2 text-primary">Malek Gharbi</h3>
                <span className="text-secondary">Designation</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Team;
