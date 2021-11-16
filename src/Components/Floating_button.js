import React from 'react';
import { makeStyles } from "@mui/styles";
import CallIcon from '@mui/icons-material/Call';

const useStyles = makeStyles ({
    flaoting__button_link:{
        position: 'absolute',
        left:"-115px",
        transition: "0.3s",
        padding:"15px",
        width:'160px',
        fontSize:"20px",
        color:"white",
        textDecoration:"none",
        marginTop:"11rem",

        "&:hover":{
            left: 0,
            backgroundColor:"yellow",
            color:"black",
            cursor:"pointer"
        }
    }
})

const Floating_button = () => {

    const classes = useStyles();

    return (
        <div className={classes.flaoting__button}>
            <div style={{textAlign:"center", justifyContent:"center", display:"flex"}}>

            <a className={classes.flaoting__button_link}>Contact US<CallIcon style={{float:"right"}}/></a>
            </div>
        </div>
    )
}

export default Floating_button
