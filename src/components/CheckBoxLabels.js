import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { useDispatch } from 'react-redux'
import {filterData} from '../store/EmploymentData/action';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {

  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    checked2017: true,
    checked2018: true,
    checked2019: true
  });

  const handleChange = name => event => {
    dispatch(filterData({value: event.target.checked, year:2017 })); 

    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked2017}
            onChange={handleChange('checked2017')}
            value="checked2017"
            color="primary"
          />
        }
        label="2017"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checked2018}
            onChange={handleChange('checked2018')}
            value="checked2018"
          />
        }
        label="2018"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked2019}
            onChange={handleChange('checked2019')}
            value="checked2019"
            color="primary"
          />
        }
        label="2019"
      />
    </FormGroup>
  );
}