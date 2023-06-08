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
            id="firstName"
            label="First Name"
            variant="standard"
            sx={{
              width: 142, marginRight: 4,
              "& label.Mui-focused": {
                transformOrigin: "center",
                color: 'orange',
              },
              "& .Mui-focused:after": {
                borderBottom: '2px solid orange'
              },
            }}
          />
          <TextField
            id="lastName"
            label="Last Name"
            variant="standard"
            sx={{
              width: 142,
              "& label.Mui-focused": {
                transformOrigin: "center",
                color: 'orange',
              },
              "& .Mui-focused:after": {
                borderBottom: '2px solid orange'
              },
            }}
          />
        </div>
        <TextField
          id="company"
          label="Company"
          variant="standard"
          sx={{
            width: 316, margin: 2,
            "& label.Mui-focused": {
              transformOrigin: "center",
              color: 'orange',
            },
            "& .Mui-focused:after": {
              borderBottom: '2px solid orange'
            },
          }}
        />
        <div className={s.checkboxesContainer}>
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
              },
            }}
          />
        </div>
        <Button
          className={s.button}
          variant="contained"
          sx={{
            width: 145,
            borderRadius: 12,
            mt: 1,
            fontWeight: '700',
            background: "linear-gradient(135deg,#fda822,#f38031)",
            color: "#fff"
          }}
        >
          Register
        </Button>
      </div>
    </FormGroup>
  );
};

export default StepThree;
