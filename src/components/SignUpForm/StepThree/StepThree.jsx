import React from 'react';
import s from './StepThree.module.css';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const StepThree = () => {
  return (
    <div className="step3 df">
      <FormGroup>
        <TextField id="standard-basic" label="First Name" variant="standard" />
        <TextField id="standard-basic" label="Last Name" variant="standard" />
        <TextField id="standard-basic" label="Company Name" variant="standard" />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="I agree to the terms and conditions."
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="I agree to receive information about XOVI and its partners via email."
        />
        <Button className={s.button} variant="contained">Register</Button>
      </FormGroup>
    </div>
  );
};

export default StepThree;