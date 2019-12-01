import {createStore, combineReducers} from 'redux'; 
import employmentDataReducer from './EmploymentData/reducer'; 

const reducers = combineReducers({
    employmentDataReducer

}); 

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 


export default store; 