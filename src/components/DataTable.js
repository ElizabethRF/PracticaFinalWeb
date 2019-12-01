import React, { Component } from 'react';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";


class DataTable extends Component {

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
    return (
        <div>
        {this.state.showNavBar &&
            <NavBar value="Datos"/>}
            <Container maxWidth="xl">
            </Container>
        </div>
    );
  }
}

const mapStateToProps = state => (
  {
  employmentData: state.employmentDataReducer
});

export default connect(mapStateToProps)(DataTable);