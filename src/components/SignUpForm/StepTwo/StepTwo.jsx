import React from 'react';
import s from './StepTwo.module.css';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';

const StepTwo = () => {
  const [seoFor, setSeoFor] = React.useState('');
  const [seoLevel, setSeoLevel] = React.useState('');
  const [seoTools, setSeoTools] = React.useState('');

  const handleSeoForChange = (event) => {
    setSeoFor(event.target.value);
  };

  const handleSeoLevelChange = (event) => {
    setSeoLevel(event.target.value);
  };

  const handleSeoToolsChange = (event) => {
    setSeoTools(event.target.value);
  };

  return (
    <FormGroup>
      <div className={s.container}>
        <span className={s.text}>What website would you like to analyze first?</span>
        <TextField
          id="domain"
          label="Domain (domain.com)"
          variant="standard"
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
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="seoForLabel">I do SEO for</InputLabel>
            <Select
              labelId="seoForLabel"
              id="seoFor"
              value={seoFor}
              onChange={handleSeoForChange}
              label="seoFor"
              sx={{ width: 142 }}
            >
              <MenuItem value={10}>In-house SEO</MenuItem>
              <MenuItem value={20}>Agency</MenuItem>
              <MenuItem value={30}>E-Commerce</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="seoLevelLabel">SEO Level</InputLabel>
            <Select
              labelId="seoLevelLabel"
              id="seoLevel"
              value={seoLevel}
              onChange={handleSeoLevelChange}
              label="seoLevel"
              sx={{ width: 142 }}
            >
              <MenuItem value={10}>Beginner</MenuItem>
              <MenuItem value={20}>Intermediate</MenuItem>
              <MenuItem value={30}>Advanced</MenuItem>
            </Select>
          </FormControl>
        </div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="seoToolsLabel">I already use other SEO tools</InputLabel>
          <Select
            labelId="seoToolsLabel"
            id="seoTools"
            value={seoTools}
            onChange={handleSeoToolsChange}
            label="seoTools"
            sx={{ width: 314 }}
          >
            <MenuItem value="">Please choose</MenuItem>
            <MenuItem value={10}>Yes</MenuItem>
            <MenuItem value={20}>No</MenuItem>
          </Select>
        </FormControl>
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
          Step 3 &gt;
        </Button>
      </div>
    </FormGroup>
  );
};

export default StepTwo;
