import React from "react";
import { useState } from "react";
import drumstick from './img/Menu/Drumstick.png'
import wingsimg from './img/Menu/Wings.png'
import stripesimg from './img/Menu/Strips.png'
import comboimg from './img/Menu/Combo.png'
import dipimg from './img/Menu/dip.png'
import Cartfrom from "./Cartfrom";
import Footer from "./Footer";

export default function Menu() {
    const [drum,setdrum]=useState(0)
    const [wings,setwings]=useState(0)
    const [stripes,setstripes]=useState(0)
    const [combo3,setcombo3]=useState(0)
    const [combo2,setcombo2]=useState(0)
    const [dip,setdip]=useState(0)
    const handlePlusClick=(item)=>{
        switch (item){
          case 'drum':
          setdrum(drum+1);
          break;
          case 'wings':
          setwings(wings+1);
          break;
          case 'stripes':
          setstripes(stripes+1);
          break;
          case 'combo3':
          setcombo3(combo3+1);
          break;
          case 'combo2':
          setcombo2(combo2+1);
          break;
          case 'dip':
          setdip(dip+1);
          break;
          default:
        }
      }  
    const handleMinusClick=(item)=>{
      switch(item){
        case 'drum':
          drum>0?
          setdrum(drum-1):setdrum(0);
          break;
        case 'wings':
          wings>0?
          setwings(wings-1):setwings(0);
          break;
        case 'stripes':
          stripes>0?
          setstripes(stripes-1):setstripes(0);
          break;
          case 'combo3':
          combo3>0?
          setcombo3(combo3-1):setcombo3(0);
          break;
          case 'combo2':
          combo2>0?
          setcombo2(combo2-1):setcombo2(0);
          break;
          case 'dip':
          dip>0?
          setdip(dip-1):setdip(0);
          break;
          default:
      }
    }

  return (
    <>
      <div className="container-fluid border-5 rounded text-center" id="Menu" /*style={{backgroundColor:"rgba(236,50,55,255)"}}*/>
        <h1 className="text-danger">Menu</h1> 
        <div className="container-fluid  border border-danger border-5 rounded">
          <div className="row menucard d-flex justify-content-around">
          <div className="card border border-warning p-0 m-4" /*style={{width:"18rem"}}*/>
            <img src={drumstick} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">Chicken Drumstick</h3>
              <i className="fa fa-light fa-indian-rupee-sign"></i> <h5 className="card-title d-inline">280.00</h5>
              <p className="card-text">
              4 Peice
              </p>
              <span className="container d-flex justify-content-between p-0 m-0">
              <i className="fa fa-light fa-minus fs-4 btn" onClick={()=>{handleMinusClick('drum')}}></i>
                <div className="fs-3 p-0 m-0">{drum}</div>
              <i className="fa fa-light fa-plus fs-4 btn" onClick={()=>{handlePlusClick('drum')}}></i>
              </span>
            </div>
        </div>
          <div className="card border border-warning p-0 m-4" /*style={{width:"18rem"}}*/>
            <img src={wingsimg} className="card-img-top" alt="..." />
            <div className="card-body mt-1">
              <h3 className="card-title">Chicken Wings</h3>
              <i className="fa fa-solid fa-indian-rupee-sign"></i> <h5 className="card-title d-inline">220.00</h5>
              <p className="card-text">
              8 Peice
              </p>
              <span className="container d-flex justify-content-between p-0 m-0">
              <i className="fa fa-light fa-minus fs-4 btn" onClick={()=>{handleMinusClick('wings')}}></i>
                <div className="fs-3 p-0 m-0">{wings}</div>
              <i className="fa fa-light fa-plus fs-4 btn" onClick={()=>{handlePlusClick('wings')}}></i>
              </span>
            </div>
        </div>
          <div className="card border border-warning p-0 m-4" /*style={{width:"18rem"}}*/>
            <img src={stripesimg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">Boneless Stripes</h3>
              <i className="fa fa-solid fa-indian-rupee-sign"></i> <h5 className="card-title d-inline">240.00</h5>
              <p className="card-text">
              8 Peice
              </p>
              <span className="container d-flex justify-content-between p-0 m-0">
              <i className="fa fa-light fa-minus fs-4 btn" onClick={()=>{handleMinusClick('stripes')}}></i>
                <div className="fs-3 p-0 m-0">{stripes}</div>
              <i className="fa fa-light fa-plus fs-4 btn" onClick={()=>{handlePlusClick('stripes')}}></i>
              </span>
            </div>
        </div>
          <div className="card border border-warning p-0 m-4" /*style={{width:"18rem"}}*/>
            <img src={comboimg} className="card-img-top" alt="..." />
            <div className="card-body mt-1">
              <h3 className="card-title">Combo Serves 3</h3>
              <i className="fa fa-solid fa-indian-rupee-sign"></i> <h5 className="card-title d-inline">540.00</h5>
              <p className="card-text">
              3 Drumsticks, 6 Wings, 6 Boneless stripes
              </p>
              <span className="container d-flex justify-content-between p-0 m-0">
              <i className="fa fa-light fa-minus fs-4 btn" onClick={()=>{handleMinusClick('combo3')}}></i>
                <div className="fs-3 p-0 m-0">{combo3}</div>
              <i className="fa fa-light fa-plus fs-4 btn" onClick={()=>{handlePlusClick('combo3')}}></i>
              </span>
            </div>
        </div>
          <div className="card border border-warning p-0 m-4" /*style={{width:"18rem"}}*/>
            <img src={comboimg} className="card-img-top" alt="..." />
            <div className="card-body mt-1">
              <h3 className="card-title">Combo Serves 2</h3>
              <i className="fa fa-solid fa-indian-rupee-sign"></i> <h5 className="card-title d-inline">360.00</h5>
              <p className="card-text">
              2 Drumsticks, 4 Wings, 4 Boneless stripes
              </p>
              <span className="container d-flex justify-content-between p-0 m-0">
              <i className="fa fa-light fa-minus fs-4 btn" onClick={()=>{handleMinusClick('combo2')}}></i>
                <div className="fs-3 p-0 m-0">{combo2}</div>
              <i className="fa fa-light fa-plus fs-4 btn" onClick={()=>{handlePlusClick('combo2')}}></i>
              </span>
            </div>
        </div>
          <div className="card border border-warning p-0 m-4" /*style={{width:"18rem"}}*/>
            <img src={dipimg} className="card-img-top" alt="..." />
            <div className="card-body mt-1">
              <h3 className="card-title">Dip</h3>
              <i className="fa fa-solid fa-indian-rupee-sign"></i> <h5 className="card-title d-inline">20.00</h5>
              <p className="card-text">
              1 Cup
              </p>
              <span className="container d-flex justify-content-between p-0 m-0">
              <i className="fa fa-light fa-minus fs-4 btn" onClick={()=>{handleMinusClick('dip')}}></i>
                <div className="fs-3 p-0 m-0">{dip}</div>
              <i className="fa fa-light fa-plus fs-4 btn" onClick={()=>{handlePlusClick('dip')}}></i>
              </span>
            </div>
        </div>
        </div>
          </div>
          </div>
          <Footer/> 
          <Cartfrom drum={drum} wings={wings} stripes={stripes} combo3={combo3} combo2={combo2} dip={dip}/>
    </>
  );
  }
