import React , {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  backPink:{
    background: "#2e5438",
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

 function Navigation(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <div className={classes.root}>

      <AppBar position="static" className={classes.backPink}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" component={Link} to="/">
            <HomeIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            {props.value}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation; 