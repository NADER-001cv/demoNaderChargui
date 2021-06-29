import React from "react";
import ArrowLeft from "./icon/ArrowLeft";
import ArrowRight from "./icon/ArrowRight";
import Allianz from "./icon/Allianz";
import Walmart from "./icon/Walmart";

function Testimonial() {
  return (
    <div>
      <div className="container">
        <div className="row  rows-cols-auto justify-content-between mt-5">
         <h3 className="fs-1 fw-bolder mb-4 text-center">
         Testimonial
         </h3>
          <div className="col ">
            <ArrowLeft />
          </div>
          <div className="col">
            <Allianz />
            <p className="lead">
              I used to do marketing for new customer, but with this i can now
              work with ease evrywhere and anytime i want.
            </p>
               <span>
              Alex Cooper
            </span>
          </div>
          <div className="col">
            <Walmart />
               <p className="lead">
              I didn't know how to sell and a dealer helped me learn to run my
              page myself and provide me products and I need capital to start
            </p>
            <span>
            
            Jane Doe
            </span>
          </div>
          <div className="col">
            <ArrowRight />

         
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
