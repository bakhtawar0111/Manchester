import React, { useState } from "react";
import Thankyou from "./Thankyou";

export default function Deliverydetails(props) {
  const [thank, setthank] = useState();
  const handleThank = () => {
    setthank(true);
  };
  const handleThankClose = () => {
    setthank();
  };
  const [Name, setName] = useState("");
  let handleNameOnchange = (event) => {
    setName(event.target.value);
  };
  const [Mobile, setMobile] = useState("");
  let handleMobileOnchange = (event) => {
    setMobile(event.target.value);
  };
  const [Email, setEmail] = useState("");
  let handleEmailOnchange = (event) => {
    setEmail(event.target.value);
  };
  const [Address, setAddress] = useState("");
  let handleAddressOnchange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="container-fluid Delivery border border-5 border-danger">
      <div
        className="btn btn float-end fs-2"
        onClick={props.handlePlaceOrderClose}
      >
        <i className="fa fa-thin fa-xmark"></i>
      </div>
      <div className="container innercart mt-5 text-center border border-danger rounded">
        <h1 className="text-light">Delivery Details</h1>
        <div className="container-fluid border bg-light border-warning rounded">
          <div className="row border border-light my-1">
            <div className="col-lg-12">
              <input
                className="form-control"
                id="Name"
                placeholder="Name"
                onChange={handleNameOnchange}
                value={Name}
              />
            </div>
          </div>
          <div className="row border border-light my-1">
            <div className="col-lg-6">
              <input
                type="Number"
                className="form-control"
                id="Mobile"
                placeholder="Mobile No."
                onChange={handleMobileOnchange}
                value={Mobile}
              />
              <label htmlFor="Mobile">Minimum 10 digits</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                id="Email"
                placeholder="Email"
                onChange={handleEmailOnchange}
                value={Email}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <textarea
                className="form-control"
                id="Address"
                rows="3"
                placeholder="Address"
                onChange={handleAddressOnchange}
                value={Address}
              ></textarea>
            </div>
            <div className="col-lg-6">
              Total Payable:
              <div className="row">
                <h2>{props.Ammount}Rs</h2>
              </div>
            </div>
          </div>
        </div>
        <button
          //disabled={Mobile.length<10||Name.length===0||Address.length===0||Email.length===0}
          className="btn btn my-3 text-light fs-5"
          style={{ backgroundColor: "rgba(94,168,0)" }}
          onClick={handleThank}
        >
          Confirm Order
        </button>
        {thank && <Thankyou handleThankClose={handleThankClose} />}
      </div>
    </div>
  );
}
