export const ADD_DATA = 'ADD_DATA';
export const FILTER_DATA = 'FILTER_DATA';

export const addData = (year,Periodo, Total, Hombres, Mujeres) =>{
    return {
      type: ADD_DATA,
      Periodo: Periodo,
      Total: Total,
      Hombres: Hombres,
      Mujeres: Mujeres,
      year: year
    }
  }


export const filterData = (year, value) => {
  return{
    type: FILTER_DATA, 
    year: year, 
    value: value
  }

}
