import React from "react";
import AppStore from "./AppStore";
import PlayStore from "./PlayStore";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-between align-items-center ">
          <div className="col-md-6 col-6 text-start">
            <h3 className="fw-bold fs-1 mb-3 pb-1">Lilo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              hendrerit mi mauris, nec lacinia tortor venenatis sit amet.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
            <p>Privacy Policy</p>
            <p>Terms and Condition</p>
            <p>© 2021 All rights Reserved</p>
          </div>

          <div className="col-md-4 col-6  offset-md-2 p-4">
            <h3 className="fw-bold fs-1 text-start">Subscribe</h3>

            {/*<div class="mb-3 d-flex end_footer">
 
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email"/>
  <input  type="submit" className="  btn text-white bg-secondary"/>
</div>*/}

            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control bg-white rounded-0  border border-secondary"
                placeholder="email"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text text-white bg-secondary" id="basic-addon2">
                Submit
              </span>
            </div>

            <div className="row justify-content-between ">
              <div className="col-4">
                <a className=" btn ">
                  <PlayStore />
                </a>
              </div>
              <div className="col-4 offset-sm-4">
                <a className="btn">
                  <AppStore />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
