import React, { useState } from "react";
import Thankyou from "./Thankyou";

export default function Deliverydetails(props) {
  const [invalidEmail, setInvalidEmail] = useState();
  const [invalidAdd, setInvalidAdd] = useState();
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
    document.getElementById("Name").style.borderColor = "white";
  };
  const [Mobile, setMobile] = useState("");
  let handleMobileOnchange = (event) => {
    setMobile(event.target.value);
    document.getElementById("Mobile").style.borderColor = "white";
  };
  const [Email, setEmail] = useState("");
  let handleEmailOnchange = (event) => {
    setEmail(event.target.value);
    document.getElementById("Email").style.borderColor = "white";
    setInvalidEmail("");
  };
  const [Address, setAddress] = useState("");
  let handleAddressOnchange = (event) => {
    setAddress(event.target.value);
    document.getElementById("Address").style.borderColor = "white";
    setInvalidAdd();
  };
  const checkEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      document.getElementById("Email").style.borderColor = "red";
      setInvalidEmail(true);
    } else {
      handleThank();
    }
  };
  const checkValidation = () => {
    if (Name.length === 0) {
      document.getElementById("Name").style.borderColor = "red";
    } else if (Mobile.length < 10) {
      document.getElementById("Mobile").style.borderColor = "red";
    } else if (Address.length < 10) {
      document.getElementById("Address").style.borderColor = "red";
      setInvalidAdd(true);
    } else {
      checkEmail();
    }
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
                placeholder="Name *"
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
                placeholder="Mobile No.*"
                onChange={handleMobileOnchange}
                value={Mobile}
              />
              <label htmlFor="Mobile">Minimum 10 digits</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                id="Email"
                placeholder="Email *"
                onChange={handleEmailOnchange}
                value={Email}
              />
              {invalidEmail && (
                <p
                  style={{ fontSize: "14px", textAlign: "right", color: "red" }}
                >
                  *Invalid Email
                </p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <textarea
                className="form-control"
                id="Address"
                rows="3"
                placeholder="Address *"
                onChange={handleAddressOnchange}
                value={Address}
              ></textarea>
              {invalidAdd && (
                <p
                  style={{ fontSize: "14px", textAlign: "right", color: "red" }}
                >
                  * Kindly provide full Address
                </p>
              )}
            </div>
            <div className="col-lg-6">
              Total Payable:
              <div className="row">
                <h2>{props.Ammount}Rs</h2>
              </div>
            </div>
          </div>
        </div>
        <p style={{ fontSize: "14px", textAlign: "right", color: "white" }}>
          All fields (*) are Mandatory
        </p>
        <button
          //disabled={Mobile.length<10||Name.length===0||Address.length===0||Email.length===0}
          className="btn btn my-3 text-light fs-5"
          style={{ backgroundColor: "rgba(94,168,0)" }}
          onClick={checkValidation}
        >
          Confirm Order
        </button>
        {thank && <Thankyou handleThankClose={handleThankClose} />}
      </div>
    </div>
  );
}
