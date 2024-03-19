// eslint-disable-next-line no-unused-vars
import React from "react";
import './index.css';

const Hero =() => {
    return (
       <section className="intro">
        <img className="heroImage" src="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400884.jpg" alt="" />
        <div className="introContent">
                 <span className="hello">Hello</span>
                 <span className="introtext">Im <span className="introName">AbdulWahed</span><br />Website Designer</span>
                 <p className="introPara"> I am skilled designer with one year experience  </p>
              
        </div>
       </section>
    )
}

export default Hero