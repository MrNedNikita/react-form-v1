import React from 'react';
import s from './StepOne.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const StepOne = () => {
  return (
    <form>
      <div className={s.container}>
        <span className={s.text}>Start your free 14 days trial - no cancellation required!</span>
        <TextField 
          id="standard-basic" 
          label="Email Address" 
          variant="standard" 
          sx={{
            width: 314,
            input: {textAlign: "center"},
            "& label": {
              width: "100%",
              textAlign: "center",
              transformOrigin: "center",
                "&.Mui-focused": {
                  transformOrigin: "center"
                }
             }
          }}
        />
        <span className={s.text}>Find out how to optimize your website with XOVI:</span>
        <TextField
          id="standard-basic"
          label="Telephone Number"
          variant="standard"
          type="number"
          sx={{
            width: 314,
            input: {textAlign: "center"},
            "& label": {
              width: "100%",
              textAlign: "center",
              transformOrigin: "center",
                "&.Mui-focused": {
                  transformOrigin: "center"
                }
             }
          }}
        />
        <span className={s.text}>XOVI GmbH will process your provided data to process your request in accordance to its Privacy Policy.</span>
        <Button className={s.button} variant="contained">Step 2 &gt;</Button>
      </div>
    </form>
  );
};

export default StepOne;