import React from "react";
import {Link} from 'react-router-dom'
import { User, Home, EyeOff } from "react-feather";
import Client from "./iconoflogin/Client";

function Login() {
  return (
    <div>
      <div
        className="card mx-auto my-5 shadow p-3 mb-5 bg-white rounded"
        style={{ width: "40%" }}
      >
        <div className="card-body ">
          <h4 className="card-title mb-5 text-start ">Login As</h4>
          <div className="d-flex justify-content-around mb-5">
            <a>
              <Client />
            </a>
            {/*<button className="btn btn-light d-flex  align-items-center">
              <User width="15" className="me-1" />
              <span>Client</span>
            </button>
            <button className="btn btn-light d-flex align-items-center">
              <Home width="15" className="me-1" />
              <span>Marketer</span>
            </button>*/}
          </div>
          <form className="text-start">
            <div className="form-group my-3">
              <label className="fw-bolder">Username/Email</label>
              <input
                type="text"
                className="form-control border-0 bg-light"
                placeholder=""
              />
            </div>
            <div className="form-group my-3 passWrapper">
              <label className="fw-bolder">Password</label>
              <input
                type="text"
                className="form-control border-0 bg-light"
                placeholder=""
              />
              <EyeOff width="15" id="eyeIcon" />
            </div>
            <div className="d-flex justify-content-start flex-wrap px-1 py-3">
              <input type="checkbox" className="me-2 mt-1" />
              <label className="custom-control-label">Forget Password ?</label>
            </div>
            <div className="text-center mt-2">
              <button className="btn btn-primary bg-purple  border-0" style={{
                backgroundColor:' #6056D7',
                width:'110px'

              }}>
                Login
              </button>
            </div>
            <strong className="me-2 fs-6"  alt="Condition of User">
              <span>Dont have either account ? </span>
            </strong>
            
            <a className="mx-2" href="#" alt="Condition of User">
           
              <Link to="/addacount"   className="nav-link   p-2"  >  Register here</Link> 
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
