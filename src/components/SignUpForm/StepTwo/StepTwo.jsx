import React from "react";
import s from "./StepTwo.module.css";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const StepTwo = ({ addData, formData, handleInputChange, handleTabChange }) => {
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
    console.log('formDataStep2:::', data)
    addData(data);
    handleTabChange("", 2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.container}>
        <span className={s.text}>
          What website would you like to analyze first?
        </span>
        <TextField
          name="domain"
          label="Domain (domain.com)"
          variant="standard"
          defaultValue={formData.domain}
          {...register("domain", { required: "Domain is required." })}
          error={Boolean(errors.domain)}
          helperText={errors.domain?.message}
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
            },
          }}
        />
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="seoForLabel">I do SEO for</InputLabel>
            <Select
              labelId="seoForLabel"
              id="seoFor"
              name="seoFor"
              defaultValue={formData.seoFor}
              {...register("seoFor")}
              label="seoFor"
              sx={{ width: 142 }}
            >
              <MenuItem value={1}>In-house SEO</MenuItem>
              <MenuItem value={2}>Agency</MenuItem>
              <MenuItem value={3}>E-Commerce</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="seoLevelLabel">SEO Level</InputLabel>
            <Select
              labelId="seoLevelLabel"
              id="seoLevel"
              name="seoLevel"
              defaultValue={formData.seoLevel}
              {...register("seoLevel")}
              label="seoLevel"
              sx={{ width: 142 }}
            >
              <MenuItem value={1}>Beginner</MenuItem>
              <MenuItem value={2}>Intermediate</MenuItem>
              <MenuItem value={3}>Advanced</MenuItem>
            </Select>
          </FormControl>
        </div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="seoToolsLabel">
            I already use other SEO tools
          </InputLabel>
          <Select
            labelId="seoToolsLabel"
            id="seoTools"
            name="seoTools"
            defaultValue={formData.seoTools}
            {...register("seoTools")}
            label="seoTools"
            sx={{ width: 314 }}
          >
            <MenuItem value="">Please choose</MenuItem>
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
        </FormControl>
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
          Step 3 &gt;
        </Button>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </form>
  );
};

export default StepTwo;
