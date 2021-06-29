import React from "react";
import Growth from "./icon/Growth";
import Creative from "./icon/Creative";
import Technology from "./icon/Technology";
import Planning from "./icon/Planning";
import Manage from "./icon/Manage";

import "./ourservice.css";
function OurService() {
  return (
    <div className="service">
      <div className="container   text-center">
        <div className="row">
           <div className="col-12">
              <h1 className="p-3 h1 ">our service</h1>
          <p className="lead">
            Lorem ipsum is common placeholder text used to demonstrate <br/> the
            graphic elements of a document or visual presentation.
          </p>
           </div>
        </div>
        <div className="row p-5 vh-100">
          <div className="col-md-4 col-sm-6">
            <div className="mb-3">
              <Growth />
            </div>
            <h3 className="mb-3">Growth</h3>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="mb-3">
              <Creative />
            </div>
            <h3 className="mb-3">
            Creative
            </h3>
              <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="mb-3">
              <Technology />
            </div>
              <h3 className="mb-3">
                 Technology
              </h3>
              <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="mb-3">
              <Planning />
            </div>
             <h3 className="mb-3">
               Planning
             </h3>
              <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="mb-3">
              <Manage />
            </div>
            <h3 className="mb-3">Manage</h3>
              <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurService;
