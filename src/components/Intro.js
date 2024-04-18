import React from 'react'
import drumstick from './img/Menu/Drumstick.png'
import wingsimg from './img/Menu/Wings.png'
import stripesimg from './img/Menu/Strips.png'
import comboimg from './img/Menu/Combo.png'
import combo from './img/Menu/1.jpeg'

export default function Intro() {
  return (
    <>
    <div className="introcontainer" style={{backgroundColor:"rgba(236,50,55,255)"}}>
    <div className='col-6 p-2 text-center text-light introcaption'><p>" Get ready to satisfy your cravings with our delicious fried chicken! Our secret blend of spices and crispy coating will have you coming back for more."</p></div>
    <div className="col-6 p-2">
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-item active m-0">
      <img src={combo} className="sliderimg" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={drumstick} className="sliderimg" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={wingsimg} className="sliderimg" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={stripesimg} className="sliderimg" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={comboimg} className="sliderimg" alt="..."/>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="caption">
        <p className='text-center mt-3 text-danger fs-1'>Get crispy, get happy with our Fried Chicken....!</p>
    </div>
    </>
  )
}

