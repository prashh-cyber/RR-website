import React from "react";
import {Link } from 'react-router-dom'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles ({
  Home_list:{
   color:"white !important",
   textDecoration:"none",
   padding:"10px",


   "&:hover":{
    cursor:"pointer",
    backgroundColor:"skyblue",
    padding:"10px",
    color:"black !important",
    borderRadius:"3px"
   }
 },

 services_list:{
  color:"white !important",
  textDecoration:"none",
  padding:"10px",


  "&:hover":{
   cursor:"pointer",
   backgroundColor:"skyblue",
   padding:"10px",
   color:"black !important",
   borderRadius:"3px"
  }
 },

 contact_list:{
  color:"white !important",
  textDecoration:"none",
  padding:"10px",


  "&:hover":{
   cursor:"pointer",
   backgroundColor:"skyblue",
   padding:"10px",
   color:"black !important",
   borderRadius:"3px"
  }
 },
})

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <div className="navbar__container">
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand mx-3" style={{ color: "skyblue" }}>
          RR Technology
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto " >
            <li className="nav-item"   >
              <a className="nav-link mx-3" className={classes.Home_list}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3" className={classes.services_list}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" className={classes.contact_list}>Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );


};

export default Navbar;
