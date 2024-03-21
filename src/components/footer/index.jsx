// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css"
import {Github,Linkedin} from "lucide-react";

const Footer = () => {
  return (
    <div className="footer">
      
      <div className="f-content">
        <span>diababdulwahed@gmail.com</span>
        <div className="f-icons">
        
          <Github/>
          <Linkedin />
          
        </div>
      </div>
    </div>
  );
};

export default Footer;