import React, { useState } from 'react'
import Deliverydetails from './Deliverydetails'

export default function Cart(props) {
  const [porder,setporder]=useState()
  const handlePlaceOrder=()=>{
    setporder(true)
  }
  const handlePlaceOrderClose=()=>{
    setporder()
  }
  var Ammount=280*props.drum+220*props.wings+240*props.stripes+540*props.combo3+360*props.combo2+20*props.dip
  return (
    <>
        <div className="container-fluid Cart border border-5 border-danger">
        <div className="btn btn float-end fs-2" onClick={props.handleCartClose}><i className="fa fa-thin fa-xmark"></i></div>
            <div className="container innercart mt-5 text-center border border-warning rounded"><h1 className='text-light'>Cart</h1>
                <div className="container-fluid border bg-light border-warning rounded">
                  <h5>Order Details</h5>
                  <div className="row border border-light my-1">
                    <div className='col-7 text-start'>Item</div><div className='col-2 text-start'>Qty</div><div className='col-3 text-start'>Amt.</div>
                    <hr />
                    </div>
                    {props.drum>0&&
                      <div className="row border border-light my-1">
                    <div className='col-7 text-start fw-bold'>Chicken Drumstick</div><div className='col-2 text-start fw-bold'>{props.drum}</div><div className='col-3 text-start fw-bold'>{props.drum*280}</div>
                    </div>
                    } 
                    {props.wings>0&&
                      <div className="row border border-light my-1 ">
                    <div className='col-7 text-start fw-bold'>Chicken Wings</div><div className='col-2 text-start fw-bold'>{props.wings}</div><div className='col-3 text-start fw-bold'>{props.wings*220}</div>
                    </div>
                    } 
                    {props.stripes>0&&
                      <div className="row border border-light my-1">
                    <div className='col-7 text-start fw-bold'>Boneless stripes</div><div className='col-2 text-start fw-bold'>{props.stripes}</div><div className='col-3 text-start fw-bold'>{props.stripes*240}</div>
                    </div>
                    } 
                    {props.combo3>0&&
                      <div className="row border border-light my-1">
                    <div className='col-7 text-start fw-bold'>Combo Serves 3</div><div className='col-2 text-start fw-bold'>{props.combo3}</div><div className='col-3 text-start fw-bold'>{props.combo3*540}</div>
                    </div>
                    } 
                    {props.combo2>0&&
                      <div className="row border border-light my-1">
                    <div className='col-7 text-start fw-bold'>Combo Serves 2</div><div className='col-2 text-start fw-bold'>{props.combo2}</div><div className='col-3 text-start fw-bold'>{props.combo2*360}</div>
                    </div>
                    } 
                    {props.dip>0&&
                      <div className="row border border-light my-1">
                    <div className='col-7 text-start fw-bold'>Dip</div><div className='col-2 text-start fw-bold'>{props.dip}</div><div className='col-3 text-start fw-bold'>{props.dip*20}</div>
                    </div>
                    } 
                    
            <div className="row border border-light my-1 fs-5">
            <hr />
                    <div className='col-7 text-start fw-bold'> Total:</div><div className='col-5 fw-bold'>{Ammount}</div>
                    </div>
                </div>
            <div className="btn btn my-3 text-light fs-5" onClick={handlePlaceOrder}style={{backgroundColor:"rgba(94,168,0)"}}>Place Order</div>{porder&&<Deliverydetails handlePlaceOrderClose={handlePlaceOrderClose} Ammount={Ammount}/>}
            </div>
        </div>
    </>
  )
}
