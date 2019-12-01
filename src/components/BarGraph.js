import React, { Component} from 'react';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas,
    DiscreteColorLegend
  }  from 'react-vis';


import {connect} from "react-redux";


function generateData(datos, tipo){
    console.log('generar datos ahora', datos, tipo);
    let data = [];
    datos.map(row => ( 
        row.active &&     
        (data = data.concat({x: row.periodo +' '+row.year, y: tipo === 'hombres' ? parseInt(row.hombres) : parseInt(row.mujeres)}))

        
    )); 

    return data; 
}

class BarGraph extends Component {
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

      }  
      return (

        <div>
            {this.state.showNavBar &&
             <NavBar value="Gráfica de Barras"/>
            }

            <Container maxWidth="xl">
            {fullData &&
                <div>
                
                <XYPlot
                    className="clustered-stacked-bar-chart-example"
                    xType="ordinal"
                    stackBy="y"
                    width={600}
                    height={400}
                    >

                    <DiscreteColorLegend
                        style={{position: 'absolute', left: '50px', top: '10px'}}
                        orientation="horizontal"
                        items={[
                        {
                            title: 'Hombres', //Apples
                            color: '#12939A'
                        },
                        {
                            title: 'Mujeres', //Oranges 
                            color: '#79C7E3'
                        }
                        ]}
                    />
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis tickLabelAngle={-45} />
                    <YAxis />
                    <VerticalBarSeries  cluster="hombres" color = '#12939A' data={datosHombres} />
                    <VerticalBarSeries  cluster="mujeres" color= '#79C7E3' data={datosMujeres} />
                    </XYPlot>
                </div>
                
            }

            </Container>
        
     
        </div>
    );
  }
}

const mapStateToProps = state => (
    {
    employmentData: state.employmentDataReducer
});

export default connect(mapStateToProps)(BarGraph);



