import React, { Component } from 'react';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import {RadialChart} from 'react-vis';
import {connect} from "react-redux";


function generateData(datos){
  console.log('generar datos ahora', datos);
  let data = [];
  let countMen = 0; 
  let countWomen = 0; 
  datos.map(row => (
      
    countMen = countMen + parseInt(row.hombres), 
    countWomen = countWomen + parseInt(row.mujeres)
      
  )); 
  data = data.concat({title: 'hombres' , count: countMen })
  data = data.concat({title: 'mujeres' , count: countWomen})

  return data; 
}



class PieGraph extends Component {
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
      let datosGlobales = []; 
      if(fullData){
        datosGlobales = generateData(this.props.employmentData.employmentData); 
        console.log('datos globales', datosGlobales);

      } 

    return (
        <div>
        {this.state.showNavBar &&
            <NavBar value="Gráfica tipo Pie"/>}
            <Container maxWidth="xl">
            <div>
              <RadialChart
                innerRadius={75}
                radius={115}
                getAngle={d => d.count}
                data={datosGlobales}
                height={250}
                width={250}
                getLabel={d => d.title}
                showLabels>
              </RadialChart>
            </div>
            </Container>
        
     
        </div>
    );
  }
}
const mapStateToProps = state => (
  {
  employmentData: state.employmentDataReducer
});

export default connect(mapStateToProps)(PieGraph);