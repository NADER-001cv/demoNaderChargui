import React from 'react'
import  './header.css'
import social from '../../images/socialmedia.png'
import apostrophe from '../../images/apostroph.png'

function Header() {
    return (
        <div className="header ">
            <div className="container">
                <div className="row   align-items-start">
                      <div className="col-md-6  col-6 p-4">
                          <img src={social}  className="w-100" alt="img_of_header"  />
                      </div>
                      <div className="col-md-6 col-6 mt-4 text-start p-4">
                      <img src={apostrophe}  className="mb-2" alt="imgapostrophe"  />
                          <div className="fw-bolder fs-1">
                             <span> We Deliver</span> 
                           <p className=""> 
                        Good Quality of Service
                        </p>
                          </div>
                         <div  className="para_end fs-4" >
                        <p >
                        Partner with us to increase your <br/>
                        marketing level and provitability
                        </p>
                         </div>
                      </div>
                </div>
            </div>
        </div>
    )
}

export default Header
