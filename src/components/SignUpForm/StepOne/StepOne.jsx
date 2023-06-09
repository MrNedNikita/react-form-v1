import React from 'react';
import s from './StepOne.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
// { formData, handleInputChange, handleTabChange }
const StepOne = (props) => {
  console.log(props)

  const { register, handleSubmit, formState: { errors, isValid } } = useForm();

  const handleSubmitClick = () => {
    try {
      if (isValid) {
        onSubmit();
      } else {
        toast.error('Please fill out all required fields.');
      }
    } catch (error) {
      return;
    }
  }

  const onSubmit = (data) => {
    props.handleTabChange('', 1);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className={s.container}>
        <span className={s.text}>Start your free 14 days trial - no cancellation required!</span>
        <TextField
          name="email"
          label="Email Address"
          variant="standard"
          type="text"
          defaultValue={props.formData.email}
          onChange={(e) => props.handleInputChange(e)}
          {...register("email", {
            required: 'Email is required.',
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email',
            },
          })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          sx={{
            width: 314,
            "& .MuiInputBase-input": { textAlign: "center", },
            "& label": {
              width: "100%",
              textAlign: "center",
              transformOrigin: "center",
            },
            "& label.Mui-focused": {
              transformOrigin: "center",
              color: 'orange',
            },
            "& .Mui-focused:after": {
              borderBottom: '2px solid orange'
            },
          }}
        />
        <span className={s.text}>Find out how to optimize your website with XOVI:</span>
        <TextField
          name="phoneNumber"
          label="Telephone Number"
          variant="standard"
          type="number"
          defaultValue={props.formData.phoneNumber}
          onChange={(e) => props.handleInputChange(e)}
          sx={{
            width: 314,
            "& .MuiInputBase-input": { textAlign: "center" },
            "& label": {
              width: "100%",
              textAlign: "center",
              transformOrigin: "center",
            },
            "& label.Mui-focused": {
              transformOrigin: "center",
              color: 'orange',
            },
            "& .Mui-focused:after": {
              borderBottom: '2px solid orange'
            },
          }}
        />
        <span className={s.text}>XOVI GmbH will process your provided data to process your request in accordance with its Privacy Policy.</span>
        <Button
          className={s.button}
          variant="contained"
          type="submit"
          onClick={handleSubmitClick}
          sx={{
            width: 145,
            borderRadius: 12,
            mt: 1,
            fontWeight: '700',
            background: "linear-gradient(135deg,#fda822,#f38031)",
            color: "#fff"
          }}
        >
          Step 2 &gt;
        </Button>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </Box>
    </form>
  );
};

export default StepOne;
