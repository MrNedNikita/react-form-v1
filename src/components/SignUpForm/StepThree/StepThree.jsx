import React from 'react';
import s from './StepThree.module.css';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const StepThree = () => {
  return (
    <FormGroup>
      <div className={s.container}>
        <div>
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
            sx={{ width: 142, marginRight: 4 }}
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="standard"
            sx={{ width: 142 }}
          />
        </div>
        <TextField
          id="standard-basic"
          label="Company"
          variant="standard"
          sx={{ width: 316, margin: 2 }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="I agree to the terms and conditions."
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: 12,
              color: "#8f8f8f",
            }
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="I agree to receive information about XOVI and its partners via email."
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: 12,
              color: "#8f8f8f",
            }
          }}
        />
        <Button className={s.button} variant="contained">Register</Button>
      </div>
    </FormGroup>
  );
};

export default StepThree;