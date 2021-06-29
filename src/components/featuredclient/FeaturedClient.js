import React from "react";

import Allianz from './icon/Allianz'
import Hsbc from './icon/Hsbc'
import Apple from './icon/Apple'
import Nike from './icon/Nike'
import Adidas from './icon/Adidas'
import Microsoft from './icon/Microsoft'
import Google from './icon/Google'
import Nestle from './icon/Nestle'
import "./featuredclient.css";
function FeaturedClient() {
  return (
    <div  className="section_client vh-90 ">
      <div className="container p-5 ">
            <h3 className="text-center h3 mt-5 mb-5 fw-bolder fs-1">
              Featured Client
            </h3>
        <div className="row  align-items-center  ">
          <div className="col">
            <Allianz/>
          </div>
           <div className="col">
            <Hsbc/>
           </div>
            <div className="col">
            <Apple/>
            </div>
             <div className="col">
             <Nike/>
             </div>
              <div className="col">
              <Adidas/>
              </div>
        </div>

        <div className="row   pt-5   pb-5 align-items-end mt-5" >
           <div className="col ">
            <Microsoft
          
            />
          </div>
           <div className="col">
            <Google/>
           </div>
            <div className="col">
            <Nestle/>
            </div>
        
        </div>
      </div>
    </div>
  );
}

export default FeaturedClient;
