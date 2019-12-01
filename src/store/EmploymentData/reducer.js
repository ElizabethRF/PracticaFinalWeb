import * as actionTypes from './action';
const initialState = {employmentData:[]};

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_DATA'){
        return Object.assign({}, state, {
            employmentData:[
            ... state.employmentData,
            {
                year: action.year,
                periodo: action.Periodo,
                total: action.Total, 
                hombres: action.Hombres,
                mujeres: action.Mujeres, 
                active: true
            }
        ]
            
        })
        
    }else if(action.type === 'FILTER_DATA'){
        let employmentData = [...state.employmentData];  
        console.log('FILTER DATA',action.value); 

        employmentData.map((row, index) => (row.year === 2017 ? employmentData[index] ={
                year: row.year, 
                periodo: row.periodo,
                total: row.total, 
                hombres: row.hombres,
                mujeres: row.mujeres, 
                active: false
        } : console.log('ok'))); 
        return{
            ... state, 
            employmentData: employmentData
        }
            
    }
    return state; 

};

export default reducer; 