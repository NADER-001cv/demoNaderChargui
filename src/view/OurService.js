import React from "react";
import Growth from "../components/ourservice/icon/Growth";
import Creative from "../components/ourservice/icon/Creative";
import Technology from "../components/ourservice/icon/Technology";
import Planning from "../components/ourservice/icon/Planning";
import Manage from "../components/ourservice/icon/Manage";

function OurService() {
  return (
    <div className="servicelayout">
      <div className="container vh-100">
        <div className="row  justify-content-center text-center mt-5">
          <h1>Our Service</h1>
          <p>
            Lorem ipsum is common placeholder text used to demonstrate <br />
            the graphic elements of a document or visual presentation.
          </p>
        </div>

        <div className="container mt-1 vh-100 service_table p-5">
          <div className="d-flex justify-content-around align-items-center my-2 mb-3 p-2">
            <p>
              <Growth />
            </p>
            <h3>Growth</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur  <br/>
               adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
            <div><p className="mb-1 text-decoration-underline  fs-6" style={{color:'#c293f7'}}>Financial Growth</p><p className="text-decoration-underline fw-bold fs-6"  style={{color:'#c293f7'}}> Management Growth</p></div>
            <div>
             <p className="mb-1 text-decoration-underline"  style={{color:'#c293f7'}}>Trust Growth
            
              </p>
              <p className="text-decoration-underline"  style={{color:'#c293f7'}}> Track Growth</p> </div>
          </div>
          <div className="d-flex justify-content-around align-items-center my-2 mb-3 p-2">
            <p>
              <Creative />
            </p>
            <h3>Creative</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur  <br/>
               adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
            <div><p className="mb-1 text-decoration-underline" style={{color:'#c293f7'}}>Financial Creative</p><p className="text-decoration-underline" style={{color:'#c293f7'}}> Management Creative</p></div>
            <div>
             <p className="mb-1 text-decoration-underline" style={{color:'#c293f7'}}>Trust Creative
            
              </p>
              <p className="text-decoration-underline" style={{color:'#c293f7'}}> Track Creative</p> </div>
          </div>
          <div className="d-flex justify-content-around align-items-center  mb-3 p-2">
            <p>
              <Technology />
            </p>
            <h3>Technology</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur  <br/>
               adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
            <div><p className="mb-1  text-decoration-underline"  style={{color:'#c293f7'}}>Financial Technology</p><p className="text-decoration-underline"  style={{color:'#c293f7'}}> Management Technology</p></div>
            <div>
             <p className="mb-1 text-decoration-underline" style={{color:'#c293f7'}}>Trust Technology
            
              </p>
              <p  className="text-decoration-underline" style={{color:'#c293f7'}}> Track Technology</p> </div>
          </div>
          <div className="d-flex justify-content-around align-items-center  mb-1 pb-2 pt-2">
            <p>
              <Planning />
            </p>
            <h3>Planning</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur  <br/>
               adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
            <div><p className="mb-1 text-decoration-underline"  style={{color:'#c293f7'}}>Financial Planning</p><p className="text-decoration-underline"  style={{color:'#c293f7'}}> Management Planning</p></div>
            <div>
             <p className="mb-1 text-decoration-underline"  style={{color:'#c293f7'}}>Trust Planning
            
              </p>
              <p className="text-decoration-underline" style={{color:'#c293f7'}}> Track Planning</p> </div>
          </div>
          <div className="d-flex justify-content-around align-items-center  pb-5">
            <p>
              <Manage />
            </p>
            <h3>Manage</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur  <br/>
               adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
            <div><p className="mb-1 text-decoration-underline"  style={{color:'#c293f7'}}>Financial Manage</p><p className="text-decoration-underline"  style={{color:'#c293f7'}}> Management Manage</p></div>
            <div>
             <p className="mb-1 text-decoration-underline" style={{color:'#c293f7'}}>Trust Manage
            
              </p>
              <p className="text-decoration-underline" style={{color:'#c293f7'}}> Track Manage</p> </div>
          </div>
     
        </div>
      </div>
    </div>
  );
}

export default OurService;
