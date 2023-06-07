import React from 'react';
import s from './StepOne.module.css';
import Button from '@mui/material/Button';

const StepOne = () => {
  return (
    <div className="step1">
      <h4>Start your free 14 days trial - no cancellation required!</h4>
      <form>
        <input type="text" placeholder="Email" />
        <input type="number" placeholder="Number" />
        <Button className={s.button} variant="contained">Register</Button>
      </form>
    </div>
  );
};

export default StepOne;