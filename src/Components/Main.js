import React from "react";
import Navbar from "./Navbar";
import Floating_button from "./Floating_button";
import { makeStyles } from "@mui/styles";

//css style
const useStyles = makeStyles({
  main__container: {
    backgroundImage: `url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
  },

  main__head: {
    margin: "auto",
    width: "60%",
    marginTop: "15%",
  },
  main__head_titleHeading: {
    color: "white",
    textAlign: "center",
  },
  main__head_title: {
    color: "skyblue",
    textAlign: "center",
    textTransform: "uppercase",
  },
  main__head_paragragph: {
    textAlign: "center",
    color: "grey",
  },
});

const Main = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.main__container}>
      <Navbar/>
      <Floating_button />

      <div className={classes.main__head}>
        <h5 className={classes.main__head_title}>we are heros of</h5>
        <h1 className={classes.main__head_titleHeading}>
          Design, Developement, and Identity for your Product
        </h1>
        <p className={classes.main__head_paragragph}>
          Loading digital agency with solid design and development expertise
        </p>
      </div>
    </div>
  );
};

export default Main;
