import React from "react";
import logos from './logop2.png'
import './Heading.css'
function Heading(){
    return(
        <div className="logo-title">
            <img  className="lg" src={logos} alt="logoimg" />
            <div className="title"><h1>BEHIND BARS </h1></div>
        </div>
    )
}
export default Heading;