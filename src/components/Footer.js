import React from 'react'
import map from './img/Map.png'
import logo from './img/Logo.png'

export default function Footer() {
  return (
    <>
        <div className="container-fluid mt-5" id='Contact' style={{backgroundColor:"rgba(236,50,55,255)"}}>
            <div className="row">
                <div className="col-6 text-light">Contact Us
                <h4> <u>Kaif.S.Momin</u></h4>
                <i className="fa fa-brands fa-whatsapp"></i> +91 70667 77878 <br />
                <i className="fa fa-solid fa-location-dot"></i> 8/684,<br /> A1&2,Sangli Road,<br /> Ichalkaranji-416115,<br />Hathkanagale, Kolahapur, Maharashtra , India<br />
                <i className="fa fa-regular fa-timer"></i> 18:00-23:00 
                </div>
                <div className="col-6 footer">
                    <img src={logo}  alt="" className="footer-img"/>
                    <a href="https://www.google.com/maps/search/8%2F684,+A1%262,+Ichalkaranji+Sangli+Road,+Near+Badshah+Petrol+Pump,+Taluka-+Hathkanagale+Dist-+Kolahapur,+Rajwada,+Ichalkaranji,+Maharashtra+416115,+India/@16.6875,74.4736,17z?hl=en&entry=ttu"> <img src={map} alt="" className='footer-map border border-3 rounded'/></a>
                </div>
            </div>
            
        </div>
    </>
  )
}
