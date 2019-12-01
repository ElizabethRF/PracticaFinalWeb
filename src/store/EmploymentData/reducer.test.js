import reducer from './reducer';
import * as actionTypes from './action'; 

describe('reducer',()=>{
    it('should return the initial state',()=>{
        expect(reducer(undefined,{})).toEqual({employmentData:[]}); 
    }); 
});