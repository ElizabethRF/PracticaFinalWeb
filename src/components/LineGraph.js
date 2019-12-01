import React, { Component } from 'react';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  ChartLabel, 
  LineSeries
} from 'react-vis';


function generateData(datos, tipo){
  const MSEC_DAILY = 86400000 *31;
  let x = 1; 
  const timestamp = new Date('January 1 2017').getTime();
  console.log('generar datos ahora', datos, tipo);
  let data = [];
  datos.map(row => (
      x = x+1, 
      data = data.concat({x: timestamp + MSEC_DAILY * x , y: tipo === 'hombres' ? parseInt(row.hombres) : parseInt(row.mujeres)})
      
  )); 

  return data; 
}

class LineGraph extends Component {
  constructor(props){
    super(props);
    this.state  = {
        employmentData: null, 
        showNavBar: true
    }
}


componentDidMount(){
    this.setState({employmentData: this.props.employmentData, showNavBar: this.props.showNavBar === false ? false:true }); 

}


  render() {

    let fullData  = false; 
      if(this.props.employmentData.employmentData.length === 33){
        fullData = true; 
      }
      let datosHombres = []; 
      let datosMujeres = []; 
      if(fullData){
        datosHombres = generateData(this.props.employmentData.employmentData, 'hombres'); 
        datosMujeres = generateData(this.props.employmentData.employmentData, 'mujeres'); 
        console.log('datos hombres',datosHombres);
        console.log('datos mujeres', datosMujeres);
      }
    
    return (
        <div>
        {this.state.showNavBar &&
            <NavBar value="Gráfica tipo Linea"/>}
            <Container maxWidth="xl">
                {/*Linea */}

                {fullData &&
                  <XYPlot xType="time" width={500} height={300} yDomain={[0, 6]}>
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <XAxis title="Time"/>
                    <YAxis title="People" />
                    <LineSeries
                      data={datosHombres}
                    />
                    <LineSeries
                      data={datosMujeres}
                    />
                  </XYPlot>
                }

                
            </Container>
        
     
        </div>
    );
  }
}

const mapStateToProps = state => (
  console.log('error', state.employmentDataReducer),
  {
  employmentData: state.employmentDataReducer

});

export default connect(mapStateToProps)(LineGraph);