import React, { Component } from 'react';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import ButtonLink from './ButtonLink';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PieGraph from './PieGraph';
import LineGraph from './LineGraph';
import BarGraph from './BarGraph'; 
import Example from './Example';
import CheckboxLabels from './CheckBoxLabels';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CheckboxLabels/>
      <Grid container spacing={3}>
        
        <Grid item xs={6}>
          <Paper className={classes.paper}><PieGraph showNavBar={false}/> </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><LineGraph showNavBar={false}/> </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><BarGraph showNavBar={false}/> </Paper>
        </Grid>
      </Grid>
    </div>
  );
}


class PrincipalView extends Component {
  render() {
    return (
        <div>
          
            <NavBar value="Datos de desempleo"/>
            <Container maxWidth="xl">
                <ButtonLink link={'PieGraph'} titulo={'Gráfica de Pie'}/>
                <ButtonLink link={'LineGraph'} titulo={'Gráfica de Linea'}/>
                <ButtonLink link={'BarGraph'} titulo={'Gráfica de barras'}/>
                <CenteredGrid/>
            </Container>
        </div>
    );
  }
}

export default PrincipalView;