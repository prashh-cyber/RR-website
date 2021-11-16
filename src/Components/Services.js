import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  services__wrapper: {
    backgroundImage: `url('https://images.unsplash.com/photo-1510906594845-bc082582c8cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=844&q=80')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
  },
  services__container:{
      textAlign:"center"
  },
  services__head:{
      color:"skyblue",
      paddingTop:"30px",
      textTransform:"uppercase"
  },
  services__head_heading:{
      color: "White"
  },
  service__services:{
      color:"grey",
      marginTop:"7rem",
      fontSize:"1.5rem",
      marginLeft:"2rem",
      display:"inline-block",
  },
  service__services_list_1:{
    marginBottom:"30px",

    "&:hover":{
      color:"white",
      cursor:"pointer"
    }
  },
  service__services_list_2:{
    marginBottom:"30px",
    "&:hover":{
      color:"white",
      cursor:"pointer"
    }
  },
  service__services_list_3:{
    marginBottom:"30px",
    "&:hover":{
      color:"white",
      cursor:"pointer"
    }
  },
  service__services_list_4:{
    marginBottom:"30px",
    "&:hover":{
      color:"white",
      cursor:"pointer"
    }
  },
  service__services_list_5:{
    marginBottom:"30px",
    "&:hover":{
      color:"white",
      cursor:"pointer"
    }
  }

});

const Services = () => {
    const classes = useStyles();
  return (
    <div className={classes.services__wrapper}>
      <div className={classes.services__container} >
          <h5 className={classes.services__head}>What we do</h5>
          <h1 className={classes.services__head_heading}>Services</h1>
      </div>

      <div  >
          <ol className={classes.service__services}>
                <li className={classes.service__services_list_1}  >Mobile Application Developement</li>
                <li className={classes.service__services_list_2}>Frontend Developement</li>
                <li className={classes.service__services_list_3}>Backend Developement</li>
                <li className={classes.service__services_list_4}>Blockchain</li>
                <li className={classes.service__services_list_5}>UI/UX design</li>
          </ol>
      </div>
    </div>
  );
};

export default Services;
