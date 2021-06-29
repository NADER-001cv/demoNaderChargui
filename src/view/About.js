import React from 'react'
import img_a from '../images/about_img/a.png'
import img_b from '../images/about_img/b.png'
import  './index.css'
function About() {
    return (
      <div className="aboutlayout">
          <div className="container">
             <div  className="row justify-content-center align-items-center ">
               <div className="col-6 p-4 ">
                 <img  src={img_a}    className=" d-block w-25 mb-3"  alt="a"/>
                                  <img  src={img_b}  className=" d-block w-25" alt="a"/>

               </div>
                      <div className="col-6  bg-white about_card p-5">
                           <h1>
                            About Us 
                           </h1>
                           <p>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit mi mauris, nec lacinia tortor venenatis sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris interdum erat purus, sit amet consectetur tortor pharetra ac. Nullam a arcu vel mi faucibus pulvinar. Cras pretium convallis est, at consequat lacus ornare quis.
                           </p>
               </div>
             </div>
          </div>
      </div>
    )
}

export default About
