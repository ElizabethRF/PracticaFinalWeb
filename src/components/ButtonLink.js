import React , {Component} from 'react';
import {BrowserRouter as Router,  Link } from "react-router-dom";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    button: {
      margin: theme.spacing(1),
      display: "right"
  
    },
  }));



export default function ButtonLink(props){
    const classes = useStyles();
    return(
      <Button variant="contained"  className={classes.button} component={Link} to={props.link} >
        {props.titulo}
        </Button>
  
    );
    
  }

