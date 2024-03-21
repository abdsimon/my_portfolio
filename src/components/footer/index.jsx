// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css"
import Linkden from "@iconscout/react-unicons/icons/uil-Linkden";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      
      <div className="f-content">
        <span>diababdulwahed@gmail.com</span>
        <div className="f-icons">
          <Linkden color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;