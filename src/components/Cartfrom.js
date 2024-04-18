import React, { useState } from 'react'
import Cart from './Cart';


export default function Cartfrom(props) {
  const [cart,setcart]=useState()
  const handleCartOpen=()=>{
    setcart(true)
  }
  const handleCartClose=()=>{
    setcart()
  }
    var cartvalue=280*props.drum+220*props.wings+240*props.stripes+540*props.combo3+360*props.combo2+20*props.dip;
  return (
    <>
      {
        cartvalue>0&&<div className="container-fluid sticky-bottom d-flex justify-content-between p-1" style={{backgroundColor:"rgba(94,168,0)"}}>
       <span className="btn btn text-light fs-3 ms-2">Cart : {`${props.drum+props.wings+props.stripes+props.combo3+props.combo2+props.dip}`} Item</span>
       <span className="btn btn text-light border border-light fs-4 me-2 mt-1" onClick={handleCartOpen}>View Cart  <i className="fs-5 fa fa-thin fa-cart-shopping"></i></span> 
      </div>
      }
      {cart&&<Cart handleCartClose={handleCartClose} drum={props.drum} wings={props.wings} stripes={props.stripes} combo3={props.combo3} combo2={props.combo2} dip={props.dip}/>}
    </>
  )
}
