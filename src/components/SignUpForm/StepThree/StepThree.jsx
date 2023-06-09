import React from "react";
import s from "./StepThree.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const StepThree = ({ addData, formData, handleInputChange }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  // const handleSubmitClick = () => {
  //   try {
  //     if (isValid) {
  //       onSubmit();
  //     } else {
  //       toast.error("Please fill out all required fields.");
  //     }
  //   } catch (error) {
  //     return;
  //   }
  // };

  const onSubmit = (data) => {
    console.log("formDataStep3:::", data);
    addData(data);
  };

  // const onSubmit = (data) => {
  //   axios
  //     .post("https://suite.xovi.net/spa/user/register", formData)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.data);
  //     });
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.container}>
        <div>
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            variant="standard"
            defaultValue={formData.firstName}
            {...register("firstName", { required: "First Name is required." })}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
            sx={{
              width: 142,
              marginRight: 4,
              "& label.Mui-focused": {
                transformOrigin: "center",
              },
            }}
          />
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            variant="standard"
            defaultValue={formData.lastName}
            {...register("lastName", { required: "Last Name is required." })}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName?.message}
            sx={{
              width: 142,
              "& label.Mui-focused": {
                transformOrigin: "center",
              },
            }}
          />
        </div>
        <TextField
          id="company"
          name="companyName"
          label="Company"
          variant="standard"
          defaultValue={formData.companyName}
          {...register("companyName", {
            required: "Company Name is required.",
          })}
          error={Boolean(errors.companyName)}
          helperText={errors.companyName?.message}
          sx={{
            width: 316,
            margin: 2,
            "& label.Mui-focused": {
              transformOrigin: "center",
            },
          }}
        />
        <div className={s.checkboxesContainer}>
          <FormControlLabel
            control={
              <Checkbox
                name="tnc"
                defaultValue={formData.tnc}
                {...register("tnc")}
              />
            }
            label="I agree to the terms and conditions."
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: 12,
                color: "#8f8f8f",
              },
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="receiveEmail"
                defaultValue={formData.receiveEmail}
                {...register("receiveEmail")}
              />
            }
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
          type="submit"
          sx={{
            width: 145,
            borderRadius: 12,
            mt: 1,
            fontWeight: "700",
            background: "linear-gradient(135deg,#fda822,#f38031)",
            color: "#fff",
          }}
        >
          Register
        </Button>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </form>
  );
};

export default StepThree;
