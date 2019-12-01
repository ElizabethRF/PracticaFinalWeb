import React, { Component, useEffect } from 'react';
import * as d3 from 'd3';
import data from '../data/data.csv';
import { useDispatch } from 'react-redux'
import { addData } from '../store/EmploymentData/action'; 


const RenderD = (dispatch) =>{
    let year; 
    d3.csv(data, function(data) { 
        data.Total ?  dispatch(addData(year, data.Periodo, data.Total, data.Hombres, data.Mujeres)):  year = data.Periodo  ; 
    });
}; 

export default function RenderData(){
    const dispatch = useDispatch();
    //const [val, setVal] = useState(0); 
    //useEffect(()=> {setVal(RenderD(dispatch))},[])
    const val = RenderD(dispatch); 
    
    return(
        <div>{val}</div>
    );   
}
