import React from 'react'
import check from './img/check.gif'

export default function Thankyou(props) {
    setTimeout(() => {
        document.location.reload();
    }, 3000);
  return (
    <>
    <div className="container-fluid Delivery border border-5 border-danger">
      <div
        className="btn btn float-end fs-2"
        onClick={props.handleThankClose}
      >
        <i className="fa fa-thin fa-xmark"></i>
      </div>
      <div className="container thank  mt-5 text-center">
      <h1 className='text-danger'>Order Confirmed</h1>
      <h2>Thank You</h2>
      <div className='container h-50'><img src={check} alt="" /></div>
      <h5>Visit Again</h5>
      </div>
    </div>
      
    </>
  )
}
