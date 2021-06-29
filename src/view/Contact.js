import React from 'react'
import contact from '../images/contact_img/contact.png'
import  './index.css'
function Contact() {
    return (
              <div>
             <div className="container justify-content-start  contactlayout" >
               <div className="row  align-items-start  ">
                 <div className="col-lg-6 align-top align-self-start">
                   <img  src={contact} alt="about" className="w-100 " />
                 </div>
                      <div className="col-lg-6 mt-5 align-self-center p-2">
                          <span>
                            <h1 className="h1">
                            How Can We Help ?
                            </h1>
                          </span>
                           <form className="">
                                <div class="mb-3">
                                
                                    <input type="email" class="form-control" placeholder="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                                </div>
                                <div class="mb-3">
                                   
                                    <input type="text" class="form-control"  placeholder="subject"  id="exampleInputPassword1"/>
                                </div>
                             <div class="form-floating mb-3">
                                   <textarea class="form-control" placeholder="Description" id="floatingTextarea2"    style={{height: "200px"}}></textarea>
                                                                <label for="floatingTextarea2">Description</label>
                             </div>
                                 <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="submit" class="btn btn-primary ">Submit</button>
                                 </div>
                                </form>
                 </div>
               </div>
             </div>
        </div>
    )
}

export default Contact
